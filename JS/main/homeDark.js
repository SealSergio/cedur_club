const homeImg = document.querySelector('.home__img');

window.addEventListener('load', () => {
  setTimeout(() => {
    homeImg.classList.add('home__img_dark');
  }, 500)
});

