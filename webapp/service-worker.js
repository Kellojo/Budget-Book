importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

// This will work!
workbox.routing.registerRoute(
    ({ request }) => {
        return request.url.includes(self.registration.scope) && !request.url.includes("localhost:8080");
    },
    new workbox.strategies.StaleWhileRevalidate()
);