const d = document,
  n = navigator,
  ua = n.userAgent;

export function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/¡phone|¡pad|¡pod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this, this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/),
      opera: () => ua.match(/opera|opera mini/),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };

  console.log(isMobile.any());
  $id.innerHTML = `
    <ol>
      <li>User Agent: ${ua}</li>
      <li>Plataforma: ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
      <li>Navegador: ${isBrowser.any()}</li>
    </ol>
  `;

  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
  }

  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`;
  }

  if (isBrowser.safari()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Safari</mark></p>`;
  }

  if (isDesktop.windows()) {
    $id.innerHTML += `<p>Estas usando Windows</p>`;
  }

  if (isDesktop.linux()) {
    $id.innerHTML += `<p>Hackerman</p>`;
  }

  if (isDesktop.mac()) {
    $id.innerHTML += `<p>Sofisticado eh</p>`;
  }
}
