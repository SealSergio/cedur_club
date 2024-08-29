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

// Slider 07

const slider_07 = document.querySelector('.slider-07');
const prevButton_07 = document.querySelector('.prev-button-07');
const nextButton_07 = document.querySelector('.next-button-07');
const slides_07 = Array.from(slider_07.querySelectorAll('.product-img-07'));
const slideCount_07 = slides_07.length;
let slideIndex_07 = 0;

prevButton_07.addEventListener('click', showPreviousSlide_07);
nextButton_07.addEventListener('click', showNextSlide_07);

function showPreviousSlide_07() {
  slideIndex_07 = (slideIndex_07 - 1 + slideCount_07) % slideCount_07;
  updateSlider_07();
}

function showNextSlide_07() {
  slideIndex_07 = (slideIndex_07 + 1) % slideCount_07;
  updateSlider_07();
}

function updateSlider_07() {
  slides_07.forEach((slide, index) => {
    if (index === slideIndex_07) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_07();

// Slider 08

const slider_08 = document.querySelector('.slider-08');
const prevButton_08 = document.querySelector('.prev-button-08');
const nextButton_08 = document.querySelector('.next-button-08');
const slides_08 = Array.from(slider_08.querySelectorAll('.product-img-08'));
const slideCount_08 = slides_08.length;
let slideIndex_08 = 0;

prevButton_08.addEventListener('click', showPreviousSlide_08);
nextButton_08.addEventListener('click', showNextSlide_08);

function showPreviousSlide_08() {
  slideIndex_08 = (slideIndex_08 - 1 + slideCount_08) % slideCount_08;
  updateSlider_08();
}

function showNextSlide_08() {
  slideIndex_08 = (slideIndex_08 + 1) % slideCount_08;
  updateSlider_08();
}

function updateSlider_08() {
  slides_08.forEach((slide, index) => {
    if (index === slideIndex_08) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_08();

// Slider 09

const slider_09 = document.querySelector('.slider-09');
const prevButton_09 = document.querySelector('.prev-button-09');
const nextButton_09 = document.querySelector('.next-button-09');
const slides_09 = Array.from(slider_09.querySelectorAll('.product-img-09'));
const slideCount_09 = slides_09.length;
let slideIndex_09 = 0;

prevButton_09.addEventListener('click', showPreviousSlide_09);
nextButton_09.addEventListener('click', showNextSlide_09);

function showPreviousSlide_09() {
  slideIndex_09 = (slideIndex_09 - 1 + slideCount_09) % slideCount_09;
  updateSlider_09();
}

function showNextSlide_09() {
  slideIndex_09 = (slideIndex_09 + 1) % slideCount_09;
  updateSlider_09();
}

function updateSlider_09() {
  slides_09.forEach((slide, index) => {
    if (index === slideIndex_09) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_09();

// Slider 10

const slider_10 = document.querySelector('.slider-10');
const prevButton_10 = document.querySelector('.prev-button-10');
const nextButton_10 = document.querySelector('.next-button-10');
const slides_10 = Array.from(slider_10.querySelectorAll('.product-img-10'));
const slideCount_10 = slides_10.length;
let slideIndex_10 = 0;

prevButton_10.addEventListener('click', showPreviousSlide_10);
nextButton_10.addEventListener('click', showNextSlide_10);

function showPreviousSlide_10() {
  slideIndex_10 = (slideIndex_10 - 1 + slideCount_10) % slideCount_10;
  updateSlider_10();
}

function showNextSlide_10() {
  slideIndex_10 = (slideIndex_10 + 1) % slideCount_10;
  updateSlider_10();
}

function updateSlider_10() {
  slides_10.forEach((slide, index) => {
    if (index === slideIndex_10) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_10();

// Slider 11

const slider_11 = document.querySelector('.slider-11');
const prevButton_11 = document.querySelector('.prev-button-11');
const nextButton_11 = document.querySelector('.next-button-11');
const slides_11 = Array.from(slider_11.querySelectorAll('.product-img-11'));
const slideCount_11 = slides_11.length;
let slideIndex_11 = 0;

prevButton_11.addEventListener('click', showPreviousSlide_11);
nextButton_11.addEventListener('click', showNextSlide_11);

function showPreviousSlide_11() {
  slideIndex_11 = (slideIndex_11 - 1 + slideCount_11) % slideCount_11;
  updateSlider_11();
}

function showNextSlide_11() {
  slideIndex_11 = (slideIndex_11 + 1) % slideCount_11;
  updateSlider_11();
}

function updateSlider_11() {
  slides_11.forEach((slide, index) => {
    if (index === slideIndex_11) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_11();

// Slider 12

const slider_12 = document.querySelector('.slider-12');
const prevButton_12 = document.querySelector('.prev-button-12');
const nextButton_12 = document.querySelector('.next-button-12');
const slides_12 = Array.from(slider_12.querySelectorAll('.product-img-12'));
const slideCount_12 = slides_12.length;
let slideIndex_12 = 0;

prevButton_12.addEventListener('click', showPreviousSlide_12);
nextButton_12.addEventListener('click', showNextSlide_12);

function showPreviousSlide_12() {
  slideIndex_12 = (slideIndex_12 - 1 + slideCount_12) % slideCount_12;
  updateSlider_12();
}

function showNextSlide_12() {
  slideIndex_12 = (slideIndex_12 + 1) % slideCount_12;
  updateSlider_12();
}

function updateSlider_12() {
  slides_12.forEach((slide, index) => {
    if (index === slideIndex_12) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_12();

// Slider 13

const slider_13 = document.querySelector('.slider-13');
const prevButton_13 = document.querySelector('.prev-button-13');
const nextButton_13 = document.querySelector('.next-button-13');
const slides_13 = Array.from(slider_13.querySelectorAll('.product-img-13'));
const slideCount_13 = slides_13.length;
let slideIndex_13 = 0;

prevButton_13.addEventListener('click', showPreviousSlide_13);
nextButton_13.addEventListener('click', showNextSlide_13);

function showPreviousSlide_13() {
  slideIndex_13 = (slideIndex_13 - 1 + slideCount_13) % slideCount_13;
  updateSlider_13();
}

function showNextSlide_13() {
  slideIndex_13 = (slideIndex_13 + 1) % slideCount_13;
  updateSlider_13();
}

function updateSlider_13() {
  slides_13.forEach((slide, index) => {
    if (index === slideIndex_13) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_table_13();

// Slider 14

const slider_14 = document.querySelector('.slider-14');
const prevButton_14 = document.querySelector('.prev-button-14');
const nextButton_14 = document.querySelector('.next-button-14');
const slides_14 = Array.from(slider_14.querySelectorAll('.product-img-14'));
const slideCount_14 = slides_14.length;
let slideIndex_14 = 0;

prevButton_14.addEventListener('click', showPreviousSlide_14);
nextButton_14.addEventListener('click', showNextSlide_14);

function showPreviousSlide_14() {
  slideIndex_14 = (slideIndex_14 - 1 + slideCount_14) % slideCount_14;
  updateSlider_14();
}

function showNextSlide_14() {
  slideIndex_14 = (slideIndex_14 + 1) % slideCount_14;
  updateSlider_14();
}

function updateSlider_14() {
  slides_14.forEach((slide, index) => {
    if (index === slideIndex_14) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_14();

// Slider 15

const slider_15 = document.querySelector('.slider-15');
const prevButton_15 = document.querySelector('.prev-button-15');
const nextButton_15 = document.querySelector('.next-button-15');
const slides_15 = Array.from(slider_15.querySelectorAll('.product-img-15'));
const slideCount_15 = slides_15.length;
let slideIndex_15 = 0;

prevButton_15.addEventListener('click', showPreviousSlide_15);
nextButton_15.addEventListener('click', showNextSlide_15);

function showPreviousSlide_15() {
  slideIndex_15 = (slideIndex_15 - 1 + slideCount_15) % slideCount_15;
  updateSlider_15();
}

function showNextSlide_15() {
  slideIndex_15 = (slideIndex_15 + 1) % slideCount_15;
  updateSlider_15();
}

function updateSlider_15() {
  slides_15.forEach((slide, index) => {
    if (index === slideIndex_15) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_15();

// Slider 16

const slider_16 = document.querySelector('.slider-16');
const prevButton_16 = document.querySelector('.prev-button-16');
const nextButton_16 = document.querySelector('.next-button-16');
const slides_16 = Array.from(slider_16.querySelectorAll('.product-img-16'));
const slideCount_16 = slides_16.length;
let slideIndex_16 = 0;

prevButton_16.addEventListener('click', showPreviousSlide_16);
nextButton_16.addEventListener('click', showNextSlide_16);

function showPreviousSlide_16() {
  slideIndex_16 = (slideIndex_16 - 1 + slideCount_16) % slideCount_16;
  updateSlider_16();
}

function showNextSlide_16() {
  slideIndex_16 = (slideIndex_16 + 1) % slideCount_16;
  updateSlider_16();
}

function updateSlider_16() {
  slides_16.forEach((slide, index) => {
    if (index === slideIndex_16) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_16();

// Slider 17

const slider_17 = document.querySelector('.slider-17');
const prevButton_17 = document.querySelector('.prev-button-17');
const nextButton_17 = document.querySelector('.next-button-17');
const slides_17 = Array.from(slider_17.querySelectorAll('.product-img-17'));
const slideCount_17 = slides_17.length;
let slideIndex_17 = 0;

prevButton_17.addEventListener('click', showPreviousSlide_17);
nextButton_17.addEventListener('click', showNextSlide_17);

function showPreviousSlide_17() {
  slideIndex_17 = (slideIndex_17 - 1 + slideCount_17) % slideCount_17;
  updateSlider_17();
}

function showNextSlide_17() {
  slideIndex_17 = (slideIndex_17 + 1) % slideCount_17;
  updateSlider_17();
}

function updateSlider_17() {
  slides_17.forEach((slide, index) => {
    if (index === slideIndex_17) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_17();

// Slider 18

const slider_18 = document.querySelector('.slider-18');
const prevButton_18 = document.querySelector('.prev-button-18');
const nextButton_18 = document.querySelector('.next-button-18');
const slides_18 = Array.from(slider_18.querySelectorAll('.product-img-18'));
const slideCount_18 = slides_18.length;
let slideIndex_18 = 0;

prevButton_18.addEventListener('click', showPreviousSlide_18);
nextButton_18.addEventListener('click', showNextSlide_18);

function showPreviousSlide_18() {
  slideIndex_18 = (slideIndex_18 - 1 + slideCount_18) % slideCount_18;
  updateSlider_18();
}

function showNextSlide_18() {
  slideIndex_18 = (slideIndex_18 + 1) % slideCount_18;
  updateSlider_18();
}

function updateSlider_18() {
  slides_18.forEach((slide, index) => {
    if (index === slideIndex_18) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_18();

// Slider 19

const slider_19 = document.querySelector('.slider-19');
const prevButton_19 = document.querySelector('.prev-button-19');
const nextButton_19 = document.querySelector('.next-button-19');
const slides_19 = Array.from(slider_19.querySelectorAll('.product-img-19'));
const slideCount_19 = slides_19.length;
let slideIndex_19 = 0;

prevButton_19.addEventListener('click', showPreviousSlide_19);
nextButton_19.addEventListener('click', showNextSlide_19);

function showPreviousSlide_19() {
  slideIndex_19 = (slideIndex_19 - 1 + slideCount_19) % slideCount_19;
  updateSlider_19();
}

function showNextSlide_19() {
  slideIndex_19 = (slideIndex_19 + 1) % slideCount_19;
  updateSlider_19();
}

function updateSlider_19() {
  slides_19.forEach((slide, index) => {
    if (index === slideIndex_19) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_19();

// Slider 20

const slider_20 = document.querySelector('.slider-20');
const prevButton_20 = document.querySelector('.prev-button-20');
const nextButton_20 = document.querySelector('.next-button-20');
const slides_20 = Array.from(slider_20.querySelectorAll('.product-img-20'));
const slideCount_20 = slides_20.length;
let slideIndex_20 = 0;

prevButton_20.addEventListener('click', showPreviousSlide_20);
nextButton_20.addEventListener('click', showNextSlide_20);

function showPreviousSlide_20() {
  slideIndex_20 = (slideIndex_20 - 1 + slideCount_20) % slideCount_20;
  updateSlider_20();
}

function showNextSlide_20() {
  slideIndex_20 = (slideIndex_20 + 1) % slideCount_20;
  updateSlider_20();
}

function updateSlider_20() {
  slides_20.forEach((slide, index) => {
    if (index === slideIndex_20) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_20();

// Slider 21

const slider_21 = document.querySelector('.slider-21');
const prevButton_21 = document.querySelector('.prev-button-21');
const nextButton_21 = document.querySelector('.next-button-21');
const slides_21 = Array.from(slider_21.querySelectorAll('.product-img-21'));
const slideCount_21 = slides_21.length;
let slideIndex_21 = 0;

prevButton_21.addEventListener('click', showPreviousSlide_21);
nextButton_21.addEventListener('click', showNextSlide_21);

function showPreviousSlide_21() {
  slideIndex_21 = (slideIndex_21 - 1 + slideCount_21) % slideCount_21;
  updateSlider_21();
}

function showNextSlide_21() {
  slideIndex_21 = (slideIndex_21 + 1) % slideCount_21;
  updateSlider_21();
}

function updateSlider_21() {
  slides_21.forEach((slide, index) => {
    if (index === slideIndex_21) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_table_21();

// Slider 22

const slider_22 = document.querySelector('.slider-22');
const prevButton_22 = document.querySelector('.prev-button-22');
const nextButton_22 = document.querySelector('.next-button-22');
const slides_22 = Array.from(slider_22.querySelectorAll('.product-img-22'));
const slideCount_22 = slides_22.length;
let slideIndex_22 = 0;

prevButton_22.addEventListener('click', showPreviousSlide_22);
nextButton_22.addEventListener('click', showNextSlide_22);

function showPreviousSlide_22() {
  slideIndex_22 = (slideIndex_22 - 1 + slideCount_22) % slideCount_22;
  updateSlider_22();
}

function showNextSlide_22() {
  slideIndex_22 = (slideIndex_22 + 1) % slideCount_22;
  updateSlider_22();
}

function updateSlider_22() {
  slides_22.forEach((slide, index) => {
    if (index === slideIndex_22) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_22();

// Slider 23

const slider_23 = document.querySelector('.slider-23');
const prevButton_23 = document.querySelector('.prev-button-23');
const nextButton_23 = document.querySelector('.next-button-23');
const slides_23 = Array.from(slider_23.querySelectorAll('.product-img-23'));
const slideCount_23 = slides_23.length;
let slideIndex_23 = 0;

prevButton_23.addEventListener('click', showPreviousSlide_23);
nextButton_23.addEventListener('click', showNextSlide_23);

function showPreviousSlide_23() {
  slideIndex_23 = (slideIndex_23 - 1 + slideCount_23) % slideCount_23;
  updateSlider_23();
}

function showNextSlide_23() {
  slideIndex_23 = (slideIndex_23 + 1) % slideCount_23;
  updateSlider_23();
}

function updateSlider_23() {
  slides_23.forEach((slide, index) => {
    if (index === slideIndex_23) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_23();

// Slider 24

const slider_24 = document.querySelector('.slider-24');
const prevButton_24 = document.querySelector('.prev-button-24');
const nextButton_24 = document.querySelector('.next-button-24');
const slides_24 = Array.from(slider_24.querySelectorAll('.product-img-24'));
const slideCount_24 = slides_24.length;
let slideIndex_24 = 0;

prevButton_24.addEventListener('click', showPreviousSlide_24);
nextButton_24.addEventListener('click', showNextSlide_24);

function showPreviousSlide_24() {
  slideIndex_24 = (slideIndex_24 - 1 + slideCount_24) % slideCount_24;
  updateSlider_24();
}

function showNextSlide_24() {
  slideIndex_24 = (slideIndex_24 + 1) % slideCount_24;
  updateSlider_24();
}

function updateSlider_24() {
  slides_24.forEach((slide, index) => {
    if (index === slideIndex_24) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_24();

// Slider 25

const slider_25 = document.querySelector('.slider-25');
const prevButton_25 = document.querySelector('.prev-button-25');
const nextButton_25 = document.querySelector('.next-button-25');
const slides_25 = Array.from(slider_25.querySelectorAll('.product-img-25'));
const slideCount_25 = slides_25.length;
let slideIndex_25 = 0;

prevButton_25.addEventListener('click', showPreviousSlide_25);
nextButton_25.addEventListener('click', showNextSlide_25);

function showPreviousSlide_25() {
  slideIndex_25 = (slideIndex_25 - 1 + slideCount_25) % slideCount_25;
  updateSlider_25();
}

function showNextSlide_25() {
  slideIndex_25 = (slideIndex_25 + 1) % slideCount_25;
  updateSlider_25();
}

function updateSlider_25() {
  slides_25.forEach((slide, index) => {
    if (index === slideIndex_25) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_25();

// Slider 26

const slider_26 = document.querySelector('.slider-26');
const prevButton_26 = document.querySelector('.prev-button-26');
const nextButton_26 = document.querySelector('.next-button-26');
const slides_26 = Array.from(slider_26.querySelectorAll('.product-img-26'));
const slideCount_26 = slides_26.length;
let slideIndex_26 = 0;

prevButton_26.addEventListener('click', showPreviousSlide_26);
nextButton_26.addEventListener('click', showNextSlide_26);

function showPreviousSlide_26() {
  slideIndex_26 = (slideIndex_26 - 1 + slideCount_26) % slideCount_26;
  updateSlider_26();
}

function showNextSlide_26() {
  slideIndex_26 = (slideIndex_26 + 1) % slideCount_26;
  updateSlider_26();
}

function updateSlider_26() {
  slides_26.forEach((slide, index) => {
    if (index === slideIndex_26) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_26();

// Slider 27

const slider_27 = document.querySelector('.slider-27');
const prevButton_27 = document.querySelector('.prev-button-27');
const nextButton_27 = document.querySelector('.next-button-27');
const slides_27 = Array.from(slider_27.querySelectorAll('.product-img-27'));
const slideCount_27 = slides_27.length;
let slideIndex_27 = 0;

prevButton_27.addEventListener('click', showPreviousSlide_27);
nextButton_27.addEventListener('click', showNextSlide_27);

function showPreviousSlide_27() {
  slideIndex_27 = (slideIndex_27 - 1 + slideCount_27) % slideCount_27;
  updateSlider_27();
}

function showNextSlide_27() {
  slideIndex_27 = (slideIndex_27 + 1) % slideCount_27;
  updateSlider_27();
}

function updateSlider_27() {
  slides_27.forEach((slide, index) => {
    if (index === slideIndex_27) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_27();

// Slider 28

const slider_28 = document.querySelector('.slider-28');
const prevButton_28 = document.querySelector('.prev-button-28');
const nextButton_28 = document.querySelector('.next-button-28');
const slides_28 = Array.from(slider_28.querySelectorAll('.product-img-28'));
const slideCount_28 = slides_28.length;
let slideIndex_28 = 0;

prevButton_28.addEventListener('click', showPreviousSlide_28);
nextButton_28.addEventListener('click', showNextSlide_28);

function showPreviousSlide_28() {
  slideIndex_28 = (slideIndex_28 - 1 + slideCount_28) % slideCount_28;
  updateSlider_28();
}

function showNextSlide_28() {
  slideIndex_28 = (slideIndex_28 + 1) % slideCount_28;
  updateSlider_28();
}

function updateSlider_28() {
  slides_28.forEach((slide, index) => {
    if (index === slideIndex_28) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_28();

// Slider 29

const slider_29 = document.querySelector('.slider-29');
const prevButton_29 = document.querySelector('.prev-button-29');
const nextButton_29 = document.querySelector('.next-button-29');
const slides_29 = Array.from(slider_29.querySelectorAll('.product-img-29'));
const slideCount_29 = slides_29.length;
let slideIndex_29 = 0;

prevButton_29.addEventListener('click', showPreviousSlide_29);
nextButton_29.addEventListener('click', showNextSlide_29);

function showPreviousSlide_29() {
  slideIndex_29 = (slideIndex_29 - 1 + slideCount_29) % slideCount_29;
  updateSlider_29();
}

function showNextSlide_29() {
  slideIndex_29 = (slideIndex_29 + 1) % slideCount_29;
  updateSlider_29();
}

function updateSlider_29() {
  slides_29.forEach((slide, index) => {
    if (index === slideIndex_29) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_29();

// Slider 30

const slider_30 = document.querySelector('.slider-30');
const prevButton_30 = document.querySelector('.prev-button-30');
const nextButton_30 = document.querySelector('.next-button-30');
const slides_30 = Array.from(slider_30.querySelectorAll('.product-img-30'));
const slideCount_30 = slides_30.length;
let slideIndex_30 = 0;

prevButton_30.addEventListener('click', showPreviousSlide_30);
nextButton_30.addEventListener('click', showNextSlide_30);

function showPreviousSlide_30() {
  slideIndex_30 = (slideIndex_30 - 1 + slideCount_30) % slideCount_30;
  updateSlider_30();
}

function showNextSlide_30() {
  slideIndex_30 = (slideIndex_30 + 1) % slideCount_30;
  updateSlider_30();
}

function updateSlider_30() {
  slides_30.forEach((slide, index) => {
    if (index === slideIndex_30) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_30();

// Slider 31

const slider_31 = document.querySelector('.slider-31');
const prevButton_31 = document.querySelector('.prev-button-31');
const nextButton_31 = document.querySelector('.next-button-31');
const slides_31 = Array.from(slider_31.querySelectorAll('.product-img-31'));
const slideCount_31 = slides_31.length;
let slideIndex_31 = 0;

prevButton_31.addEventListener('click', showPreviousSlide_31);
nextButton_31.addEventListener('click', showNextSlide_31);

function showPreviousSlide_31() {
  slideIndex_31 = (slideIndex_31 - 1 + slideCount_31) % slideCount_31;
  updateSlider_31();
}

function showNextSlide_31() {
  slideIndex_31 = (slideIndex_31 + 1) % slideCount_31;
  updateSlider_31();
}

function updateSlider_31() {
  slides_31.forEach((slide, index) => {
    if (index === slideIndex_31) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_31();

// Slider 32

const slider_32 = document.querySelector('.slider-32');
const prevButton_32 = document.querySelector('.prev-button-32');
const nextButton_32 = document.querySelector('.next-button-32');
const slides_32 = Array.from(slider_32.querySelectorAll('.product-img-32'));
const slideCount_32 = slides_32.length;
let slideIndex_32 = 0;

prevButton_32.addEventListener('click', showPreviousSlide_32);
nextButton_32.addEventListener('click', showNextSlide_32);

function showPreviousSlide_32() {
  slideIndex_32 = (slideIndex_32 - 1 + slideCount_32) % slideCount_32;
  updateSlider_32();
}

function showNextSlide_32() {
  slideIndex_32 = (slideIndex_32 + 1) % slideCount_32;
  updateSlider_32();
}

function updateSlider_32() {
  slides_32.forEach((slide, index) => {
    if (index === slideIndex_32) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_32();

// Slider 33

const slider_33 = document.querySelector('.slider-33');
const prevButton_33 = document.querySelector('.prev-button-33');
const nextButton_33 = document.querySelector('.next-button-33');
const slides_33 = Array.from(slider_33.querySelectorAll('.product-img-33'));
const slideCount_33 = slides_33.length;
let slideIndex_33 = 0;

prevButton_33.addEventListener('click', showPreviousSlide_33);
nextButton_33.addEventListener('click', showNextSlide_33);

function showPreviousSlide_33() {
  slideIndex_33 = (slideIndex_33 - 1 + slideCount_33) % slideCount_33;
  updateSlider_33();
}

function showNextSlide_33() {
  slideIndex_33 = (slideIndex_33 + 1) % slideCount_33;
  updateSlider_33();
}

function updateSlider_33() {
  slides_33.forEach((slide, index) => {
    if (index === slideIndex_33) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_33();

// Slider 34

const slider_34 = document.querySelector('.slider-34');
const prevButton_34 = document.querySelector('.prev-button-34');
const nextButton_34 = document.querySelector('.next-button-34');
const slides_34 = Array.from(slider_34.querySelectorAll('.product-img-34'));
const slideCount_34 = slides_34.length;
let slideIndex_34 = 0;

prevButton_34.addEventListener('click', showPreviousSlide_34);
nextButton_34.addEventListener('click', showNextSlide_34);

function showPreviousSlide_34() {
  slideIndex_34 = (slideIndex_34 - 1 + slideCount_34) % slideCount_34;
  updateSlider_34();
}

function showNextSlide_34() {
  slideIndex_34 = (slideIndex_34 + 1) % slideCount_34;
  updateSlider_34();
}

function updateSlider_34() {
  slides_34.forEach((slide, index) => {
    if (index === slideIndex_34) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_34();

// Slider 35

const slider_35 = document.querySelector('.slider-35');
const prevButton_35 = document.querySelector('.prev-button-35');
const nextButton_35 = document.querySelector('.next-button-35');
const slides_35 = Array.from(slider_35.querySelectorAll('.product-img-35'));
const slideCount_35 = slides_35.length;
let slideIndex_35 = 0;

prevButton_35.addEventListener('click', showPreviousSlide_35);
nextButton_35.addEventListener('click', showNextSlide_35);

function showPreviousSlide_35() {
  slideIndex_35 = (slideIndex_35 - 1 + slideCount_35) % slideCount_35;
  updateSlider_35();
}

function showNextSlide_35() {
  slideIndex_35 = (slideIndex_35 + 1) % slideCount_35;
  updateSlider_35();
}

function updateSlider_35() {
  slides_35.forEach((slide, index) => {
    if (index === slideIndex_35) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_35();

// Slider 36

const slider_36 = document.querySelector('.slider-36');
const prevButton_36 = document.querySelector('.prev-button-36');
const nextButton_36 = document.querySelector('.next-button-36');
const slides_36 = Array.from(slider_36.querySelectorAll('.product-img-36'));
const slideCount_36 = slides_36.length;
let slideIndex_36 = 0;

prevButton_36.addEventListener('click', showPreviousSlide_36);
nextButton_36.addEventListener('click', showNextSlide_36);

function showPreviousSlide_36() {
  slideIndex_36 = (slideIndex_36 - 1 + slideCount_36) % slideCount_36;
  updateSlider_36();
}

function showNextSlide_36() {
  slideIndex_36 = (slideIndex_36 + 1) % slideCount_36;
  updateSlider_36();
}

function updateSlider_36() {
  slides_36.forEach((slide, index) => {
    if (index === slideIndex_36) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_36();

// Slider 37

const slider_37 = document.querySelector('.slider-37');
const prevButton_37 = document.querySelector('.prev-button-37');
const nextButton_37 = document.querySelector('.next-button-37');
const slides_37 = Array.from(slider_37.querySelectorAll('.product-img-37'));
const slideCount_37 = slides_37.length;
let slideIndex_37 = 0;

prevButton_37.addEventListener('click', showPreviousSlide_37);
nextButton_37.addEventListener('click', showNextSlide_37);

function showPreviousSlide_37() {
  slideIndex_37 = (slideIndex_37 - 1 + slideCount_37) % slideCount_37;
  updateSlider_37();
}

function showNextSlide_37() {
  slideIndex_37 = (slideIndex_37 + 1) % slideCount_37;
  updateSlider_37();
}

function updateSlider_37() {
  slides_37.forEach((slide, index) => {
    if (index === slideIndex_37) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_37();

// Slider 38

const slider_38 = document.querySelector('.slider-38');
const prevButton_38 = document.querySelector('.prev-button-38');
const nextButton_38 = document.querySelector('.next-button-38');
const slides_38 = Array.from(slider_38.querySelectorAll('.product-img-38'));
const slideCount_38 = slides_38.length;
let slideIndex_38 = 0;

prevButton_38.addEventListener('click', showPreviousSlide_38);
nextButton_38.addEventListener('click', showNextSlide_38);

function showPreviousSlide_38() {
  slideIndex_38 = (slideIndex_38 - 1 + slideCount_38) % slideCount_38;
  updateSlider_38();
}

function showNextSlide_38() {
  slideIndex_38 = (slideIndex_38 + 1) % slideCount_38;
  updateSlider_38();
}

function updateSlider_38() {
  slides_38.forEach((slide, index) => {
    if (index === slideIndex_38) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_38();

// Slider 39

const slider_39 = document.querySelector('.slider-39');
const prevButton_39 = document.querySelector('.prev-button-39');
const nextButton_39 = document.querySelector('.next-button-39');
const slides_39 = Array.from(slider_39.querySelectorAll('.product-img-39'));
const slideCount_39 = slides_39.length;
let slideIndex_39 = 0;

prevButton_39.addEventListener('click', showPreviousSlide_39);
nextButton_39.addEventListener('click', showNextSlide_39);

function showPreviousSlide_39() {
  slideIndex_39 = (slideIndex_39 - 1 + slideCount_39) % slideCount_39;
  updateSlider_39();
}

function showNextSlide_39() {
  slideIndex_39 = (slideIndex_39 + 1) % slideCount_39;
  updateSlider_39();
}

function updateSlider_39() {
  slides_39.forEach((slide, index) => {
    if (index === slideIndex_39) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_39();

// Slider 40

const slider_40 = document.querySelector('.slider-40');
const prevButton_40 = document.querySelector('.prev-button-40');
const nextButton_40 = document.querySelector('.next-button-40');
const slides_40 = Array.from(slider_40.querySelectorAll('.product-img-40'));
const slideCount_40 = slides_40.length;
let slideIndex_40 = 0;

prevButton_40.addEventListener('click', showPreviousSlide_40);
nextButton_40.addEventListener('click', showNextSlide_40);

function showPreviousSlide_40() {
  slideIndex_40 = (slideIndex_40 - 1 + slideCount_40) % slideCount_40;
  updateSlider_40();
}

function showNextSlide_40() {
  slideIndex_40 = (slideIndex_40 + 1) % slideCount_40;
  updateSlider_40();
}

function updateSlider_40() {
  slides_40.forEach((slide, index) => {
    if (index === slideIndex_40) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_40();

// Slider 41

const slider_41 = document.querySelector('.slider-41');
const prevButton_41 = document.querySelector('.prev-button-41');
const nextButton_41 = document.querySelector('.next-button-41');
const slides_41 = Array.from(slider_41.querySelectorAll('.product-img-41'));
const slideCount_41 = slides_41.length;
let slideIndex_41 = 0;

prevButton_41.addEventListener('click', showPreviousSlide_41);
nextButton_41.addEventListener('click', showNextSlide_41);

function showPreviousSlide_41() {
  slideIndex_41 = (slideIndex_41 - 1 + slideCount_41) % slideCount_41;
  updateSlider_41();
}

function showNextSlide_41() {
  slideIndex_41 = (slideIndex_41 + 1) % slideCount_41;
  updateSlider_41();
}

function updateSlider_41() {
  slides_41.forEach((slide, index) => {
    if (index === slideIndex_41) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_41();

// Slider 42

const slider_42 = document.querySelector('.slider-42');
const prevButton_42 = document.querySelector('.prev-button-42');
const nextButton_42 = document.querySelector('.next-button-42');
const slides_42 = Array.from(slider_42.querySelectorAll('.product-img-42'));
const slideCount_42 = slides_42.length;
let slideIndex_42 = 0;

prevButton_42.addEventListener('click', showPreviousSlide_42);
nextButton_42.addEventListener('click', showNextSlide_42);

function showPreviousSlide_42() {
  slideIndex_42 = (slideIndex_42 - 1 + slideCount_42) % slideCount_42;
  updateSlider_42();
}

function showNextSlide_42() {
  slideIndex_42 = (slideIndex_42 + 1) % slideCount_42;
  updateSlider_42();
}

function updateSlider_42() {
  slides_42.forEach((slide, index) => {
    if (index === slideIndex_42) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_42();

// Slider 43

const slider_43 = document.querySelector('.slider-43');
const prevButton_43 = document.querySelector('.prev-button-43');
const nextButton_43 = document.querySelector('.next-button-43');
const slides_43 = Array.from(slider_43.querySelectorAll('.product-img-43'));
const slideCount_43 = slides_43.length;
let slideIndex_43 = 0;

prevButton_43.addEventListener('click', showPreviousSlide_43);
nextButton_43.addEventListener('click', showNextSlide_43);

function showPreviousSlide_43() {
  slideIndex_43 = (slideIndex_43 - 1 + slideCount_43) % slideCount_43;
  updateSlider_43();
}

function showNextSlide_43() {
  slideIndex_43 = (slideIndex_43 + 1) % slideCount_43;
  updateSlider_43();
}

function updateSlider_43() {
  slides_43.forEach((slide, index) => {
    if (index === slideIndex_43) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_43();

// Slider 44

const slider_44 = document.querySelector('.slider-44');
const prevButton_44 = document.querySelector('.prev-button-44');
const nextButton_44 = document.querySelector('.next-button-44');
const slides_44 = Array.from(slider_44.querySelectorAll('.product-img-44'));
const slideCount_44 = slides_44.length;
let slideIndex_44 = 0;

prevButton_44.addEventListener('click', showPreviousSlide_44);
nextButton_44.addEventListener('click', showNextSlide_44);

function showPreviousSlide_44() {
  slideIndex_44 = (slideIndex_44 - 1 + slideCount_44) % slideCount_44;
  updateSlider_44();
}

function showNextSlide_44() {
  slideIndex_44 = (slideIndex_44 + 1) % slideCount_44;
  updateSlider_44();
}

function updateSlider_44() {
  slides_44.forEach((slide, index) => {
    if (index === slideIndex_44) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_44();

// Slider 45

const slider_45 = document.querySelector('.slider-45');
const prevButton_45 = document.querySelector('.prev-button-45');
const nextButton_45 = document.querySelector('.next-button-45');
const slides_45 = Array.from(slider_45.querySelectorAll('.product-img-45'));
const slideCount_45 = slides_45.length;
let slideIndex_45 = 0;

prevButton_45.addEventListener('click', showPreviousSlide_45);
nextButton_45.addEventListener('click', showNextSlide_45);

function showPreviousSlide_45() {
  slideIndex_45 = (slideIndex_45 - 1 + slideCount_45) % slideCount_45;
  updateSlider_45();
}

function showNextSlide_45() {
  slideIndex_45 = (slideIndex_45 + 1) % slideCount_45;
  updateSlider_45();
}

function updateSlider_45() {
  slides_45.forEach((slide, index) => {
    if (index === slideIndex_45) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_45();

// Slider 46

const slider_46 = document.querySelector('.slider-46');
const prevButton_46 = document.querySelector('.prev-button-46');
const nextButton_46 = document.querySelector('.next-button-46');
const slides_46 = Array.from(slider_46.querySelectorAll('.product-img-46'));
const slideCount_46 = slides_46.length;
let slideIndex_46 = 0;

prevButton_46.addEventListener('click', showPreviousSlide_46);
nextButton_46.addEventListener('click', showNextSlide_46);

function showPreviousSlide_46() {
  slideIndex_46 = (slideIndex_46 - 1 + slideCount_46) % slideCount_46;
  updateSlider_46();
}

function showNextSlide_46() {
  slideIndex_46 = (slideIndex_46 + 1) % slideCount_46;
  updateSlider_46();
}

function updateSlider_46() {
  slides_46.forEach((slide, index) => {
    if (index === slideIndex_46) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_46();

// Slider 47

const slider_47 = document.querySelector('.slider-47');
const prevButton_47 = document.querySelector('.prev-button-47');
const nextButton_47 = document.querySelector('.next-button-47');
const slides_47 = Array.from(slider_47.querySelectorAll('.product-img-47'));
const slideCount_47 = slides_47.length;
let slideIndex_47 = 0;

prevButton_47.addEventListener('click', showPreviousSlide_47);
nextButton_47.addEventListener('click', showNextSlide_47);

function showPreviousSlide_47() {
  slideIndex_47 = (slideIndex_47 - 1 + slideCount_47) % slideCount_47;
  updateSlider_47();
}

function showNextSlide_47() {
  slideIndex_47 = (slideIndex_47 + 1) % slideCount_47;
  updateSlider_47();
}

function updateSlider_47() {
  slides_47.forEach((slide, index) => {
    if (index === slideIndex_47) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_47();

// Slider 48

const slider_48 = document.querySelector('.slider-48');
const prevButton_48 = document.querySelector('.prev-button-48');
const nextButton_48 = document.querySelector('.next-button-48');
const slides_48 = Array.from(slider_48.querySelectorAll('.product-img-48'));
const slideCount_48 = slides_48.length;
let slideIndex_48 = 0;

prevButton_48.addEventListener('click', showPreviousSlide_48);
nextButton_48.addEventListener('click', showNextSlide_48);

function showPreviousSlide_48() {
  slideIndex_48 = (slideIndex_48 - 1 + slideCount_48) % slideCount_48;
  updateSlider_48();
}

function showNextSlide_48() {
  slideIndex_48 = (slideIndex_48 + 1) % slideCount_48;
  updateSlider_48();
}

function updateSlider_48() {
  slides_48.forEach((slide, index) => {
    if (index === slideIndex_48) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_48();

// Slider 49

const slider_49 = document.querySelector('.slider-49');
const prevButton_49 = document.querySelector('.prev-button-49');
const nextButton_49 = document.querySelector('.next-button-49');
const slides_49 = Array.from(slider_49.querySelectorAll('.product-img-49'));
const slideCount_49 = slides_49.length;
let slideIndex_49 = 0;

prevButton_49.addEventListener('click', showPreviousSlide_49);
nextButton_49.addEventListener('click', showNextSlide_49);

function showPreviousSlide_49() {
  slideIndex_49 = (slideIndex_49 - 1 + slideCount_49) % slideCount_49;
  updateSlider_49();
}

function showNextSlide_49() {
  slideIndex_49 = (slideIndex_49 + 1) % slideCount_49;
  updateSlider_49();
}

function updateSlider_49() {
  slides_49.forEach((slide, index) => {
    if (index === slideIndex_49) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_49();

// Slider 50

const slider_50 = document.querySelector('.slider-50');
const prevButton_50 = document.querySelector('.prev-button-50');
const nextButton_50 = document.querySelector('.next-button-50');
const slides_50 = Array.from(slider_50.querySelectorAll('.product-img-50'));
const slideCount_50 = slides_50.length;
let slideIndex_50 = 0;

prevButton_50.addEventListener('click', showPreviousSlide_50);
nextButton_50.addEventListener('click', showNextSlide_50);

function showPreviousSlide_50() {
  slideIndex_50 = (slideIndex_50 - 1 + slideCount_50) % slideCount_50;
  updateSlider_50();
}

function showNextSlide_50() {
  slideIndex_50 = (slideIndex_50 + 1) % slideCount_50;
  updateSlider_50();
}

function updateSlider_50() {
  slides_50.forEach((slide, index) => {
    if (index === slideIndex_50) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_50();

// Slider 51

const slider_51 = document.querySelector('.slider-51');
const prevButton_51 = document.querySelector('.prev-button-51');
const nextButton_51 = document.querySelector('.next-button-51');
const slides_51 = Array.from(slider_51.querySelectorAll('.product-img-51'));
const slideCount_51 = slides_51.length;
let slideIndex_51 = 0;

prevButton_51.addEventListener('click', showPreviousSlide_51);
nextButton_51.addEventListener('click', showNextSlide_51);

function showPreviousSlide_51() {
  slideIndex_51 = (slideIndex_51 - 1 + slideCount_51) % slideCount_51;
  updateSlider_51();
}

function showNextSlide_51() {
  slideIndex_51 = (slideIndex_51 + 1) % slideCount_51;
  updateSlider_51();
}

function updateSlider_51() {
  slides_51.forEach((slide, index) => {
    if (index === slideIndex_51) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_51();

// Slider 52

const slider_52 = document.querySelector('.slider-52');
const prevButton_52 = document.querySelector('.prev-button-52');
const nextButton_52 = document.querySelector('.next-button-52');
const slides_52 = Array.from(slider_52.querySelectorAll('.product-img-52'));
const slideCount_52 = slides_52.length;
let slideIndex_52 = 0;

prevButton_52.addEventListener('click', showPreviousSlide_52);
nextButton_52.addEventListener('click', showNextSlide_52);

function showPreviousSlide_52() {
  slideIndex_52 = (slideIndex_52 - 1 + slideCount_52) % slideCount_52;
  updateSlider_52();
}

function showNextSlide_52() {
  slideIndex_52 = (slideIndex_52 + 1) % slideCount_52;
  updateSlider_52();
}

function updateSlider_52() {
  slides_52.forEach((slide, index) => {
    if (index === slideIndex_52) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_52();

// Slider 53

const slider_53 = document.querySelector('.slider-53');
const prevButton_53 = document.querySelector('.prev-button-53');
const nextButton_53 = document.querySelector('.next-button-53');
const slides_53 = Array.from(slider_53.querySelectorAll('.product-img-53'));
const slideCount_53 = slides_53.length;
let slideIndex_53 = 0;

prevButton_53.addEventListener('click', showPreviousSlide_53);
nextButton_53.addEventListener('click', showNextSlide_53);

function showPreviousSlide_53() {
  slideIndex_53 = (slideIndex_53 - 1 + slideCount_53) % slideCount_53;
  updateSlider_53();
}

function showNextSlide_53() {
  slideIndex_53 = (slideIndex_53 + 1) % slideCount_53;
  updateSlider_53();
}

function updateSlider_53() {
  slides_53.forEach((slide, index) => {
    if (index === slideIndex_53) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_53();

// Slider 54

const slider_54 = document.querySelector('.slider-54');
const prevButton_54 = document.querySelector('.prev-button-54');
const nextButton_54 = document.querySelector('.next-button-54');
const slides_54 = Array.from(slider_54.querySelectorAll('.product-img-54'));
const slideCount_54 = slides_54.length;
let slideIndex_54 = 0;

prevButton_54.addEventListener('click', showPreviousSlide_54);
nextButton_54.addEventListener('click', showNextSlide_54);

function showPreviousSlide_54() {
  slideIndex_54 = (slideIndex_54 - 1 + slideCount_54) % slideCount_54;
  updateSlider_54();
}

function showNextSlide_54() {
  slideIndex_54 = (slideIndex_54 + 1) % slideCount_54;
  updateSlider_54();
}

function updateSlider_54() {
  slides_54.forEach((slide, index) => {
    if (index === slideIndex_54) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_54();

// Slider 55

const slider_55 = document.querySelector('.slider-55');
const prevButton_55 = document.querySelector('.prev-button-55');
const nextButton_55 = document.querySelector('.next-button-55');
const slides_55 = Array.from(slider_55.querySelectorAll('.product-img-55'));
const slideCount_55 = slides_55.length;
let slideIndex_55 = 0;

prevButton_55.addEventListener('click', showPreviousSlide_55);
nextButton_55.addEventListener('click', showNextSlide_55);

function showPreviousSlide_55() {
  slideIndex_55 = (slideIndex_55 - 1 + slideCount_55) % slideCount_55;
  updateSlider_55();
}

function showNextSlide_55() {
  slideIndex_55 = (slideIndex_55 + 1) % slideCount_55;
  updateSlider_55();
}

function updateSlider_55() {
  slides_55.forEach((slide, index) => {
    if (index === slideIndex_55) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_55();

// Slider 56

const slider_56 = document.querySelector('.slider-56');
const prevButton_56 = document.querySelector('.prev-button-56');
const nextButton_56 = document.querySelector('.next-button-56');
const slides_56 = Array.from(slider_56.querySelectorAll('.product-img-56'));
const slideCount_56 = slides_56.length;
let slideIndex_56 = 0;

prevButton_56.addEventListener('click', showPreviousSlide_56);
nextButton_56.addEventListener('click', showNextSlide_56);

function showPreviousSlide_56() {
  slideIndex_56 = (slideIndex_56 - 1 + slideCount_56) % slideCount_56;
  updateSlider_56();
}

function showNextSlide_56() {
  slideIndex_56 = (slideIndex_56 + 1) % slideCount_56;
  updateSlider_56();
}

function updateSlider_56() {
  slides_56.forEach((slide, index) => {
    if (index === slideIndex_56) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_56();

// Slider 57

const slider_57 = document.querySelector('.slider-57');
const prevButton_57 = document.querySelector('.prev-button-57');
const nextButton_57 = document.querySelector('.next-button-57');
const slides_57 = Array.from(slider_57.querySelectorAll('.product-img-57'));
const slideCount_57 = slides_57.length;
let slideIndex_57 = 0;

prevButton_57.addEventListener('click', showPreviousSlide_57);
nextButton_57.addEventListener('click', showNextSlide_57);

function showPreviousSlide_57() {
  slideIndex_57 = (slideIndex_57 - 1 + slideCount_57) % slideCount_57;
  updateSlider_57();
}

function showNextSlide_57() {
  slideIndex_57 = (slideIndex_57 + 1) % slideCount_57;
  updateSlider_57();
}

function updateSlider_57() {
  slides_57.forEach((slide, index) => {
    if (index === slideIndex_57) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_57();

// Slider 58

const slider_58 = document.querySelector('.slider-58');
const prevButton_58 = document.querySelector('.prev-button-58');
const nextButton_58 = document.querySelector('.next-button-58');
const slides_58 = Array.from(slider_58.querySelectorAll('.product-img-58'));
const slideCount_58 = slides_58.length;
let slideIndex_58 = 0;

prevButton_58.addEventListener('click', showPreviousSlide_58);
nextButton_58.addEventListener('click', showNextSlide_58);

function showPreviousSlide_58() {
  slideIndex_58 = (slideIndex_58 - 1 + slideCount_58) % slideCount_58;
  updateSlider_58();
}

function showNextSlide_58() {
  slideIndex_58 = (slideIndex_58 + 1) % slideCount_58;
  updateSlider_58();
}

function updateSlider_58() {
  slides_58.forEach((slide, index) => {
    if (index === slideIndex_58) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_58();

// Slider 59

const slider_59 = document.querySelector('.slider-59');
const prevButton_59 = document.querySelector('.prev-button-59');
const nextButton_59 = document.querySelector('.next-button-59');
const slides_59 = Array.from(slider_59.querySelectorAll('.product-img-59'));
const slideCount_59 = slides_59.length;
let slideIndex_59 = 0;

prevButton_59.addEventListener('click', showPreviousSlide_59);
nextButton_59.addEventListener('click', showNextSlide_59);

function showPreviousSlide_59() {
  slideIndex_59 = (slideIndex_59 - 1 + slideCount_59) % slideCount_59;
  updateSlider_59();
}

function showNextSlide_59() {
  slideIndex_59 = (slideIndex_59 + 1) % slideCount_59;
  updateSlider_59();
}

function updateSlider_59() {
  slides_59.forEach((slide, index) => {
    if (index === slideIndex_59) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_59();

// Slider 60

const slider_60 = document.querySelector('.slider-60');
const prevButton_60 = document.querySelector('.prev-button-60');
const nextButton_60 = document.querySelector('.next-button-60');
const slides_60 = Array.from(slider_60.querySelectorAll('.product-img-60'));
const slideCount_60 = slides_60.length;
let slideIndex_60 = 0;

prevButton_60.addEventListener('click', showPreviousSlide_60);
nextButton_60.addEventListener('click', showNextSlide_60);

function showPreviousSlide_60() {
  slideIndex_60 = (slideIndex_60 - 1 + slideCount_60) % slideCount_60;
  updateSlider_60();
}

function showNextSlide_60() {
  slideIndex_60 = (slideIndex_60 + 1) % slideCount_60;
  updateSlider_60();
}

function updateSlider_60() {
  slides_60.forEach((slide, index) => {
    if (index === slideIndex_60) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider_60();
