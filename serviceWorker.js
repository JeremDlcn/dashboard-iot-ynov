const staticDashboard = "dashboard-v1";
const assets = [
    "/index.html",
    "/style.css",
    "/auth.js",
    "/app.js",
    "/logo.png",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDashboard).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});