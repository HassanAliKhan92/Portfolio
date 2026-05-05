// Open property (replace # with actual link)
function openProperty(link){
  window.open(link, "_blank");
}

// Smooth scroll for navbar links (optional)
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
