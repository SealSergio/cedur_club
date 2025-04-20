document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.sketches-slider');
  const preveiwList = Array.from(slider.querySelectorAll('.sketches-slider__preview__item'));
  const zoomImg = document.querySelector('.sketches-slider__zoom__img');

  let activeImg = 1;
  zoomImg.src = '../img/sketches-examples/01_zoom.jpg';

  preveiwList.forEach(previewItem => {
    previewItem.addEventListener('click', (e) => {
      preveiwList.forEach(preview => {
        if (preview === e.target) {
          preview.classList.add('active');
          activeImg = preveiwList.indexOf(preview) + 1;
          zoomImg.src = `../../img/sketches-examples/0${activeImg}_zoom.jpg`;
        } else {
          preview.classList.remove('active');
        }
      });
    })
  });
});
