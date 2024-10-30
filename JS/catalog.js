// Burger navigation

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const background = document.querySelector(".body__back");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  background.classList.toggle("be");
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

background.addEventListener("click", closeOnBack);

function closeOnBack() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
  background.classList.remove("be");
}

// Define function flipOver

function flipOver(frontNum, productTitleDarkNum, cardInnerNum) {
  const title = document.querySelector(frontNum);
  const title_back = document.querySelector(productTitleDarkNum);
  const card = document.querySelector(cardInnerNum)

  title.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });

  title_back.addEventListener("click", function (e) {
    card.classList.remove('is-flipped');
  });
}

//  Cards

flipOver('.front-01', '.product-title-dark-01', '.card-inner-01')

flipOver('.front-02', '.product-title-dark-02', '.card-inner-02')

flipOver('.front-03', '.product-title-dark-03', '.card-inner-03')

flipOver('.front-04', '.product-title-dark-04', '.card-inner-04')

flipOver('.front-05', '.product-title-dark-05', '.card-inner-05')

flipOver('.front-06', '.product-title-dark-06', '.card-inner-06')

flipOver('.front-07', '.product-title-dark-07', '.card-inner-07')

flipOver('.front-58', '.product-title-dark-58', '.card-inner-58')

flipOver('.front-08', '.product-title-dark-08', '.card-inner-08')

flipOver('.front-09', '.product-title-dark-09', '.card-inner-09')

flipOver('.front-10', '.product-title-dark-10', '.card-inner-10')

flipOver('.front-11', '.product-title-dark-11', '.card-inner-11')

flipOver('.front-12', '.product-title-dark-12', '.card-inner-12')

flipOver('.front-13', '.product-title-dark-13', '.card-inner-13')

flipOver('.front-14', '.product-title-dark-14', '.card-inner-14')

flipOver('.front-16', '.product-title-dark-16', '.card-inner-16')

flipOver('.front-18', '.product-title-dark-18', '.card-inner-18')

flipOver('.front-19', '.product-title-dark-19', '.card-inner-19')

flipOver('.front-20', '.product-title-dark-20', '.card-inner-20')

flipOver('.front-22', '.product-title-dark-22', '.card-inner-22')

flipOver('.front-23', '.product-title-dark-23', '.card-inner-23')

flipOver('.front-25', '.product-title-dark-25', '.card-inner-25')

flipOver('.front-26', '.product-title-dark-26', '.card-inner-26')

flipOver('.front-27', '.product-title-dark-27', '.card-inner-27')

flipOver('.front-28', '.product-title-dark-28', '.card-inner-28')

flipOver('.front-29', '.product-title-dark-29', '.card-inner-29')

flipOver('.front-30', '.product-title-dark-30', '.card-inner-30')

flipOver('.front-31', '.product-title-dark-31', '.card-inner-31')

flipOver('.front-32', '.product-title-dark-32', '.card-inner-32')

flipOver('.front-33', '.product-title-dark-33', '.card-inner-33')

flipOver('.front-34', '.product-title-dark-34', '.card-inner-34')

flipOver('.front-35', '.product-title-dark-35', '.card-inner-35')

flipOver('.front-36', '.product-title-dark-36', '.card-inner-36')

flipOver('.front-37', '.product-title-dark-37', '.card-inner-37')

flipOver('.front-38', '.product-title-dark-38', '.card-inner-38')

flipOver('.front-39', '.product-title-dark-39', '.card-inner-39')

flipOver('.front-40', '.product-title-dark-40', '.card-inner-40')

flipOver('.front-41', '.product-title-dark-41', '.card-inner-41')

flipOver('.front-42', '.product-title-dark-42', '.card-inner-42')

flipOver('.front-43', '.product-title-dark-43', '.card-inner-43')

flipOver('.front-44', '.product-title-dark-44', '.card-inner-44')

flipOver('.front-45', '.product-title-dark-45', '.card-inner-45')

flipOver('.front-46', '.product-title-dark-46', '.card-inner-46')

flipOver('.front-47', '.product-title-dark-47', '.card-inner-47')

flipOver('.front-48', '.product-title-dark-48', '.card-inner-48')

flipOver('.front-49', '.product-title-dark-49', '.card-inner-49')

flipOver('.front-50', '.product-title-dark-50', '.card-inner-50')

flipOver('.front-57', '.product-title-dark-57', '.card-inner-57')

flipOver('.front-51', '.product-title-dark-51', '.card-inner-51')

flipOver('.front-52', '.product-title-dark-52', '.card-inner-52')

flipOver('.front-53', '.product-title-dark-53', '.card-inner-53')

flipOver('.front-54', '.product-title-dark-54', '.card-inner-54')

flipOver('.front-55', '.product-title-dark-55', '.card-inner-55')

flipOver('.front-56', '.product-title-dark-56', '.card-inner-56')

flipOver('.front-59', '.product-title-dark-59', '.card-inner-59')
