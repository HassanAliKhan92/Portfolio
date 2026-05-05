function openProduct(link){
  window.open(link,"_blank");
}

// Smooth scroll navbar
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
