document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.logo-slider-container');
    const slider = document.querySelector('.logo-slider');

    function animateSlider() {
        // Hız değeri: her frame kaç piksel kaydırılacak
        slider.scrollLeft += 1;

        // Slider'ın scrollWidth'inin yarısına ulaştığında sıfırla
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0;
        }

        requestAnimationFrame(animateSlider);
    }

    animateSlider();
});

// Slider hizmetler geçişi için JavaScript kodu
function goLeft() {
    document.querySelector('.cards-wrapper').scrollBy({
      left: -300,  // İhtiyaca göre değeri ayarlayabilirsiniz
      behavior: 'smooth'
    });
  }

  function scrollRight() {
    document.querySelector('.cards-wrapper').scrollBy({
      left: 300,  // İhtiyaca göre değeri ayarlayabilirsiniz
      behavior: 'smooth'
    });
  }

