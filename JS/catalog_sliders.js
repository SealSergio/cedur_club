let sliderButton = document.querySelector('#slider01')
sliderButton.addEventListener('click', slideIn)

function slideIn() {
  const sliderNum = sliderButton.classList[0];
  let last = sliderNum[sliderNum.length - 1];
  let secondLast = sliderNum[sliderNum.length - 2];
  const slideNumber = last + secondLast

  const slideNum = '.slider-' + slideNumber
  const prevButton = '.prev-button-' + slideNumber
  const nextButton = '.next-button-' + slideNumber
  const productImg = 'product-img-' + slideNumber

  const slider = document.querySelector(slideNum);
  const slides = Array.from(slider.querySelectorAll('.product-img'));
  const slideCount = slides.length;
  let slideIndex = 0;

  // const slider = document.querySelector('.slider');
  // const prevButton = slider.querySelector('.prev-button');
  // const nextButton = slider.querySelector('.next-button');
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


// function slide(sliderNum, prevButtonNum, nextButtonNum, productImgNum) {
//   const slider = document.querySelector(sliderNum);
//   const prevButton = document.querySelector(prevButtonNum);
//   const nextButton = document.querySelector(nextButtonNum);
//   const slides = Array.from(slider.querySelectorAll(productImgNum));
//   const slideCount = slides.length;
//   let slideIndex = 0;

//   prevButton.addEventListener('click', showPreviousSlide);
//   nextButton.addEventListener('click', showNextSlide);

//   function showPreviousSlide() {
//     slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//     updateSlider();
//   }

//   function showNextSlide() {
//     slideIndex = (slideIndex + 1) % slideCount;
//     updateSlider();
//   }

//   function updateSlider() {
//     slides.forEach((slide, index) => {
//       if (index === slideIndex) {
//         slide.style.display = 'block';
//       } else {
//         slide.style.display = 'none';
//       }
//     });
//   }

//   updateSlider();
// }

// Sliders

// slide('.slider-01', '.prev-button-01', '.next-button-01', '.product-img-01')

// slide('.slider-02', '.prev-button-02', '.next-button-02', '.product-img-02')

// slide('.slider-03', '.prev-button-03', '.next-button-03', '.product-img-03')

// slide('.slider-04', '.prev-button-04', '.next-button-04', '.product-img-04')

// slide('.slider-05', '.prev-button-05', '.next-button-05', '.product-img-05')

// slide('.slider-06', '.prev-button-06', '.next-button-06', '.product-img-06')

// slide('.slider-07', '.prev-button-07', '.next-button-07', '.product-img-07')

// slide('.slider-08', '.prev-button-08', '.next-button-08', '.product-img-08')

// slide('.slider-09', '.prev-button-09', '.next-button-09', '.product-img-09')

// slide('.slider-10', '.prev-button-10', '.next-button-10', '.product-img-10')

// slide('.slider-11', '.prev-button-11', '.next-button-11', '.product-img-11')

// slide('.slider-12', '.prev-button-12', '.next-button-12', '.product-img-12')

// slide('.slider-13', '.prev-button-13', '.next-button-13', '.product-img-13')

// slide('.slider-14', '.prev-button-14', '.next-button-14', '.product-img-14')

// slide('.slider-18', '.prev-button-18', '.next-button-18', '.product-img-18')

// slide('.slider-19', '.prev-button-19', '.next-button-19', '.product-img-19')

// slide('.slider-23', '.prev-button-23', '.next-button-23', '.product-img-23')

// slide('.slider-25', '.prev-button-25', '.next-button-25', '.product-img-25')

// slide('.slider-27', '.prev-button-27', '.next-button-27', '.product-img-27')

// slide('.slider-30', '.prev-button-30', '.next-button-30', '.product-img-30')

// slide('.slider-31', '.prev-button-31', '.next-button-31', '.product-img-31')

// slide('.slider-32', '.prev-button-32', '.next-button-32', '.product-img-32')

// slide('.slider-33', '.prev-button-33', '.next-button-33', '.product-img-33')

// slide('.slider-35', '.prev-button-35', '.next-button-35', '.product-img-35')

// slide('.slider-36', '.prev-button-36', '.next-button-36', '.product-img-36')

// slide('.slider-37', '.prev-button-37', '.next-button-37', '.product-img-37')

// slide('.slider-38', '.prev-button-38', '.next-button-38', '.product-img-38')

// slide('.slider-39', '.prev-button-39', '.next-button-39', '.product-img-39')

// slide('.slider-42', '.prev-button-42', '.next-button-42', '.product-img-42')

// slide('.slider-43', '.prev-button-43', '.next-button-43', '.product-img-43')

// slide('.slider-44', '.prev-button-44', '.next-button-44', '.product-img-44')

// slide('.slider-46', '.prev-button-46', '.next-button-46', '.product-img-46')

// slide('.slider-47', '.prev-button-47', '.next-button-47', '.product-img-47')

// slide('.slider-48', '.prev-button-48', '.next-button-48', '.product-img-48')

// slide('.slider-49', '.prev-button-49', '.next-button-49', '.product-img-49')

// slide('.slider-50', '.prev-button-50', '.next-button-50', '.product-img-50')

// slide('.slider-51', '.prev-button-51', '.next-button-51', '.product-img-51')

// slide('.slider-52', '.prev-button-52', '.next-button-52', '.product-img-52')

// slide('.slider-53', '.prev-button-53', '.next-button-53', '.product-img-53')

// slide('.slider-54', '.prev-button-54', '.next-button-54', '.product-img-54')

// slide('.slider-55', '.prev-button-55', '.next-button-55', '.product-img-55')

// slide('.slider-56', '.prev-button-56', '.next-button-56', '.product-img-56')

// slide('.slider-57', '.prev-button-57', '.next-button-57', '.product-img-57')

// slide('.slider-58', '.prev-button-58', '.next-button-58', '.product-img-58')

// slide('.slider-59', '.prev-button-59', '.next-button-59', '.product-img-59')
