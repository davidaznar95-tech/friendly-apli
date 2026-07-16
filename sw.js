const CACHE = "nyc-trip-v3";
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  // Network first for HTML, cache first for assets
  if(e.request.url.includes("index.html") || e.request.url.endsWith("/")){
    e.respondWith(fetch(e.request).then(r=>{
      const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));return r;
    }).catch(()=>caches.match(e.request)));
  } else {
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }
});
