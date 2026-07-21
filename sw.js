/**
 * ALCPT Premium - Service Worker
 * Full Offline Caching Strategy
 */

const CACHE_NAME = 'alcpt-premium-v1';
const STATIC_ASSETS = [
    './',
    './index.html',
    './app.js',
    './manifest.json'
];

// Install: Cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate: Clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch: Cache-first strategy for static, network-fallback for others
self.addEventListener('fetch', (event) => {
    const { request } = event;
    
    // Skip non-GET requests
    if (request.method !== 'GET') return;

    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) {
                return cached;
            }
            
            return fetch(request).then((response) => {
                // Don't cache if not valid
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                
                // Clone and cache
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(request, responseToCache);
                });
                
                return response;
            }).catch(() => {
                // Offline fallback for navigation
                if (request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});

