const comparer = document.querySelector('.comparer');
const line = comparer.querySelector('.comparer__line');
const lineInner = line.querySelector('.comparer__line__inner');
const halfLeft = comparer.querySelector('.comparer__half_left');
let dragging = false;
let moveLine;

const handleMoveLine = (e) => {
  if (dragging) {
    const comparerRect = comparer.getBoundingClientRect();

    if (e.touches) {
      if ((e.touches[0].clientX < comparerRect.left) || (e.touches[0].clientX > comparerRect.right)) {
        stopDragging;
        return;
      }
    };

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const left = clientX - comparerRect.left;
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

const observer = new IntersectionObserver(entries => {
  setTimeout(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('comparer-animation');
      }
    });
  }, 1500)
});

observer.observe(comparer);
