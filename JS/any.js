function slide() {
  const sliderButton = document.querySelector('.slider-button')
  sliderButton.addEventListener('click', naming)

  function naming() {
    const sliderNum = sliderButton.classList[2];
    console.log(sliderNum)
    // slideNumber = ''
  }

  const slider = document.querySelector(sliderNum);
  const prevButton = document.querySelector(prevButtonNum);
  const nextButton = document.querySelector(nextButtonNum);
  const slides = Array.from(slider.querySelectorAll(productImgNum));
  const slideCount = slides.length;
  let slideIndex = 0;

  // const slider = document.querySelector('.slider');
  // const prevButton = document.querySelector('.prev-button');
  // const nextButton = document.querySelector('.next-button');
  // const slides = Array.from(slider.querySelectorAll('.product-img'));
  // const slideCount = slides.length;
  // let slideIndex = 0;

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
  }

  updateSlider();
}

slide()
