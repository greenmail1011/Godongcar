#!/usr/bin/env python3
"""
把舊網站（WordPress）上的圖片下載到這個專案的 images/ 資料夾。

用法（在專案根目錄執行）：
    python tools/fetch_images.py

- 只需要 Python 3，不用另外安裝套件。
- 會先嘗試下載「原始大圖」，抓不到再改抓舊網站縮圖。
- 若有安裝 Pillow（pip install pillow），會順便把過大的照片縮到最長邊 1600px，
  讓網站載入更快；沒安裝就直接存原檔。
- 已經存在的檔案會跳過；要重抓請加 --force。
- 請在關閉 AWS 主機「之前」執行。
"""
import json
import re
import sys
import time
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlsplit, urlunsplit
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = Path(__file__).resolve().parent / "image-manifest.json"
MAX_EDGE = 1600
FORCE = "--force" in sys.argv


def encode(url: str) -> str:
    parts = urlsplit(url)
    return urlunsplit(parts._replace(path=quote(parts.path, safe="/%")))


def candidates(remote: str):
    """原始大圖（去掉 -300x300 這類尺寸字尾）優先，再退回縮圖。"""
    original = re.sub(r"-\d+x\d+(?=\.\w+$)", "", remote)
    return [original, remote] if original != remote else [remote]


def download(url: str) -> bytes:
    req = Request(encode(url), headers={"User-Agent": "Mozilla/5.0 (site migration)"})
    with urlopen(req, timeout=30) as r:
        return r.read()


def shrink(path: Path):
    try:
        from PIL import Image
    except ImportError:
        return
    if path.suffix.lower() == ".gif":
        return  # 保留動畫
    with Image.open(path) as im:
        if max(im.size) <= MAX_EDGE:
            return
        im.thumbnail((MAX_EDGE, MAX_EDGE))
        if path.suffix.lower() in (".jpg", ".jpeg"):
            im.convert("RGB").save(path, quality=84, optimize=True, progressive=True)
        else:
            im.save(path, optimize=True)


def main():
    items = json.loads(MANIFEST.read_text(encoding="utf-8"))
    ok, skipped, failed = 0, 0, []
    for item in items:
        dest = ROOT / item["local"]
        if dest.exists() and not FORCE:
            skipped += 1
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        for url in candidates(item["remote"]):
            try:
                data = download(url)
                dest.write_bytes(data)
                shrink(dest)
                size = dest.stat().st_size // 1024
                print(f"  ✓ {item['local']}  ({size} KB)")
                ok += 1
                break
            except (HTTPError, URLError, TimeoutError) as e:
                last = e
                continue
        else:
            print(f"  ✗ {item['local']}  ← {last}")
            failed.append(item)
        time.sleep(0.2)

    print(f"\n完成：下載 {ok}、已存在略過 {skipped}、失敗 {len(failed)}")
    if failed:
        print("下列圖片抓不到，請手動放到對應路徑：")
        for item in failed:
            print(f"  {item['local']}  ←  {item['remote']}")


if __name__ == "__main__":
    main()
