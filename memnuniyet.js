document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slider = document.querySelector('.memnuniyet-main__slider');
    const slides = document.querySelectorAll('.memnuniyet-main__slide');
    const totalSlides = slides.length;
  
    // Global fonksiyonlar oluşturuyoruz ki HTML'deki onclick'ler erişebilsin:
    window.nextSlide = function() {
      currentSlide = (currentSlide + 1) % totalSlides;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    };
  
    window.prevSlide = function() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    };
  });
  