
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});


const bars = document.querySelectorAll(".progress span");

window.addEventListener("load", () => {
  bars.forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
});


window.addEventListener("load", () => {
  document.querySelectorAll(".bar span").forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
});

window.addEventListener("load", () => {
  document.querySelectorAll(".bar span").forEach(bar => {
    bar.style.width = bar.getAttribute("style").replace("width:", "");
  });
});



  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);

