# 古今車用中｜景觀志工餐廳 官網

純 HTML／CSS／JavaScript 的靜態網站，不需要資料庫或伺服器，直接放在 GitHub Pages 免費託管。
取代原本架在 AWS 上的 WordPress 網站，版面、配色、字體都照原網站（Astra + Elementor）重現。

> **上傳時要注意**：打開解壓縮後的資料夾，全選「裡面的東西」拖進 GitHub，
> 不要把整個資料夾拖進去。上傳後 repo 最上層要直接看得到 `index.html` 和 `assets`。

## 檔案結構

```
index.html          首頁
volunteers.html     餐廳志工
products.html       手作美食（左側分類＋商品格，跟原網站一樣）
product.html        單一商品頁（網址：product.html?id=商品代號）
set-menu.html       合菜菜單
buffet.html         歐式自助餐
order.html          點餐菜單
contact.html        聯絡我們
404.html            找不到頁面（舊商品網址會自動導到手作美食）
assets/css/style.css
assets/js/main.js       手機選單、回到頂端
assets/js/products.js   ★ 手作美食的商品資料都在這裡
images/                 網站圖片（執行下面的步驟 1 後才會有）
tools/fetch_images.py   從舊網站下載圖片的小工具
tools/image-manifest.json
餐廳志工/、elementor-4995/、menu/ …   舊網址轉址頁，讓舊連結、Google 搜尋結果不會失效
```

## 1. 先把舊網站的圖片抓下來（AWS 關機前一定要做）

```bash
python tools/fetch_images.py
```

會把 48 張圖片存到 `images/`，優先抓原始大圖。若有安裝 Pillow（`pip install pillow`），
會自動把過大的照片縮到最長邊 1600px。

在還沒抓圖之前，網頁會暫時借用舊網站上的圖片顯示；舊網站關掉後若本機也沒有圖，
該位置會顯示綠色斜紋＋文字的替代畫面，不會出現破圖。

## 2. 本機預覽

```bash
python -m http.server 8000
```

瀏覽器開 http://localhost:8000

## 3. 上傳到 GitHub 並開啟 Pages

1. 在 GitHub 建一個新的 repository（例如 `godongcar-website`），把整個資料夾內容推上去。
2. 到 repo 的 **Settings → Pages**。
3. **Source** 選 *Deploy from a branch*，Branch 選 `main`、資料夾選 `/ (root)`，按 Save。
4. 一兩分鐘後會出現網址：`https://<你的帳號>.github.io/godongcar-website/`

## 4. 綁定原本的網域 godongcarrestaurant.com

1. **Settings → Pages → Custom domain** 填 `www.godongcarrestaurant.com`，按 Save
   （GitHub 會自動在 repo 裡建立 `CNAME` 檔）。
2. 到網域商的 DNS 設定：
   - `www` 新增 **CNAME** 記錄，指向 `<你的帳號>.github.io`
   - 根網域 `@` 新增 4 筆 **A** 記錄：
     `185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`
   - 刪掉原本指向 AWS 的 A 記錄
3. DNS 生效後（幾分鐘到幾小時），回到 Pages 設定勾選 **Enforce HTTPS**。
4. 確認新網站正常、圖片都在 `images/` 之後，再關閉 AWS 主機。

> 頁面裡的 `og:image`、`canonical` 等網址是以 `https://www.godongcarrestaurant.com/` 為準。
> 如果最後用的是別的網址，用編輯器全域搜尋 `www.godongcarrestaurant.com` 一次換掉即可。

## 常見修改

**新增或修改手作美食**：編輯 `assets/js/products.js` 最上面的 `PRODUCTS` 清單，
複製一行改內容，圖片放到 `images/products/`。想顯示價格就加上 `price: 'NT$180'`。

**首頁「手作美食」顯示哪幾項**：同一個檔案裡的 `FEATURED`，填商品的 `id`，每 3 項一頁。

**換菜單圖**：直接用新圖覆蓋 `images/menus/` 裡同名的檔案
（`set-menu.jpeg` 合菜、`buffet.png` 歐式自助餐、`order-menu.png` 點餐）。

**改電話、地址、選單**：這些在每個頁面的頁首和頁尾都有一份，
請用編輯器（例如 VS Code 的「在檔案中取代」）一次全部替換。

**首頁大圖**：`images/home/hero-1.jpg`（WELCOME 那張），直接用同名檔案覆蓋即可。

## 字型

跟原網站相同：標題用 Merriweather（中文搭配 Noto Serif TC 明體），內文用 Open Sans。
