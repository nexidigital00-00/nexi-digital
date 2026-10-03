// Gel Al uygulaması için en küçük service worker.
// Bilerek hiçbir şey önbelleğe almaz: fiyatlar ve menü her zaman güncel gelsin.
// İnternet yoksa sayfa açılışında anlaşılır bir mesaj gösterir.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if(e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bağlantı yok</title>' +
    '<body style="font:16px/1.5 system-ui;background:#eef2ec;color:#12443f;padding:40px 20px;text-align:center">' +
    '<h1 style="font-size:22px">İnternet bağlantısı yok</h1><p>Bağlantınız gelince sayfayı yenileyin.</p></body>',
    {headers: {"Content-Type": "text/html; charset=utf-8"}})));
});
