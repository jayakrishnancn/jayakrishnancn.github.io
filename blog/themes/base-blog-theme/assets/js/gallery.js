(function() {
  const galleries = document.querySelectorAll(".gallery-container");
  if (!galleries.length) return;

  // Create shared lightbox if it doesn't exist
  if (!document.getElementById("lightbox")) {
    document.body.insertAdjacentHTML("beforeend", `
      <div id="lightbox" class="lightbox hidden">
        <span class="close-btn">&times;</span>
        <div class="lightbox-content">
          <div class="lightbox-img-container">
            <div id="loading-spinner" class="hidden"><div class="spinner"></div></div>
            <img id="lightbox-img" src="" alt="Preview">
          </div>
          <div class="lightbox-info">
            <div class="lightbox-title-info">
              <div class="lightbox-title" id="img-title"></div>
              <div class="lightbox-location" id="img-location"></div>
            </div>
            <div class="lightbox-description" id="img-description"></div>
          </div>
        </div>
        <div class="lightbox-thumbs" id="thumbnail-container"></div>
        <button class="nav-btn prev-btn" id="prev-btn">&#10094;</button>
        <button class="nav-btn next-btn" id="next-btn">&#10095;</button>
      </div>
    `);
  }

  const SMALL = "x300", LARGE = "x1024";
  
  // Shared lightbox elements
  const lightboxEl = {
    box: document.getElementById("lightbox"),
    spinner: document.getElementById("loading-spinner"),
    img: document.getElementById("lightbox-img"),
    title: document.getElementById("img-title"),
    location: document.getElementById("img-location"),
    desc: document.getElementById("img-description"),
    thumbs: document.getElementById("thumbnail-container"),
    prev: document.getElementById("prev-btn"),
    next: document.getElementById("next-btn"),
    close: document.querySelector(".close-btn")
  };
  
  let currentGallery = null;
  let idx = 0, imgs = [], cache = {};

  function getPath(src, size) {
    return src.replace(`/gallery/${SMALL}/`, `/gallery/${size}/`);
  }

  function initGallery(gallery) {
    const MAX = gallery.dataset.max ? parseInt(gallery.dataset.max) : 2;
    const grid = gallery.querySelector(".gallery-grid");
    const extraEl = gallery.querySelector(".extra-images");
    
    if (!grid) return;
    
    const images = grid.querySelectorAll("img");
    
    const galleryImgs = [...images].map(img => ({
      smallSrc: img.dataset.smallSrc || getPath(img.src, SMALL),
      largeSrc: img.dataset.largeSrc || getPath(img.src, LARGE),
      title: img.dataset.title || img.alt || "",
      location: img.dataset.location || "",
      description: img.dataset.caption ||  img.dataset.title ?  img.alt : "" || ""
    }));

    images.forEach((img, i) => { img.src = galleryImgs[i].smallSrc; });

    // Handle max images display
    if (images.length > MAX && extraEl) {
      [...images].slice(MAX).forEach(img => { img.style.display = "none"; });
      extraEl.textContent = "+" + (images.length - MAX);
      extraEl.style.display = "flex";
      extraEl.addEventListener("click", () => openLightbox(galleryImgs, MAX), {passive: true});
    } else if (extraEl) {
      extraEl.style.display = "none";
    }

    grid.addEventListener("click", e => {
      if (e.target.tagName === "IMG") {
        const i = [...images].indexOf(e.target);
        if (i !== -1 && (i < MAX || images.length <= MAX)) {
          openLightbox(galleryImgs, i);
        }
      }
    }, {passive: true});

    // Preload first few images with requestIdleCallback for better performance
    const preloadImages = () => {
      for (let i = 0; i < Math.min(3, galleryImgs.length); i++) {
        preload(galleryImgs[i].largeSrc);
      }
    };

    if (window.requestIdleCallback) {
      requestIdleCallback(preloadImages, { timeout: 1000 });
    } else {
      setTimeout(preloadImages, 500);
    }
  }

  function preload(src) {
    if (!cache[src]) {
      const img = new Image();
      img.src = src;
      cache[src] = img;
    }
  }

  function openLightbox(galleryImgs, startIndex = 0) {
    imgs = galleryImgs;
    currentGallery = galleryImgs;
    open(startIndex);
  }

  let thumbsEventListenerAdded = false;

  function createThumbs() {
    lightboxEl.thumbs.innerHTML = "";

    // Add event listener only once
    if (!thumbsEventListenerAdded) {
      lightboxEl.thumbs.addEventListener("click", e => {
        if (e.target.tagName === "IMG") {
          const index = +e.target.dataset.index;
          if (!isNaN(index)) open(index);
        }
      }, {passive: true});
      thumbsEventListenerAdded = true;
    }
    
    const frag = document.createDocumentFragment();
    for (let n = 0; n < imgs.length; n++) {
      const t = document.createElement("img");
      t.src = imgs[n].smallSrc;
      t.className = "thumb-img" + (n === idx ? " active" : "");
      t.loading = "lazy";
      t.dataset.index = n;
      frag.appendChild(t);
    }
    lightboxEl.thumbs.appendChild(frag);
  }

  function open(i) {
    idx = i;
    createThumbs();
    preload(imgs[idx].largeSrc);
    if (idx > 0) preload(imgs[idx - 1].largeSrc);
    if (idx < imgs.length - 1) preload(imgs[idx + 1].largeSrc);
    update();
    lightboxEl.box.classList.remove("hidden");
    document.addEventListener("keydown", keys);
  }

  // Cache for parsed location data to avoid re-parsing
  const locationCache = new Map();
  
  function parseLocation(location) {
    if (locationCache.has(location)) {
      return locationCache.get(location);
    }
    
    let mapUrl, displayText = location;
    
    // Check if it's a full URL (e.g., specific maps link)
    if (location.startsWith('http://') || location.startsWith('https://')) {
      mapUrl = location;
      displayText = location.includes('maps.google.com') ? 'View on Google Maps' : 'View Location';
    }
    // Check if it's lat,lng coordinates (e.g., "40.7128,-74.0060" or "40.7128, -74.0060")
    else if (/^-?\d+\.?\d*\s*,\s*-?\d+\.?\d*$/.test(location.trim())) {
      const coords = location.trim().replace(/\s/g, '');
      mapUrl = `https://maps.google.com/maps?q=${coords}`;
      displayText = `📍 ${location}`;
    }
    // Default: treat as location name/address
    else {
      mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location)}`;
    }
    
    const result = { mapUrl, displayText };
    locationCache.set(location, result);
    return result;
  }

  let currentActiveThumb = null; // Track current active thumbnail

  function update() {
    const currentImg = imgs[idx];
    
    // Only show spinner if image isn't cached
    if (!cache[currentImg.largeSrc] || !cache[currentImg.largeSrc].complete) {
      lightboxEl.spinner.classList.remove("hidden");
    }
    
    // Use cached image if available
    if (cache[currentImg.largeSrc] && cache[currentImg.largeSrc].complete) {
      lightboxEl.img.src = currentImg.largeSrc;
      lightboxEl.spinner.classList.add("hidden");
    } else {
      lightboxEl.img.onload = lightboxEl.img.onerror = () => lightboxEl.spinner.classList.add("hidden");
      lightboxEl.img.src = currentImg.largeSrc;
    }
    
    lightboxEl.title.textContent = currentImg.title;
    
    // Make location clickable and link to Google Maps
    if (currentImg.location) {
      const { mapUrl, displayText } = parseLocation(currentImg.location);
      lightboxEl.location.innerHTML = `<a href="${mapUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; cursor: pointer;">${displayText}</a>`;
    } else {
      lightboxEl.location.textContent = "";
    }
    
    lightboxEl.desc.textContent = currentImg.description;
    
    // More efficient thumbnail active state update - only change what's needed
    if (currentActiveThumb !== null) {
      lightboxEl.thumbs.children[currentActiveThumb].classList.remove("active");
    }
    lightboxEl.thumbs.children[idx].classList.add("active");
    currentActiveThumb = idx;
  }

  function nav(d) {
    idx = (idx + d + imgs.length) % imgs.length;
    update();
    if (d > 0 && idx < imgs.length - 1) preload(imgs[idx + 1].largeSrc);
    else if (d < 0 && idx > 0) preload(imgs[idx - 1].largeSrc);
  }

  function closeBox() {
    lightboxEl.box.classList.add("hidden");
    lightboxEl.img.style.transform = "scale(1)";
    document.removeEventListener("keydown", keys);
  }

  function zoom() {
    lightboxEl.img.style.transform = lightboxEl.img.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
  }

  function keys(e) {
    if (e.key === "Escape") closeBox();
    else if (e.key === "ArrowLeft") nav(-1);
    else if (e.key === "ArrowRight") nav(1);
  }

  // Initialize lightbox event listeners once
  function initLightboxEvents() {
    lightboxEl.prev.addEventListener("click", () => nav(-1), {passive: true});
    lightboxEl.next.addEventListener("click", () => nav(1), {passive: true});
    lightboxEl.close.addEventListener("click", closeBox, {passive: true});
    lightboxEl.img.addEventListener("click", zoom, {passive: true});
    lightboxEl.box.addEventListener("click", e => { 
      if (e.target === lightboxEl.box) closeBox();
    }, {passive: true});
  }

  // Initialize all galleries
  function init() {
    initLightboxEvents();
    galleries.forEach(gallery => initGallery(gallery));
  }

  document.readyState === "loading" 
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();