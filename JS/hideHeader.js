const header = document.querySelector('.header');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const top = window.pageYOffset;

  if (top > 300) {
    if (top > lastScrollTop){
      if (!header.classList.contains('hidden')) {
        header.classList.add('hidden');
      }
    } else {
      if (header.classList.contains('hidden')) {
        header.classList.remove('hidden');
      }
    }
    lastScrollTop = top;
  }
});
