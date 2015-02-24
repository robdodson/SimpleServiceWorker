// Load cache polyfill
importScripts('scripts/serviceworker-cache-polyfill.js');

var CACHE_NAME = 'my-site-cache-v3';

// The files we want to cache
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
  console.log('service worker installed');
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
