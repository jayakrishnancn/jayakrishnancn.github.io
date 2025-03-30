(function() {
  // Only run if gallery-container exists
  const gallery = document.querySelector(".gallery-container");
  if (!gallery) return;

  // Inject lightbox HTML if not already present
  if (!document.getElementById('lightbox')) {
    const lightboxHTML = `
      <div id="lightbox" class="lightbox hidden">
        <span class="close-btn">&times;</span>
        <div class="lightbox-content">
          <div class="lightbox-img-container"><img id="lightbox-img" src="" alt="Preview"></div>
          <div class="lightbox-description" id="img-description"></div>
        </div>
        <div class="lightbox-thumbs" id="thumbnail-container"></div>
        <button class="nav-btn prev-btn" id="prev-btn">&#10094;</button>
        <button class="nav-btn next-btn" id="next-btn">&#10095;</button>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
  }

  const SMALL_IMAGES = "x300" 
  const LARGE_IMAGES = "x1024" 

  // Helper function to transform image paths
  function getImagePath(src, size) {
    return src.replace("/gallery/x300/", `/gallery/${size}/`);
  }

  // Initialize lightbox functionality
  const MAX = gallery.dataset.max ? parseInt(gallery.dataset.max) : 2;
  const grid=document.querySelector(".gallery-grid"),extra=document.querySelector(".extra-images"),box=document.getElementById("lightbox"),img=document.getElementById("lightbox-img"),desc=document.getElementById("img-description"),thumbs=document.getElementById("thumbnail-container"),prev=document.getElementById("prev-btn"),next=document.getElementById("next-btn"),close=document.querySelector(".close-btn");
  let idx=0,imgs=[],imgCache={};

  function init(){
    const all=grid.querySelectorAll("img");
    imgs=Array.from(all).map(i=>({
      originalSrc: i.src,
      smallSrc: getImagePath(i.src, SMALL_IMAGES),
      largeSrc: getImagePath(i.src, LARGE_IMAGES),
      description: i.alt
    }));

    all.forEach((img, index) => {
      img.src = imgs[index].smallSrc;
    });

    if(all.length>MAX){
      for(let n=MAX;n<all.length;n++)all[n].style.display="none";
      extra.textContent="+"+(all.length-MAX);
      extra.style.display="flex";
      extra.addEventListener("click",()=>open(MAX),{passive:true});
    }else{
      extra.style.display="none";
    }
    
    // Use event delegation for gallery images
    grid.addEventListener("click",e=>{
      if(e.target.tagName==="IMG"){
        const i=Array.from(all).indexOf(e.target);
        if(i<MAX)open(i);
      }
    },{passive:true});
    
    prev.addEventListener("click",()=>nav(-1),{passive:true});
    next.addEventListener("click",()=>nav(1),{passive:true});
    close.addEventListener("click",closeBox,{passive:true});
    img.addEventListener("click",zoom,{passive:true});
    box.addEventListener("click",e=>{if(e.target===box)closeBox()},{passive:true});
    
    // Preload first 3 images
    for(let i=0;i<Math.min(3,imgs.length);i++)preloadImage(imgs[i].largeSrc);
  }

  function preloadImage(src){
    if(!imgCache[src]){
      const img=new Image();
      img.src=src;
      imgCache[src]=img;
    }
  }

  function open(i){
    idx=i;
    createThumbs();
    
    // Preload adjacent images
    preloadImage(imgs[idx].largeSrc);
    if(idx>0)preloadImage(imgs[idx-1].largeSrc);
    if(idx<imgs.length-1)preloadImage(imgs[idx+1].largeSrc);
    
    update();
    box.classList.remove("hidden");
    document.addEventListener("keydown",keys);
  }

  function update(){
    img.src=imgs[idx].largeSrc;
    desc.textContent=imgs[idx].description;
    
    // Update thumbnails
    const thumbImgs=thumbs.querySelectorAll(".thumb-img");
    for(let i=0;i<thumbImgs.length;i++){
      thumbImgs[i].classList.toggle("active",i===idx);
    }
  }

  function createThumbs(){
    // Only create thumbnails once
    if(thumbs.children.length>0)return;
    
    const fragment=document.createDocumentFragment();
    for(let n=0;n<imgs.length;n++){
      const t=document.createElement("img");
      t.src=imgs[n].smallSrc;
      t.className="thumb-img"+(n===idx?" active":"");
      t.loading="lazy";
      t.addEventListener("click",()=>open(n),{passive:true});
      fragment.appendChild(t);
    }
    
    thumbs.appendChild(fragment);
  }

  function nav(d){
    idx=(idx+d+imgs.length)%imgs.length;
    update();
  }

  function closeBox(){
    box.classList.add("hidden");
    img.style.transform="scale(1)";
    document.removeEventListener("keydown",keys);
  }

  function zoom(){
    img.style.transform=img.style.transform==="scale(1.5)"?"scale(1)":"scale(1.5)";
  }

  function keys(e){
    if(e.key==="Escape")closeBox();
    else if(e.key==="ArrowLeft")nav(-1);
    else if(e.key==="ArrowRight")nav(1);
  }

  // Initialize when page is ready
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",init);
  }else{
    init();
  }
})();