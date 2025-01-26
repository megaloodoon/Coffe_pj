self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll(['/Types.json']); // ذخیره فایل JSON در کش
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // ابتدا از کش فایل‌ها را بخوان
            return response || fetch(event.request); // اگر فایل در کش نبود، درخواست را ارسال کن
        })
    );
});
