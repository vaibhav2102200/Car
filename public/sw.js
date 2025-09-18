// Service Worker to suppress WhatsApp manifest errors
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // Block WhatsApp manifest requests
  if (url.includes('api.whatsapp.com/data/manifest.json') || 
      url.includes('manifest.json') && url.includes('whatsapp')) {
    event.respondWith(
      new Response('{}', {
        status: 200,
        statusText: 'OK',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    );
    return;
  }
  
  // Let other requests pass through normally
  event.respondWith(fetch(event.request));
});

// Suppress console errors in service worker
self.addEventListener('error', (event) => {
  if (event.message && (
    event.message.includes('manifest.json') || 
    event.message.includes('api.whatsapp.com')
  )) {
    event.preventDefault();
  }
});






