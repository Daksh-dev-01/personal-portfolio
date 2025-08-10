// Fade-in animation for sections
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});
let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    document.querySelector('.slider-wrapper').style.transform = 
        `translateX(${-currentIndex * 100}%)`;
}

(function(){
  const wrap = document.getElementById('bubble-wrap');
  function spawn() {
    const b = document.createElement('div');
    b.className = 'bubble';
    const size = 6 + Math.random()*22;
    b.style.width = b.style.height = size + 'px';
    b.style.left = Math.random()*100 + '%';
    b.style.animationDuration = 6 + Math.random()*6 + 's';
    wrap.appendChild(b);
    // cleanup
    setTimeout(()=> b.remove(), 14000);
  }
  // spawn periodically
  setInterval(spawn, 300);
  // initial burst
  for(let i=0;i<8;i++) setTimeout(spawn, i*200);
})();


