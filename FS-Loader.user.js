// ==UserScript==
// @name         FS Loader
// @version      1
// @match        https://xcashshop.world/*
// @run-at       document-idle
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @connect      raw.githubusercontent.com
// @connect      discord.com
// @connect      discordapp.com
// ==/UserScript==
(function () {
  'use strict';
  const URL_UTAMA = 'https://raw.githubusercontent.com/foxyshikii/foxyserver/refs/heads/main/FS-Panel.js';
  GM_xmlhttpRequest({
    method: 'GET',
    url: URL_UTAMA + '?t=' + Date.now(),
    onload: function (r) {
      if (r.status !== 200) { console.warn('[FS] gagal memuat, kode ' + r.status); return; }
      try { new Function('GM_xmlhttpRequest', 'unsafeWindow', r.responseText)(GM_xmlhttpRequest, unsafeWindow); }
      catch (e) { console.error('[FS] error saat menjalankan', e); }
    },
    onerror: function () { console.warn('[FS] tidak bisa terhubung ke GitHub'); }
  });
})();
