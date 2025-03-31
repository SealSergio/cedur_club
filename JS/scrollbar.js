const scrollbar = document.querySelector('.scrollbar');
const scrollbarThumb = document.querySelector('.scrollbar__thumb');

let lastScroll = 0;

function countScrollTop(top) {
  const windowHeight = document.body.scrollHeight;
  const scrollbarHeight = scrollbar.scrollHeight;

  const margin = (scrollbarHeight - 48) * (top / (windowHeight - scrollbarHeight));
  scrollbarThumb.style.top = `${margin}px`;
  // console.log('Высота окна:', windowHeight)
  // console.log('Уже прокручено:', top)
  // console.log('Высота скроллбара:', scrollbarHeight)
  // console.log('Прокручено в процентах:', top / (windowHeight - scrollbarHeight))
  // console.log(margin)
  // console.log('')
}

window.addEventListener('scroll', () => {
  let top = window.pageYOffset;
  let timer = 0;

  scrollbarThumb.style.opacity = '0.5';
  countScrollTop(top);

  if (!scrollbarThumb.classList.contains('active')) {
    timer = 1500;
    setTimeout(() => {
      scrollbarThumb.style.opacity = '0';
    }, timer);
  };
});

scrollbar.addEventListener('mouseover', () => {
  let top = window.pageYOffset;
  scrollbarThumb.style.opacity = '0.5';
  countScrollTop(top);
  scrollbarThumb.classList.add('active');
});

scrollbar.addEventListener('mouseout', () => {
  scrollbarThumb.style.opacity = '0';
  scrollbarThumb.classList.remove('active');
});

// scrollbarThumb.addEventListener('mousedown', (event) => {
//   // let marg =
//   // window.scrollTo()
//   scrollbar.addEventListener('mousemove', (e) => {
//     console.log('e.clientY', e.clientY)
//     console.log('scrollbar', scrollbarThumb.getBoundingClientRect().top)
//     console.log('')
//     // scrollbarThumb.style.top = e.clientY - scrollbarThumb.getBoundingClientRect().y + 'px';
//   })

//   // moveAt(event.pageY);

//   // // переносит мяч на координаты (pageX, pageY),
//   // // дополнительно учитывая изначальный сдвиг относительно указателя мыши
//   // function moveAt(pageY) {
//   //   let margi = event.clientY;
//   //   console.log('pageY', pageY)
//   //   console.log('event.clientY', event.clientY)
//   //   console.log('scrollbarThumb', scrollbarThumb.getBoundingClientRect().y)
//   //   console.log('margi', margi)
//   //   scrollbarThumb.style.top = margi + 'px';
//   // }

//   // function onMouseMove(event) {
//   //   console.log('двигаем')
//   //   moveAt(event.pageY);
//   // }

//   // // передвигаем мяч при событии mousemove
//   // document.addEventListener('mousemove', onMouseMove);

//   // // отпустить мяч, удалить ненужные обработчики
//   // document.onmouseup = function() {
//   //   document.removeEventListener('mousemove', onMouseMove);
//   //   scrollbarThumb.onmouseup = null;
//   //   console.log('отпустили мяч')
//   // };
// })

// scrollbarThumb.ondragstart = function() {
//   return false;
// };

// const margin = (scrollbarHeight - 48) * (top / (windowHeight - scrollbarHeight));
