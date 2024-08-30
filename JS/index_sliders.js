// Slider 01

const slider_01 = document.querySelector('.slider-01');
const prevButton_01 = document.querySelector('.prev-button-01');
const nextButton_01 = document.querySelector('.next-button-01');
const slides_01 = Array.from(slider_01.querySelectorAll('.product-img-01'));
const slideCount_01 = slides_01.length;
let slideIndex_01 = 0;

prevButton_01.addEventListener('click', showPreviousSlide_01);
nextButton_01.addEventListener('click', showNextSlide_01);

function showPreviousSlide_01() {
  slideIndex_01 = (slideIndex_01 - 1 + slideCount_01) % slideCount_01;
  updateSlider_01();
}

function showNextSlide_01() {
  slideIndex_01 = (slideIndex_01 + 1) % slideCount_01;
  updateSlider_01();
}

function updateSlider_01() {
  slides_01.forEach((slide, index) => {
    if (index === slideIndex_01) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_01();

// Slider 02

const slider_02 = document.querySelector('.slider-02');
const prevButton_02 = document.querySelector('.prev-button-02');
const nextButton_02 = document.querySelector('.next-button-02');
const slides_02 = Array.from(slider_02.querySelectorAll('.product-img-02'));
const slideCount_02 = slides_02.length;
let slideIndex_02 = 0;

prevButton_02.addEventListener('click', showPreviousSlide_02);
nextButton_02.addEventListener('click', showNextSlide_02);

function showPreviousSlide_02() {
  slideIndex_02 = (slideIndex_02 - 1 + slideCount_02) % slideCount_02;
  updateSlider_02();
}

function showNextSlide_02() {
  slideIndex_02 = (slideIndex_02 + 1) % slideCount_02;
  updateSlider_02();
}

function updateSlider_02() {
  slides_02.forEach((slide, index) => {
    if (index === slideIndex_02) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_02();

// Slider 03

const slider_03 = document.querySelector('.slider-03');
const prevButton_03 = document.querySelector('.prev-button-03');
const nextButton_03 = document.querySelector('.next-button-03');
const slides_03 = Array.from(slider_03.querySelectorAll('.product-img-03'));
const slideCount_03 = slides_03.length;
let slideIndex_03 = 0;

prevButton_03.addEventListener('click', showPreviousSlide_03);
nextButton_03.addEventListener('click', showNextSlide_03);

function showPreviousSlide_03() {
  slideIndex_03 = (slideIndex_03 - 1 + slideCount_03) % slideCount_03;
  updateSlider_03();
}

function showNextSlide_03() {
  slideIndex_03 = (slideIndex_03 + 1) % slideCount_03;
  updateSlider_03();
}

function updateSlider_03() {
  slides_03.forEach((slide, index) => {
    if (index === slideIndex_03) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_03();

// Slider 04

const slider_04 = document.querySelector('.slider-04');
const prevButton_04 = document.querySelector('.prev-button-04');
const nextButton_04 = document.querySelector('.next-button-04');
const slides_04 = Array.from(slider_04.querySelectorAll('.product-img-04'));
const slideCount_04 = slides_04.length;
let slideIndex_04 = 0;

prevButton_04.addEventListener('click', showPreviousSlide_04);
nextButton_04.addEventListener('click', showNextSlide_04);

function showPreviousSlide_04() {
  slideIndex_04 = (slideIndex_04 - 1 + slideCount_04) % slideCount_04;
  updateSlider_04();
}

function showNextSlide_04() {
  slideIndex_04 = (slideIndex_04 + 1) % slideCount_04;
  updateSlider_04();
}

function updateSlider_04() {
  slides_04.forEach((slide, index) => {
    if (index === slideIndex_04) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_04();

// Slider 05

const slider_05 = document.querySelector('.slider-05');
const prevButton_05 = document.querySelector('.prev-button-05');
const nextButton_05 = document.querySelector('.next-button-05');
const slides_05 = Array.from(slider_05.querySelectorAll('.product-img-05'));
const slideCount_05 = slides_05.length;
let slideIndex_05 = 0;

prevButton_05.addEventListener('click', showPreviousSlide_05);
nextButton_05.addEventListener('click', showNextSlide_05);

function showPreviousSlide_05() {
  slideIndex_05 = (slideIndex_05 - 1 + slideCount_05) % slideCount_05;
  updateSlider_05();
}

function showNextSlide_05() {
  slideIndex_05 = (slideIndex_05 + 1) % slideCount_05;
  updateSlider_05();
}

function updateSlider_05() {
  slides_05.forEach((slide, index) => {
    if (index === slideIndex_05) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_table_05();

// Slider 06

const slider_06 = document.querySelector('.slider-06');
const prevButton_06 = document.querySelector('.prev-button-06');
const nextButton_06 = document.querySelector('.next-button-06');
const slides_06 = Array.from(slider_06.querySelectorAll('.product-img-06'));
const slideCount_06 = slides_06.length;
let slideIndex_06 = 0;

prevButton_06.addEventListener('click', showPreviousSlide_06);
nextButton_06.addEventListener('click', showNextSlide_06);

function showPreviousSlide_06() {
  slideIndex_06 = (slideIndex_06 - 1 + slideCount_06) % slideCount_06;
  updateSlider_06();
}

function showNextSlide_06() {
  slideIndex_06 = (slideIndex_06 + 1) % slideCount_06;
  updateSlider_06();
}

function updateSlider_06() {
  slides_06.forEach((slide, index) => {
    if (index === slideIndex_06) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_06();
