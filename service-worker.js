const CACHE_NAME = 'monopoly-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './libs/bootstrap.min.css',
    './libs/jquery.min.js',
    './fonts/Vazir.woff2',
    './fonts/Vazir.woff',
    './images/monopoly-logo.png'
];

// هنگام نصب: کش کردن فایل‌ها
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// هنگام fetch: اول از کش، اگه نبود از شبکه
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
