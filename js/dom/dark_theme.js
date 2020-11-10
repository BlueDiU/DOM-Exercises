const d = document;

export function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll('[data-dark]');

  let moon = '🌙',
    sun = '☀️';

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        $selectors.forEach((selector) => selector.classList.add(classDark));
        $themeBtn.textContent = sun;
      } else {
        $selectors.forEach((selector) => selector.classList.remove(classDark));
        $themeBtn.textContent = moon;
      }
    }
  });
}
