const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// Карточки изделий


//  Card 1

const title_1 = document.querySelector(".product-title-light-01");

const title_back_1 = document.querySelector(".product-title-dark-01");

const card_1 = document.querySelector(".card-inner-01")

title_1.addEventListener("click", function (e) {
  card_1.classList.toggle('is-flipped');
});

title_back_1.addEventListener("click", function (e) {
  card_1.classList.toggle('is-flipped');
});

//  Card 2

const title_2 = document.querySelector(".product-title-light-02");

const title_back_2 = document.querySelector(".product-title-dark-02");

const card_2 = document.querySelector(".card-inner-02")

title_2.addEventListener("click", function (e) {
  card_2.classList.toggle('is-flipped');
});

title_back_2.addEventListener("click", function (e) {
  card_2.classList.toggle('is-flipped');
});

//  Card 3

const title_3 = document.querySelector(".product-title-light-03");

const title_back_3 = document.querySelector(".product-title-dark-03");

const card_3 = document.querySelector(".card-inner-03")

title_3.addEventListener("click", function (e) {
  card_3.classList.toggle('is-flipped');
});

title_back_3.addEventListener("click", function (e) {
  card_3.classList.toggle('is-flipped');
});

//  Card 4

const title_4 = document.querySelector(".product-title-light-04");

const title_back_4 = document.querySelector(".product-title-dark-04");

const card_4 = document.querySelector(".card-inner-04")

title_4.addEventListener("click", function (e) {
  card_4.classList.toggle('is-flipped');
});

title_back_4.addEventListener("click", function (e) {
  card_4.classList.toggle('is-flipped');
});

//  Card 5

const title_5 = document.querySelector(".product-title-light-05");

const title_back_5 = document.querySelector(".product-title-dark-05");

const card_5 = document.querySelector(".card-inner-05")

title_5.addEventListener("click", function (e) {
  card_5.classList.toggle('is-flipped');
});

title_back_5.addEventListener("click", function (e) {
  card_5.classList.toggle('is-flipped');
});

//  Card 6

const title_6 = document.querySelector(".product-title-light-06");

const title_back_6 = document.querySelector(".product-title-dark-06");

const card_6 = document.querySelector(".card-inner-06")

title_6.addEventListener("click", function (e) {
  card_6.classList.toggle('is-flipped');
});

title_back_6.addEventListener("click", function (e) {
  card_6.classList.toggle('is-flipped');
});

//  Card 7

const title_7 = document.querySelector(".product-title-light-07");

const title_back_7 = document.querySelector(".product-title-dark-07");

const card_7 = document.querySelector(".card-inner-07")

title_7.addEventListener("click", function (e) {
  card_7.classList.toggle('is-flipped');
});

title_back_7.addEventListener("click", function (e) {
  card_7.classList.toggle('is-flipped');
});

//  Card 8

const title_8 = document.querySelector(".product-title-light-08");

const title_back_8 = document.querySelector(".product-title-dark-08");

const card_8 = document.querySelector(".card-inner-08")

title_8.addEventListener("click", function (e) {
  card_8.classList.toggle('is-flipped');
});

title_back_8.addEventListener("click", function (e) {
  card_8.classList.toggle('is-flipped');
});

//  Card 9

const title_9 = document.querySelector(".product-title-light-09");

const title_back_9 = document.querySelector(".product-title-dark-09");

const card_9 = document.querySelector(".card-inner-09")

title_9.addEventListener("click", function (e) {
  card_9.classList.toggle('is-flipped');
});

title_back_9.addEventListener("click", function (e) {
  card_9.classList.toggle('is-flipped');
});

//  Card 10

const title_10 = document.querySelector(".product-title-light-10");

const title_back_10 = document.querySelector(".product-title-dark-10");

const card_10 = document.querySelector(".card-inner-10")

title_10.addEventListener("click", function (e) {
  card_10.classList.toggle('is-flipped');
});

title_back_10.addEventListener("click", function (e) {
  card_10.classList.toggle('is-flipped');
});

//  Card 11

const title_11 = document.querySelector(".product-title-light-11");

const title_back_11 = document.querySelector(".product-title-dark-11");

const card_11 = document.querySelector(".card-inner-11")

title_11.addEventListener("click", function (e) {
  card_11.classList.toggle('is-flipped');
});

title_back_11.addEventListener("click", function (e) {
  card_11.classList.toggle('is-flipped');
});

//  Card 12

const title_12 = document.querySelector(".product-title-light-12");

const title_back_12 = document.querySelector(".product-title-dark-12");

const card_12 = document.querySelector(".card-inner-12")

title_12.addEventListener("click", function (e) {
  card_12.classList.toggle('is-flipped');
});

title_back_12.addEventListener("click", function (e) {
  card_12.classList.toggle('is-flipped');
});

//  Card 13

const title_13 = document.querySelector(".product-title-light-13");

const title_back_13 = document.querySelector(".product-title-dark-13");

const card_13 = document.querySelector(".card-inner-13")

title_13.addEventListener("click", function (e) {
  card_13.classList.toggle('is-flipped');
});

title_back_13.addEventListener("click", function (e) {
  card_13.classList.toggle('is-flipped');
});

//  Card 14

const title_14 = document.querySelector(".product-title-light-14");

const title_back_14 = document.querySelector(".product-title-dark-14");

const card_14 = document.querySelector(".card-inner-14")

title_14.addEventListener("click", function (e) {
  card_14.classList.toggle('is-flipped');
});

title_back_14.addEventListener("click", function (e) {
  card_14.classList.toggle('is-flipped');
});

//  Card 15

const title_15 = document.querySelector(".product-title-light-15");

const title_back_15 = document.querySelector(".product-title-dark-15");

const card_15 = document.querySelector(".card-inner-15")

title_15.addEventListener("click", function (e) {
  card_15.classList.toggle('is-flipped');
});

title_back_15.addEventListener("click", function (e) {
  card_15.classList.toggle('is-flipped');
});

//  Card 16

const title_16 = document.querySelector(".product-title-light-16");

const title_back_16 = document.querySelector(".product-title-dark-16");

const card_16 = document.querySelector(".card-inner-16")

title_16.addEventListener("click", function (e) {
  card_16.classList.toggle('is-flipped');
});

title_back_4.addEventListener("click", function (e) {
  card_4.classList.toggle('is-flipped');
});

//  Card 17

const title_17 = document.querySelector(".product-title-light-17");

const title_back_17 = document.querySelector(".product-title-dark-17");

const card_17 = document.querySelector(".card-inner-17")

title_17.addEventListener("click", function (e) {
  card_17.classList.toggle('is-flipped');
});

title_back_17.addEventListener("click", function (e) {
  card_17.classList.toggle('is-flipped');
});

//  Card 18

const title_18 = document.querySelector(".product-title-light-18");

const title_back_18 = document.querySelector(".product-title-dark-18");

const card_18 = document.querySelector(".card-inner-18")

title_18.addEventListener("click", function (e) {
  card_18.classList.toggle('is-flipped');
});

title_back_18.addEventListener("click", function (e) {
  card_18.classList.toggle('is-flipped');
});

//  Card 19

const title_19 = document.querySelector(".product-title-light-19");

const title_back_19 = document.querySelector(".product-title-dark-19");

const card_19 = document.querySelector(".card-inner-19")

title_19.addEventListener("click", function (e) {
  card_19.classList.toggle('is-flipped');
});

title_back_7.addEventListener("click", function (e) {
  card_7.classList.toggle('is-flipped');
});

//  Card 20

const title_20 = document.querySelector(".product-title-light-20");

const title_back_20 = document.querySelector(".product-title-dark-20");

const card_20 = document.querySelector(".card-inner-20")

title_20.addEventListener("click", function (e) {
  card_20.classList.toggle('is-flipped');
});

title_back_8.addEventListener("click", function (e) {
  card_8.classList.toggle('is-flipped');
});

//  Card 21

const title_21 = document.querySelector(".product-title-light-21");

const title_back_21 = document.querySelector(".product-title-dark-21");

const card_21 = document.querySelector(".card-inner-21")

title_21.addEventListener("click", function (e) {
  card_21.classList.toggle('is-flipped');
});

title_back_21.addEventListener("click", function (e) {
  card_21.classList.toggle('is-flipped');
});

//  Card 22

const title_22 = document.querySelector(".product-title-light-22");

const title_back_22 = document.querySelector(".product-title-dark-22");

const card_22 = document.querySelector(".card-inner-22")

title_22.addEventListener("click", function (e) {
  card_22.classList.toggle('is-flipped');
});

title_back_22.addEventListener("click", function (e) {
  card_22.classList.toggle('is-flipped');
});

//  Card 23

const title_23 = document.querySelector(".product-title-light-23");

const title_back_23 = document.querySelector(".product-title-dark-23");

const card_23 = document.querySelector(".card-inner-23")

title_23.addEventListener("click", function (e) {
  card_23.classList.toggle('is-flipped');
});

title_back_23.addEventListener("click", function (e) {
  card_23.classList.toggle('is-flipped');
});

//  Card 24

const title_24 = document.querySelector(".product-title-light-24");

const title_back_24 = document.querySelector(".product-title-dark-24");

const card_24 = document.querySelector(".card-inner-24")

title_24.addEventListener("click", function (e) {
  card_24.classList.toggle('is-flipped');
});

title_back_24.addEventListener("click", function (e) {
  card_24.classList.toggle('is-flipped');
});

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
