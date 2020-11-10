const d = document,
  w = window;

export function scrollTopBtn(btn) {
  const $scrollBtn = d.querySelector(btn);

  /*Dos propiedades
  console.log(w.pageYOffset, d.documentElement.scrollTop);*/

  w.addEventListener('scroll', (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 600) {
      $scrollBtn.classList.remove('hidden');
    } else {
      $scrollBtn.classList.add('hidden');
    }
  });

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: 'smooth',
        top: 0,
        //left: 0,
      });
    }
  });
}
