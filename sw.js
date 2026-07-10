const CACHE_NAME = 'recetario-v37';
const ASSETS = [
  './index.html', './manifest.json', './icon-192.png', './icon-512.png', './fooddb.js',
  './vendor/react.production.min.js', './vendor/react-dom.production.min.js', './vendor/babel.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Never cache external API calls (e.g. Open Food Facts) or CDN scripts - always go to network
  if (url.origin !== self.location.origin) {
    return;
  }

  // El documento principal (la app en sí) va "red primero": si hay conexión,
  // siempre se sirve la versión más reciente al instante, sin depender de que
  // el navegador detecte que cambió este archivo sw.js. Si no hay red, se usa
  // la última copia guardada.
  const isDocumento = event.request.mode === 'navigate' || url.pathname.endsWith('index.html');
  if (isDocumento) {
    event.respondWith(
      fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // El resto de recursos estáticos (JS de librerías, iconos...) van "caché
  // primero", ya que casi nunca cambian y así la app carga más rápido y funciona offline.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    }).catch(() => caches.match('./index.html'))
  );
});
