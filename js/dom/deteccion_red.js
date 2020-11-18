const d = document,
  w = window,
  n = navigator;

export function networkStatus() {
  const isOnline = () => {
    const $div = d.createElement('div');

    if (n.onLine) {
      $div.textContent = 'Conexión restablecida';
      $div.classList.add('online');
      $div.classList.remove('offline');
    } else {
      $div.textContent = 'Conexión perdida';
      $div.classList.add('offline');
      $div.classList.remove('online');
    }

    d.body.insertAdjacentElement('afterbegin', $div);

    setTimeout(() => {
      d.body.removeChild($div);
    }, 2000);
  };

  w.addEventListener('online', isOnline());
  w.addEventListener('offline', isOnline());
}
