const comparer = document.querySelector('.comparer');
const line = comparer.querySelector('.comparer__line');
const halfLeft = comparer.querySelector('.comparer__half_left');
let dragging = false;
let moveLine;

const handleMoveLine = (e) => {
  if (dragging) {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const comparerLeft = comparer.getBoundingClientRect().left;
    const left = clientX - comparerLeft;
    line.style.left = `${left}px`;
    halfLeft.style.width = `${left}px`;
  }
};

const startDragging = () => {
  dragging = true;
  document.body.style.userSelect = 'none';
};

const stopDragging = () => {
  dragging = false;
  document.body.style.userSelect = 'auto';
};

line.addEventListener('mousedown', startDragging);

comparer.addEventListener('mousemove', handleMoveLine);

document.addEventListener('mouseup', stopDragging);

line.addEventListener('touchstart', (e) => {
  e.preventDefault();
  startDragging();
});

comparer.addEventListener('touchmove', (e) => {
  handleMoveLine(e);
});

document.addEventListener('touchend', stopDragging);
