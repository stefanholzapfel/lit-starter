import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';

// For reloading on new version
addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        (self as any).skipWaiting();
    }
});

// Precache manifest injected by bundler
precacheAndRoute((self as any).__WB_MANIFEST);

registerRoute(new NavigationRoute(createHandlerBoundToURL('/index.html')));
