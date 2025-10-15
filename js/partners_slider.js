document.addEventListener("DOMContentLoaded", () => {
  const show_all = document.getElementById('partners_allBtn');
  const track = document.getElementById('partners_sliderTrack');
  const scrollbar = document.getElementById('partners_sliderScrollbar');
  const thumb = document.getElementById('partners_sliderThumb');

  if (!track) return;

  show_all.addEventListener('click', () => {
    track.classList.toggle('expanded');
    scrollbar.style.display = scrollbar.style.display !== "none" ? "none" : "block";
    show_all.innerText = show_all.innerText === "СМОТРЕТЬ ВСЕ" ? "СКРЫТЬ" : "СМОТРЕТЬ ВСЕ";
  });

  track.addEventListener('wheel', (e) => {
    e.preventDefault();
    const slide = track.querySelector('.partners__item');
    if (!slide) return;
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    const slideWidth = slide.offsetWidth + gap;
    const direction = e.deltaY > 0 ? 1 : -1;
    track.scrollBy({
      left: direction * slideWidth,
      behavior: 'smooth'
    });
  });

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

  track.addEventListener('scroll', updateScrollbar);
  window.addEventListener('resize', updateScrollbar);

  updateScrollbar();
});