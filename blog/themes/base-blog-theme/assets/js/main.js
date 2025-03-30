const MAX = 3,
  grid = document.querySelector(".gallery-grid"),
  extra = document.querySelector(".extra-images"),
  box = document.getElementById("lightbox"),
  img = document.getElementById("lightbox-img"),
  desc = document.getElementById("img-description"),
  thumbs = document.getElementById("thumbnail-container"),
  prev = document.getElementById("prev-btn"),
  next = document.getElementById("next-btn"),
  close = document.querySelector(".close-btn");
let idx = 0,
  imgs = [];

function init() {
  const all = grid.querySelectorAll("img");
  imgs = Array.from(all).map((i) => ({ src: i.src, description: i.alt }));

  if (all.length > MAX) {
    all.forEach((i, n) => {
      if (n >= MAX) i.style.display = "none";
    });
    extra.textContent = "+" + (all.length - MAX);
    extra.style.display = "flex";
    extra.addEventListener("click", () => open(MAX));
  } else extra.style.display = "none";

  all.forEach((i, n) => {
    if (n < MAX) i.addEventListener("click", () => open(n));
  });

  prev.addEventListener("click", () => nav(-1));
  next.addEventListener("click", () => nav(1));
  close.addEventListener("click", closeBox);
  img.addEventListener("click", zoom);
  box.addEventListener("click", (e) => {
    if (e.target === box) closeBox();
  });

  createThumbs();
}

function open(i) {
  idx = i;
  update();
  box.classList.remove("hidden");
  document.addEventListener("keydown", keys);
}

function update() {
  img.src = imgs[idx].src;
  desc.textContent = imgs[idx].description;
  document
    .querySelectorAll(".thumb-img")
    .forEach((t, i) => t.classList.toggle("active", i === idx));
}

function createThumbs() {
  thumbs.innerHTML = "";
  imgs.forEach((i, n) => {
    const t = document.createElement("img");
    t.src = i.src;
    t.className = "thumb-img" + (n === idx ? " active" : "");
    t.addEventListener("click", () => open(n));
    thumbs.appendChild(t);
  });
}

function nav(d) {
  idx = (idx + d + imgs.length) % imgs.length;
  update();
}

function closeBox() {
  box.classList.add("hidden");
  img.style.transform = "scale(1)";
  document.removeEventListener("keydown", keys);
}

function zoom() {
  img.style.transform =
    img.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
}

function keys(e) {
  if (e.key === "Escape") closeBox();
  else if (e.key === "ArrowLeft") nav(-1);
  else if (e.key === "ArrowRight") nav(1);
}

document.addEventListener("DOMContentLoaded", init);
