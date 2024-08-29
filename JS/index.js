// Burger navigation

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// Product cards

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
