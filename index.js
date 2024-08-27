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

const card = document.querySelector(".card-inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

const card2 = document.querySelector(".card-inner2");

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector(".card-inner3");

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped');
});

const card4 = document.querySelector(".card-inner4");

card4.addEventListener("click", function (e) {
  card4.classList.toggle('is-flipped');
});

const card5 = document.querySelector(".card-inner5");

card5.addEventListener("click", function (e) {
  card5.classList.toggle('is-flipped');
});

const card6 = document.querySelector(".card-inner6");

card6.addEventListener("click", function (e) {
  card6.classList.toggle('is-flipped');
});
