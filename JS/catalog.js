(function() {
  function flipOver(card) {
    const title = card.querySelector('.card-rotate-front');
    const title_back = card.querySelector('.product-title-dark');
    const cardInner = card.querySelector('.card-inner');

    title.addEventListener("click", function (e) {
      cardInner.classList.toggle('is-flipped');
    });

    title_back.addEventListener("click", function (e) {
      cardInner.classList.remove('is-flipped');
    });
  }

  const cards = Array.from(document.querySelectorAll('.product-card'));
  cards.forEach((card) => {
    flipOver(card);
  });

  function slide(productButton) {
    const card = productButton.closest('.slider-container');
    const slider = card.querySelector('.slider');
    const prevButton = card.querySelector('.prev-button');
    const nextButton = card.querySelector('.next-button');
    const slides = Array.from(slider.querySelectorAll('.product-img'));
    const slideCount = slides.length;
    let slideIndex = 0;

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

  const productButtons = Array.from(document.querySelectorAll('.slider-button'));
  productButtons.forEach((button) => {
    slide(button);
  });
})()
