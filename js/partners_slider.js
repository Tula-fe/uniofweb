const show_all = document.getElementById('partners_allBtn');
const track = document.getElementById('partners_sliderTrack');
const scrollbar = document.getElementById('partners_sliderScrollbar');
const thumb = document.getElementById('partners_sliderThumb');

show_all.addEventListener('click', () => {
  track.classList.toggle('expanded');
  if (scrollbar.style.display !== "none") {
    scrollbar.style.display = "none";
  } else {
      scrollbar.style.display = "block";
    };
  if (show_all.innerText == "СМОТРЕТЬ ВСЕ") {
    show_all.innerText = "СКРЫТЬ";
    } else {
      show_all.innerText = "СМОТРЕТЬ ВСЕ"
    };
});

// прокрутка колесиком мыши по элементам
track.addEventListener('wheel', (e) => {
  e.preventDefault();

  // ширина одного слайда + gap
  const slide = track.querySelector('.partners__item');
  const gap = parseInt(getComputedStyle(track).gap) || 0;
  const slideWidth = slide.offsetWidth + gap;

  // направление прокрутки
  const direction = e.deltaY > 0 ? 1 : -1;
  track.scrollBy({
    left: direction * slideWidth,
    behavior: 'smooth'
  });
});

// обновление кастомного скролла
function updateScrollbar() {
  const trackWidth = track.scrollWidth;
  const visibleWidth = track.clientWidth;
  const scrollLeft = track.scrollLeft;

  if (trackWidth <= visibleWidth) {
    thumb.style.display = 'none';
  } else {
    thumb.style.display = 'block';
    const thumbWidth = visibleWidth / trackWidth * scrollbar.clientWidth;
    thumb.style.width = `${thumbWidth}px`;
    const thumbLeft = scrollLeft / (trackWidth - visibleWidth) * (scrollbar.clientWidth - thumbWidth);
    thumb.style.left = `${thumbLeft}px`;
  }
}

// синхронизируем ползунок при прокрутке
track.addEventListener('scroll', updateScrollbar);
window.addEventListener('resize', updateScrollbar);

// инициализация
updateScrollbar();