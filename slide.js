
// Slider fonksiyonelliği
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % totalSlides;
  showSlide(nextIndex);
}

// Otomatik geçiş: 6 saniyede bir
setInterval(nextSlide, 6000);

// Dot kontrollerine tıklama olayı
dots.forEach(dot => {
  dot.addEventListener('click', function() {
    const index = parseInt(this.getAttribute('data-index'));
    showSlide(index);
  });
});
