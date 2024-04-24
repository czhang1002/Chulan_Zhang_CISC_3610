var staticCacheName = "pwa";

self.addEventListener("install", function (e) {
e.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(["/"]);
        })
    );
});

self.addEventListener("fetch", function (event) {
console.log(event.request.url);

event.respondWith(
            caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
//   }