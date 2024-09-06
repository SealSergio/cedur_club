
let btn = document.getElementById("scrollToTop");

btn.addEventListener("click", scrollbtn)

function scrollbtn() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

var lastScrollTop = 0;
window.onscroll = onScroll;

function onScroll (e) {
    var top = window.pageYOffset;
    if (lastScrollTop > top) {
        btn.style.display = 'block';
        btn.style.opacity = '1';

    } else if (lastScrollTop < top) {
      btn.style.display = 'none';
      btn.style.transition = 'opacity 1s';
      btn.style.opacity = '0';
    }
    lastScrollTop = top;
}

