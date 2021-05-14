importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

// This will work!
workbox.routing.registerRoute(
    ({ request }) => {
        return request.url.includes(self.registration.scope);
    },
    new workbox.strategies.StaleWhileRevalidate()
);