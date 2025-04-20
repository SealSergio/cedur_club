document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.catalog__slider');
  const slider = sliderContainer.querySelector('.slider');
  const prevButton = sliderContainer.querySelector('.prev-button');
  const nextButton = sliderContainer.querySelector('.next-button');
  const slides = Array.from(slider.querySelectorAll('.slider__img'));
  const slideCount = slides.length;
  let slideIndex = 0;
  const indicator = sliderContainer.querySelector('.catalog-slider__indicator');

  for (let i = 0; i < slideCount; i++) {
    const indicatorPoint = document.createElement('span');
    indicatorPoint.classList.add('indicator__point');
    indicator.append(indicatorPoint);
  }
  const points = Array.from(indicator.querySelectorAll('.indicator__point'));

  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);

  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }

  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
    points.forEach((point, index) => {
      if (index === slideIndex) {
        point.style.opacity = 1;
        point.style.transform = 'scale(1.2)';
      } else {
        point.style.opacity = 0.5;
        point.style.transform = 'scale(1)';
      }
    });
  }

  updateSlider();
});
