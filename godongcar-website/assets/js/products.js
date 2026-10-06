/* =========================================================
   手作美食資料
   ---------------------------------------------------------
   新增或修改商品，只要改下面的 PRODUCTS 清單：
     id     ：不重複的代號（首頁精選用 data-featured 指定）
     no     ：商品編號，例如 "No.1001"（沒有可留空 ""）
     name   ：品名
     diet   ："全素"、"蛋素"，不確定就留空 ""
     spec   ：規格，例如 "400g"、"每包 10 粒"
     cat    ：分類，必須是 CATEGORIES 裡的其中一個
     img    ：圖片路徑（放在 images/products/）
     remote ：舊網站的圖片網址，本機圖片還沒放好時會先借用（可刪除）
     price  ：價格（選填，填了才會顯示，例如 "NT$180"）
     note   ：備註（選填，例如預購天數）
   ========================================================= */
(function () {
  'use strict';

  var OLD = 'https://www.godongcarrestaurant.com/wp-content/uploads/2024/05/';

  var CATEGORIES = ['即時美食', '在地小吃', '冷盤食品', '菩提寶醬', '美味湯底', '中秋禮盒系列', '年菜系列'];

  var PRODUCTS = [
    // 即時美食
    { id: '1001', no: 'No.1001', name: '原味猴頭菇', diet: '蛋素', spec: '400g', cat: '即時美食', img: 'images/products/1001.jpeg', remote: OLD + 'No.1001-原味猴頭菇【蛋素】400g-300x300.jpeg' },
    { id: '1002', no: 'No.1002', name: '麻油猴頭菇', diet: '蛋素', spec: '300g 固狀物＋300g 麻油高湯', cat: '即時美食', img: 'images/products/1002.jpeg', remote: OLD + 'No.1002-麻油猴頭菇【蛋素】300g固狀物300g麻油高湯--300x300.jpeg' },
    { id: '1003', no: 'No.1003', name: '鮮嫩素羊若', diet: '蛋素', spec: '600g', cat: '即時美食', img: 'images/products/1003.jpg', remote: OLD + '1547463325_thumb_630_843-300x300.jpg' },
    { id: '1004', no: 'No.1004', name: '素魚', diet: '蛋素', spec: '每隻', cat: '即時美食', img: 'images/products/1004.jpeg', remote: OLD + 'No.1004-素魚【蛋素】隻-300x300.jpeg' },
    { id: '1005', no: 'No.1005', name: '東北蔬菜水餃', diet: '全素', spec: '每包 40 顆', cat: '即時美食', img: 'images/products/1005.png', remote: OLD + 'No.1005-東北蔬菜水餃【全素】包40顆-300x300.png' },
    { id: '1006', no: 'No.1006', name: '糖醋鱈魚', diet: '蛋素', spec: '每盒 10 片', cat: '即時美食', img: 'images/products/1006.jpeg', remote: OLD + 'No.1006-糖醋鱈魚【蛋素】盒10片-300x300.jpeg' },
    { id: '1007', no: 'No.1007', name: '蒲燒素曼', diet: '全素', spec: '每片', cat: '即時美食', img: 'images/products/1007.jpeg', remote: OLD + 'No.1007-蒲燒素曼【全素】100元片-300x300.jpeg' },
    { id: '1008', no: 'No.1008', name: '煙燻麵腸', diet: '全素', spec: '300g', cat: '即時美食', img: 'images/products/1008.jpeg', remote: OLD + 'No.1008-煙燻麵腸【全素】300g-300x300.jpeg' },
    { id: '1009', no: 'No.1009', name: '牛蒡貢丸', diet: '全素', spec: '600g', cat: '即時美食', img: 'images/products/1009.jpeg', remote: OLD + 'No.1009-牛蒡貢丸【全素】600g-300x300.jpeg' },
    { id: '1010', no: 'No.1010', name: '鐵路素排', diet: '蛋素', spec: '600g', cat: '即時美食', img: 'images/products/1010.jpeg', remote: OLD + 'No.1010-鐵路素排【蛋素】600g-300x300.jpeg' },

    // 在地小吃
    { id: '2001', no: 'No.2001', name: '蔬菜包子', diet: '全素', spec: '每包 10 粒', cat: '在地小吃', img: 'images/products/2001.jpeg', remote: OLD + 'No.2001-蔬菜包子【全素】包10粒-300x300.jpeg' },
    { id: '2002', no: 'No.2002', name: '素若包', diet: '全素', spec: '每包 10 粒', cat: '在地小吃', img: 'images/products/2002.jpeg', remote: OLD + 'No.2002-素若包【全素】包10粒-300x300.jpeg' },
    { id: '2003', no: 'No.2003', name: '素若粽', diet: '全素', spec: '單粒／一串 20 粒', cat: '在地小吃', img: 'images/products/2003.jpeg', remote: OLD + 'No.2003素若粽【全素】40元粒、800元串20粒-300x300.jpeg' },
    { id: '2004', no: 'No.2004', name: '大餛飩', diet: '全素', spec: '每盒 16 顆', cat: '在地小吃', img: 'images/products/2004.jpeg', remote: OLD + 'No.2004-大餛飩【全素】盒16顆-300x300.jpeg' },
    { id: '2005', no: 'No.2005', name: '素若圓', diet: '全素', spec: '每盒 5 粒', cat: '在地小吃', img: 'images/products/2005.jpeg', remote: OLD + 'No.2005-素若圓【全素】盒5粒-300x300.jpeg' },
    { id: '2006', no: 'No.2006', name: '豆包捲', diet: '全素', spec: '3 條', cat: '在地小吃', img: 'images/products/2006.jpeg', remote: OLD + 'No.2006-豆包捲【全素】3條-300x300.jpeg' },

    // 冷盤食品
    { id: '3001', no: 'No.3001', name: '蓮花干', diet: '全素', spec: '每顆 300g', cat: '冷盤食品', img: 'images/products/3001.jpeg', remote: OLD + 'No.3001-蓮花干【全素】顆300g-300x300.jpeg' },
    { id: '3002', no: 'No.3002', name: '叉燒若', diet: '蛋素', spec: '600g', cat: '冷盤食品', img: 'images/products/3002.jpg', remote: OLD + 'No.3002-叉燒若【蛋素】180元600g-300x300.jpg' },

    // 菩提寶醬
    { id: '4001', no: 'No.4001', name: '香椿醬', diet: '全素', spec: '每罐', cat: '菩提寶醬', img: 'images/products/4001.jpeg', remote: OLD + 'No.4001-香椿醬【全素】罐_0-300x300.jpeg' },

    // 美味湯底
    { id: '5001', no: 'No.5001', name: '藥膳火鍋湯底', diet: '全素', spec: '800cc', cat: '美味湯底', img: 'images/products/5001.png', remote: OLD + 'No.5001-藥膳火鍋湯底【全素】800cc-300x300.png' },
    { id: '5002', no: 'No.5002', name: '藥膳猴頭菇火鍋湯底', diet: '蛋素', spec: '800cc', cat: '美味湯底', img: 'images/products/5002.png', remote: OLD + 'No.5002-藥膳猴頭菇火鍋湯底【蛋素】800cc-300x300.png' },

    // 中秋禮盒系列
    { id: 'pineapple-cake', no: '', name: '台灣土鳳梨酥', diet: '', spec: '', cat: '中秋禮盒系列', img: 'images/products/pineapple-cake.jpeg', remote: OLD + '台灣土鳳梨酥_2-300x300.jpeg' },

    // 年菜系列
    { id: 'ny-01', no: 'No.1', name: '蒲燒素曼', diet: '全素', spec: '1 片', cat: '年菜系列', img: 'images/products/ny-01.jpeg', remote: OLD + 'No.1-蒲燒素曼【全素】1片-300x300.jpeg' },
    { id: 'ny-02', no: 'No.2', name: '白玉豆腦羹', diet: '全素', spec: '10 人份', cat: '年菜系列', img: 'images/products/ny-02.jpeg', remote: OLD + 'No.2-白玉豆腦羹【全素】10人份-300x300.jpeg' },
    { id: 'ny-03', no: 'No.3', name: '叉燒若', diet: '蛋素', spec: '600g', cat: '年菜系列', img: 'images/products/3002.jpg', remote: OLD + 'No.3002-叉燒若【蛋素】180元600g-300x300.jpg' },
    { id: 'ny-04', no: 'No.4', name: '蓮花干拼盤', diet: '全素', spec: '每個', cat: '年菜系列', img: 'images/products/ny-04.jpeg', remote: OLD + 'No.4-蓮花干拼盤【全素】個-300x300.jpeg' },
    { id: 'ny-06', no: 'No.6', name: '煙鵝', diet: '全素', spec: '每條', cat: '年菜系列', img: 'images/products/ny-06.jpeg', remote: OLD + 'No.6-煙鵝【全素】100條-300x300.jpeg' },
    { id: 'ny-07', no: 'No.7', name: '鐵路素排', diet: '蛋素', spec: '600g', cat: '年菜系列', img: 'images/products/ny-07.jpeg', remote: OLD + 'No.7-鐵路素排【蛋素】600g-300x300.jpeg' },
    { id: 'ny-08', no: 'No.8', name: '糖醋鱈魚', diet: '蛋素', spec: '每盒 10 片', cat: '年菜系列', img: 'images/products/ny-08.jpg', remote: OLD + 'No.8-糖醋鱈魚【蛋素】360盒10片-300x300.jpg' },
    { id: 'ny-09', no: 'No.9', name: '牛蒡丸', diet: '蛋素', spec: '600g', cat: '年菜系列', img: 'images/products/ny-09.jpeg', remote: OLD + 'No.9-牛蒡丸【蛋素】600g-300x300.jpeg' },
    { id: 'ny-10', no: 'No.10', name: '佛跳牆（含甕）', diet: '全素', spec: '', cat: '年菜系列', img: 'images/products/ny-10.gif', remote: OLD + 'No.10-佛跳牆含甕【全素】請於取貨前7天訂購-300x300.gif', note: '請於取貨前 7 天訂購' }
  ];

  /* ---------- 以下為顯示邏輯，一般不需要修改 ---------- */

  var PHONE_1 = { tel: '+88635182615', text: '03-518-2615' };
  var PHONE_2 = { tel: '+88635182625', text: '03-518-2625' };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function stamp(diet, inline) {
    if (!diet) return '';
    var cls = diet === '全素' ? 'stamp--vegan' : 'stamp--egg';
    return '<span class="stamp ' + cls + (inline ? ' stamp--inline' : '') + '">' + esc(diet) + '</span>';
  }

  function imgTag(p, lazy) {
    return '<img src="' + esc(p.img) + '"' +
      (p.remote ? ' data-fallback="' + esc(p.remote) + '"' : '') +
      ' alt="' + esc(p.name) + '"' + (lazy ? ' loading="lazy"' : '') + '>';
  }

  function card(p) {
    return '<article class="product">' +
      stamp(p.diet) +
      '<div class="media" data-label="' + esc(p.name) + '">' + imgTag(p, true) + '</div>' +
      '<div class="product-body">' +
        (p.no ? '<p class="product-no">' + esc(p.no) + '</p>' : '') +
        '<h3 class="product-name"><button type="button" class="product-link" data-id="' + esc(p.id) + '" aria-haspopup="dialog">' + esc(p.name) + '</button></h3>' +
        (p.spec ? '<p class="product-spec">' + esc(p.spec) + '</p>' : '') +
        (p.price ? '<p class="product-price">' + esc(p.price) + '</p>' : '') +
        (p.note ? '<p class="product-note">' + esc(p.note) + '</p>' : '') +
      '</div>' +
    '</article>';
  }

  function findById(id) {
    for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i];
    return null;
  }

  // 商品詳細對話框
  var dialog = null;
  function ensureDialog() {
    if (dialog) return dialog;
    dialog = document.createElement('dialog');
    dialog.className = 'product-dialog';
    dialog.setAttribute('aria-labelledby', 'product-dialog-title');
    document.body.appendChild(dialog);
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog || e.target.closest('.dialog-close')) dialog.close();
    });
    return dialog;
  }
  function openProduct(p, trigger) {
    var d = ensureDialog();
    if (typeof d.showModal !== 'function') return; // 很舊的瀏覽器：不開對話框
    d.innerHTML =
      '<button type="button" class="dialog-close" aria-label="關閉">×</button>' +
      '<div class="dialog-inner">' +
        '<div class="media" data-label="' + esc(p.name) + '">' + imgTag(p, false) + '</div>' +
        '<div class="dialog-body">' +
          (p.no ? '<p class="product-no">' + esc(p.no) + '</p>' : '') +
          '<h2 id="product-dialog-title">' + esc(p.name) + '</h2>' +
          '<div class="meta">' + stamp(p.diet, true) + '<span>' + esc(p.cat) + '</span></div>' +
          (p.spec ? '<p class="product-spec">規格：' + esc(p.spec) + '</p>' : '') +
          (p.price ? '<p class="product-price">' + esc(p.price) + '</p>' : '') +
          (p.note ? '<p class="product-note">' + esc(p.note) + '</p>' : '') +
          '<div class="call"><p>訂購或詢問請來電</p>' +
            '<a class="btn" href="tel:' + PHONE_1.tel + '">' + PHONE_1.text + '</a> ' +
            '<a class="btn btn--ghost" href="tel:' + PHONE_2.tel + '">' + PHONE_2.text + '</a>' +
          '</div>' +
        '</div>' +
      '</div>';
    d.showModal();
    d.addEventListener('close', function onClose() {
      d.removeEventListener('close', onClose);
      if (trigger) trigger.focus();
    });
  }

  function bindCardClicks(root) {
    root.addEventListener('click', function (e) {
      var btn = e.target.closest('.product-link');
      if (!btn) return;
      var p = findById(btn.getAttribute('data-id'));
      if (p) openProduct(p, btn);
    });
  }

  // 首頁精選
  var featured = document.querySelector('[data-featured]');
  if (featured) {
    var ids = featured.getAttribute('data-featured').split(',');
    featured.innerHTML = ids.map(function (id) { return findById(id.trim()); })
      .filter(Boolean).map(card).join('');
    bindCardClicks(featured);
  }

  // 手作美食頁：分類與素別篩選
  var grid = document.getElementById('product-grid');
  if (grid) {
    var catWrap = document.getElementById('filter-cat');
    var dietWrap = document.getElementById('filter-diet');
    var countEl = document.getElementById('result-count');
    var state = { cat: '', diet: '' };

    var counts = {};
    PRODUCTS.forEach(function (p) { counts[p.cat] = (counts[p.cat] || 0) + 1; });

    catWrap.innerHTML =
      '<button type="button" class="chip" data-cat="">全部<span class="count">' + PRODUCTS.length + '</span></button>' +
      CATEGORIES.map(function (c) {
        return '<button type="button" class="chip" data-cat="' + esc(c) + '">' + esc(c) + '<span class="count">' + (counts[c] || 0) + '</span></button>';
      }).join('');

    dietWrap.innerHTML = '<span class="filter-inline-label">素別</span>' + ['', '全素', '蛋素'].map(function (d) {
      return '<button type="button" class="chip" data-diet="' + d + '">' + (d || '不限') + '</button>';
    }).join('');

    function render() {
      var list = PRODUCTS.filter(function (p) {
        return (!state.cat || p.cat === state.cat) && (!state.diet || p.diet === state.diet);
      });
      grid.innerHTML = list.length
        ? list.map(card).join('')
        : '<p class="empty">這個分類目前沒有符合的商品，請改選其他條件。</p>';
      countEl.textContent = '共 ' + list.length + ' 項';
      catWrap.querySelectorAll('.chip').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-cat') === state.cat));
      });
      dietWrap.querySelectorAll('.chip').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-diet') === state.diet));
      });
    }

    catWrap.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (!b) return;
      state.cat = b.getAttribute('data-cat');
      history.replaceState(null, '', state.cat ? '#' + encodeURIComponent(state.cat) : location.pathname);
      render();
    });
    dietWrap.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (!b) return;
      state.diet = b.getAttribute('data-diet');
      render();
    });

    function readHash() {
      var h = decodeURIComponent(location.hash.replace(/^#/, ''));
      state.cat = CATEGORIES.indexOf(h) >= 0 ? h : '';
    }
    window.addEventListener('hashchange', function () { readHash(); render(); });

    readHash();
    render();
    bindCardClicks(grid);
  }
})();
