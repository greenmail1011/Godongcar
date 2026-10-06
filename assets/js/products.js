/* =========================================================
   手作美食資料（品名沿用原網站）
   ---------------------------------------------------------
   新增或修改商品，只要改下面的 PRODUCTS 清單：
     id     ：不重複的代號，商品頁網址會用到（product.html?id=代號）
     title  ：品名，照原網站寫法
     cat    ：分類，必須是 CATEGORIES 裡的其中一個
     img    ：圖片路徑（放在 images/products/）
     remote ：舊網站的圖片網址，本機圖片還沒放好時會先借用（可刪除）
     note   ：備註（選填）
     price  ：價格（選填，填了才會顯示，例如 "NT$180"）
   首頁「手作美食」顯示哪幾項：改 FEATURED（每 3 項一頁）。
   ========================================================= */
(function () {
  'use strict';

  var OLD = 'https://www.godongcarrestaurant.com/wp-content/uploads/2024/05/';

  var CATEGORIES = ['即時美食', '在地小吃', '冷盤食品', '菩提寶醬', '美味湯底', '中秋禮盒系列', '年菜系列'];

  var PRODUCTS = [
    { id: '1001', title: 'No.1001 原味猴頭菇【蛋素】/400g', cat: '即時美食', img: 'images/products/1001.jpeg', remote: OLD + 'No.1001-原味猴頭菇【蛋素】400g-300x300.jpeg' },
    { id: '1002', title: 'No.1002 麻油猴頭菇【蛋素】/300g固狀物+300g麻油高湯', cat: '即時美食', img: 'images/products/1002.jpeg', remote: OLD + 'No.1002-麻油猴頭菇【蛋素】300g固狀物300g麻油高湯--300x300.jpeg' },
    { id: '1003', title: 'No.1003 鮮嫩素羊若【蛋素】/600g', cat: '即時美食', img: 'images/products/1003.jpg', remote: OLD + '1547463325_thumb_630_843-300x300.jpg' },
    { id: '1004', title: 'No.1004 素魚【蛋素】/隻', cat: '即時美食', img: 'images/products/1004.jpeg', remote: OLD + 'No.1004-素魚【蛋素】隻-300x300.jpeg' },
    { id: '1005', title: 'No.1005 東北蔬菜水餃【全素】/包40顆', cat: '即時美食', img: 'images/products/1005.png', remote: OLD + 'No.1005-東北蔬菜水餃【全素】包40顆-300x300.png' },
    { id: '1006', title: 'No.1006 糖醋鱈魚【蛋素】/盒10片', cat: '即時美食', img: 'images/products/1006.jpeg', remote: OLD + 'No.1006-糖醋鱈魚【蛋素】盒10片-300x300.jpeg' },
    { id: '1007', title: 'No.1007 蒲燒素曼【全素】/片', cat: '即時美食', img: 'images/products/1007.jpeg', remote: OLD + 'No.1007-蒲燒素曼【全素】100元片-300x300.jpeg' },
    { id: '1008', title: 'No.1008 煙燻麵腸【全素】/300g', cat: '即時美食', img: 'images/products/1008.jpeg', remote: OLD + 'No.1008-煙燻麵腸【全素】300g-300x300.jpeg' },
    { id: '1009', title: 'No.1009 牛蒡貢丸【全素】/600g', cat: '即時美食', img: 'images/products/1009.jpeg', remote: OLD + 'No.1009-牛蒡貢丸【全素】600g-300x300.jpeg' },
    { id: '1010', title: 'No.1010 鐵路素排【蛋素】/600g', cat: '即時美食', img: 'images/products/1010.jpeg', remote: OLD + 'No.1010-鐵路素排【蛋素】600g-300x300.jpeg' },

    { id: '2001', title: 'No.2001 蔬菜包子【全素】/包10粒', cat: '在地小吃', img: 'images/products/2001.jpeg', remote: OLD + 'No.2001-蔬菜包子【全素】包10粒-300x300.jpeg' },
    { id: '2002', title: 'No.2002 素若包【全素】/包10粒', cat: '在地小吃', img: 'images/products/2002.jpeg', remote: OLD + 'No.2002-素若包【全素】包10粒-300x300.jpeg' },
    { id: '2003', title: 'No.2003素若粽【全素】', cat: '在地小吃', img: 'images/products/2003.jpeg', remote: OLD + 'No.2003素若粽【全素】40元粒、800元串20粒-300x300.jpeg' },
    { id: '2004', title: 'No.2004 大餛飩【全素】/盒16顆', cat: '在地小吃', img: 'images/products/2004.jpeg', remote: OLD + 'No.2004-大餛飩【全素】盒16顆-300x300.jpeg' },
    { id: '2005', title: 'No.2005 素若圓【全素】/盒5粒', cat: '在地小吃', img: 'images/products/2005.jpeg', remote: OLD + 'No.2005-素若圓【全素】盒5粒-300x300.jpeg' },
    { id: '2006', title: 'No.2006 豆包捲【全素】/3條', cat: '在地小吃', img: 'images/products/2006.jpeg', remote: OLD + 'No.2006-豆包捲【全素】3條-300x300.jpeg' },

    { id: '3001', title: 'No.3001 蓮花干【全素】/顆300g', cat: '冷盤食品', img: 'images/products/3001.jpeg', remote: OLD + 'No.3001-蓮花干【全素】顆300g-300x300.jpeg' },
    { id: '3002', title: 'No.3002 叉燒若【蛋素】/600g', cat: '冷盤食品', img: 'images/products/3002.jpg', remote: OLD + 'No.3002-叉燒若【蛋素】180元600g-300x300.jpg' },

    { id: '4001', title: 'No.4001 香椿醬【全素】/罐', cat: '菩提寶醬', img: 'images/products/4001.jpeg', remote: OLD + 'No.4001-香椿醬【全素】罐_0-300x300.jpeg' },

    { id: '5001', title: 'No.5001 藥膳火鍋湯底【全素】/800cc', cat: '美味湯底', img: 'images/products/5001.png', remote: OLD + 'No.5001-藥膳火鍋湯底【全素】800cc-300x300.png' },
    { id: '5002', title: 'No.5002 藥膳猴頭菇火鍋湯底【蛋素】/800cc', cat: '美味湯底', img: 'images/products/5002.png', remote: OLD + 'No.5002-藥膳猴頭菇火鍋湯底【蛋素】800cc-300x300.png' },

    { id: 'pineapple-cake', title: '台灣土鳳梨酥', cat: '中秋禮盒系列', img: 'images/products/pineapple-cake.jpeg', remote: OLD + '台灣土鳳梨酥_2-300x300.jpeg' },

    { id: 'ny-01', title: 'No.1 蒲燒素曼【全素】1片', cat: '年菜系列', img: 'images/products/ny-01.jpeg', remote: OLD + 'No.1-蒲燒素曼【全素】1片-300x300.jpeg' },
    { id: 'ny-02', title: 'No.2 白玉豆腦羹【全素】10人份', cat: '年菜系列', img: 'images/products/ny-02.jpeg', remote: OLD + 'No.2-白玉豆腦羹【全素】10人份-300x300.jpeg' },
    { id: 'ny-03', title: 'No.3 叉燒若【蛋素】600g', cat: '年菜系列', img: 'images/products/3002.jpg', remote: OLD + 'No.3002-叉燒若【蛋素】180元600g-300x300.jpg' },
    { id: 'ny-04', title: 'No.4 蓮花干拼盤【全素】/個', cat: '年菜系列', img: 'images/products/ny-04.jpeg', remote: OLD + 'No.4-蓮花干拼盤【全素】個-300x300.jpeg' },
    { id: 'ny-06', title: 'No.6 煙鵝【全素】100/條', cat: '年菜系列', img: 'images/products/ny-06.jpeg', remote: OLD + 'No.6-煙鵝【全素】100條-300x300.jpeg' },
    { id: 'ny-07', title: 'No.7 鐵路素排【蛋素】600g', cat: '年菜系列', img: 'images/products/ny-07.jpeg', remote: OLD + 'No.7-鐵路素排【蛋素】600g-300x300.jpeg' },
    { id: 'ny-08', title: 'No.8 糖醋鱈魚【蛋素】/盒10片', cat: '年菜系列', img: 'images/products/ny-08.jpg', remote: OLD + 'No.8-糖醋鱈魚【蛋素】360盒10片-300x300.jpg' },
    { id: 'ny-09', title: 'No.9 牛蒡丸【蛋素】600g', cat: '年菜系列', img: 'images/products/ny-09.jpeg', remote: OLD + 'No.9-牛蒡丸【蛋素】600g-300x300.jpeg' },
    { id: 'ny-10', title: 'No.10 佛跳牆(含甕)【全素】請於取貨前7天訂購', cat: '年菜系列', img: 'images/products/ny-10.gif', remote: OLD + 'No.10-佛跳牆含甕【全素】請於取貨前7天訂購-300x300.gif' }
  ];

  // 首頁「手作美食」：每 3 項一頁（原網站第一頁是 No.1、No.10、No.1001）
  var FEATURED = ['ny-01', 'ny-10', '1001', '1002', '1003', '1005', '2001', '2003', '3001'];
  var PER_PAGE = 3;

  /* ---------- 以下為顯示邏輯，一般不需要修改 ---------- */

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function byId(id) {
    for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i];
    return null;
  }
  function link(p) { return 'product.html?id=' + encodeURIComponent(p.id); }
  function img(p, lazy) {
    return '<div class="media" data-label="' + esc(p.title) + '"><img src="' + esc(p.img) + '"' +
      (p.remote ? ' data-fallback="' + esc(p.remote) + '"' : '') +
      ' alt="' + esc(p.title) + '"' + (lazy ? ' loading="lazy"' : '') + '></div>';
  }
  function shopCard(p) {
    return '<article class="shop-card"><a href="' + link(p) + '">' + img(p, true) +
      '<p class="cat">' + esc(p.cat) + '</p><h3>' + esc(p.title) + '</h3></a></article>';
  }

  // 首頁：每頁 3 項＋頁碼
  var featured = document.getElementById('featured');
  if (featured) {
    var list = FEATURED.map(byId).filter(Boolean);
    var pages = Math.ceil(list.length / PER_PAGE);
    var grid = featured.querySelector('.featured-grid');
    var pager = featured.querySelector('.pager');
    var page = 0;
    var showPage = function (n) {
      page = n;
      grid.innerHTML = list.slice(n * PER_PAGE, n * PER_PAGE + PER_PAGE).map(function (p) {
        return '<article class="featured-card"><a href="' + link(p) + '">' + img(p, false) + '</a>' +
          '<h3><a href="' + link(p) + '">' + esc(p.title) + '</a></h3>' +
          '<a class="btn btn--small" href="' + link(p) + '">Read more</a></article>';
      }).join('');
      var html = '';
      for (var i = 0; i < pages; i++) {
        html += '<button type="button" data-page="' + i + '"' + (i === n ? ' aria-current="page"' : '') + '>' + (i + 1) + '</button>';
      }
      if (n < pages - 1) html += '<button type="button" class="pager-next" data-page="' + (n + 1) + '">下一頁</button>';
      pager.innerHTML = pages > 1 ? html : '';
    };
    pager.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-page]');
      if (b) showPage(Number(b.getAttribute('data-page')));
    });
    showPage(0);
  }

  // 手作美食頁：左側分類＋商品格
  var shopGrid = document.getElementById('shop-grid');
  var catList = document.getElementById('cat-list');
  if (shopGrid && catList) {
    var counts = {};
    PRODUCTS.forEach(function (p) { counts[p.cat] = (counts[p.cat] || 0) + 1; });
    var showAll = document.getElementById('show-all');

    var render = function () {
      var cat = decodeURIComponent(location.hash.replace(/^#/, ''));
      if (CATEGORIES.indexOf(cat) < 0) cat = '';
      catList.innerHTML = CATEGORIES.map(function (c) {
        return '<li><a href="#' + encodeURIComponent(c) + '"' + (c === cat ? ' aria-current="true"' : '') + '>' + esc(c) + '</a><span class="count">(' + (counts[c] || 0) + ')</span></li>';
      }).join('');
      var items = PRODUCTS.filter(function (p) { return !cat || p.cat === cat; });
      shopGrid.innerHTML = items.length ? items.map(shopCard).join('') : '<p class="shop-empty">此分類目前沒有商品。</p>';
      if (showAll) showAll.hidden = !cat;
    };
    window.addEventListener('hashchange', render);
    render();
  }

  // 單一商品頁
  var detail = document.getElementById('product-detail');
  if (detail) {
    var id = new URLSearchParams(location.search).get('id');
    var p = byId(id);
    if (!p) {
      detail.innerHTML = '<p class="center">找不到這個商品，<a href="products.html">回到手作美食</a>。</p>';
    } else {
      document.title = p.title + ' – 古今車用中｜景觀志工餐廳';
      var related = PRODUCTS.filter(function (x) { return x.cat === p.cat && x.id !== p.id; }).slice(0, 3);
      detail.innerHTML =
        '<div class="product-main">' + img(p, false) +
          '<div class="product-info">' +
            '<h1>' + esc(p.title) + '</h1>' +
            (p.price ? '<p class="price">' + esc(p.price) + '</p>' : '') +
            (p.note ? '<p class="note">' + esc(p.note) + '</p>' : '') +
            '<p class="meta">分類：<a href="products.html#' + encodeURIComponent(p.cat) + '">' + esc(p.cat) + '</a></p>' +
            '<div class="order">訂購請來電：<a href="tel:+88635182615">03-518-2615</a> ｜ <a href="tel:+88635182625">03-518-2625</a></div>' +
          '</div>' +
        '</div>' +
        (related.length ? '<section class="related"><h2>相關商品</h2><div class="shop-grid">' + related.map(shopCard).join('') + '</div></section>' : '');
    }
  }
})();
