const CACHE_NAME = 'russigram-v1';
const urlsToCache = [
  '/Russian-Telegram/',
  '/Russian-Telegram/index.html',
  '/Russian-Telegram/site.webmanifest',
  '/Russian-Telegram/favicon.ico',
  '/Russian-Telegram/favicon-96x96.png',
  '/Russian-Telegram/favicon-192x192.png',
  '/Russian-Telegram/favicon-512x512.png',
  '/Russian-Telegram/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
