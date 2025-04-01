(function() {
  const gallery = document.querySelector(".gallery-container");
  if (!gallery) return;

  if (!document.getElementById("lightbox")) {
    document.body.insertAdjacentHTML("beforeend", `
      <div id="lightbox" class="lightbox hidden">
        <span class="close-btn">&times;</span>
        <div class="lightbox-content">
          <div class="lightbox-img-container">
            <div id="loading-spinner" class="hidden"><div class="spinner"></div></div>
            <img id="lightbox-img" src="" alt="Preview">
          </div>
          <div class="lightbox-description" id="img-description"></div>
        </div>
        <div class="lightbox-thumbs" id="thumbnail-container"></div>
        <button class="nav-btn prev-btn" id="prev-btn">&#10094;</button>
        <button class="nav-btn next-btn" id="next-btn">&#10095;</button>
      </div>
    `);
  }

  const SMALL = "x300", LARGE = "x1024";
  const MAX = gallery.dataset.max ? parseInt(gallery.dataset.max) : 2;
  
  const el = {
    spinner: document.getElementById("loading-spinner"),
    grid: document.querySelector(".gallery-grid"),
    extra: document.querySelector(".extra-images"),
    box: document.getElementById("lightbox"),
    img: document.getElementById("lightbox-img"),
    desc: document.getElementById("img-description"),
    thumbs: document.getElementById("thumbnail-container"),
    prev: document.getElementById("prev-btn"),
    next: document.getElementById("next-btn"),
    close: document.querySelector(".close-btn")
  };
  
  let idx = 0, imgs = [], cache = {};

  function getPath(src, size) {
    return src.replace(`/gallery/${SMALL}/`, `/gallery/${size}/`);
  }

  function init() {
    const images = el.grid.querySelectorAll("img");
    
    imgs = [...images].map(img => ({
      smallSrc: img.dataset.smallSrc || getPath(img.src, SMALL),
      largeSrc: img.dataset.largeSrc || getPath(img.src, LARGE),
      description: img.alt
    }));

    images.forEach((img, i) => { img.src = imgs[i].smallSrc; });

    // Handle max images display
    if (images.length > MAX) {
      [...images].slice(MAX).forEach(img => { img.style.display = "none"; });
      el.extra.textContent = "+" + (images.length - MAX);
      el.extra.style.display = "flex";
      el.extra.addEventListener("click", () => open(MAX), {passive: true});
    } else {
      el.extra.style.display = "none";
    }

    el.grid.addEventListener("click", e => {
      if (e.target.tagName === "IMG") {
        const i = [...images].indexOf(e.target);
        if (i < MAX) open(i);
      }
    }, {passive: true});

    el.prev.addEventListener("click", () => nav(-1), {passive: true});
    el.next.addEventListener("click", () => nav(1), {passive: true});
    el.close.addEventListener("click", closeBox, {passive: true});
    el.img.addEventListener("click", zoom, {passive: true});
    el.box.addEventListener("click", e => { 
      if (e.target === el.box) closeBox();
    }, {passive: true});

    setTimeout(() => {
      for (let i = 0; i < Math.min(3, imgs.length); i++) preload(imgs[i].largeSrc);
    }, 500);
  }

  function preload(src) {
    if (!cache[src]) {
      const img = new Image();
      img.src = src;
      cache[src] = img;
    }
  }

  function createThumbs() {
    if (el.thumbs.children.length) return;

    el.thumbs.addEventListener("click", e => {
      if (e.target.tagName === "IMG") {
        const index = +e.target.dataset.index;
        if (!isNaN(index)) open(index);
      }
    }, {passive: true});
    
    const frag = document.createDocumentFragment();
    for (let n = 0; n < imgs.length; n++) {
      const t = document.createElement("img");
      t.src = imgs[n].smallSrc;
      t.className = "thumb-img" + (n === idx ? " active" : "");
      t.loading = "lazy";
      t.dataset.index = n;
      frag.appendChild(t);
    }
    el.thumbs.appendChild(frag);
  }

  function open(i) {
    idx = i;
    createThumbs();
    preload(imgs[idx].largeSrc);
    if (idx > 0) preload(imgs[idx - 1].largeSrc);
    if (idx < imgs.length - 1) preload(imgs[idx + 1].largeSrc);
    update();
    el.box.classList.remove("hidden");
    document.addEventListener("keydown", keys);
  }

  function update() {
    el.spinner.classList.remove("hidden");
    el.img.onload = el.img.onerror = () => el.spinner.classList.add("hidden");
    el.img.src = imgs[idx].largeSrc;
    el.desc.textContent = imgs[idx].description;
    
    el.thumbs.querySelectorAll("img").forEach((t, i) => {
      t.classList.toggle("active", i === idx);
    });
  }

  function nav(d) {
    idx = (idx + d + imgs.length) % imgs.length;
    update();
    if (d > 0 && idx < imgs.length - 1) preload(imgs[idx + 1].largeSrc);
    else if (d < 0 && idx > 0) preload(imgs[idx - 1].largeSrc);
  }

  function closeBox() {
    el.box.classList.add("hidden");
    el.img.style.transform = "scale(1)";
    document.removeEventListener("keydown", keys);
  }

  function zoom() {
    el.img.style.transform = el.img.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
  }

  function keys(e) {
    if (e.key === "Escape") closeBox();
    else if (e.key === "ArrowLeft") nav(-1);
    else if (e.key === "ArrowRight") nav(1);
  }

  document.readyState === "loading" 
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();