const d = document,
  n = navigator;

export function getGeoLocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    $id.classList.add('gmaps');

    $id.innerHTML = `
    <p>Tú posición actual es: </p>
    <ul>
        <li>Latitud: <b>${coords.latitude}</b> </li>
        <li>Logitud: <b>${coords.longitude}</b> </li>
        <li>Precisión: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener">
        Ver en google Maps
    <a/>
    `;
  };

  const error = (err) => {
    $id.innerHTML = `<p>Error: ${err.code} : ${err.message}</p>`;
    console.error(`Error: ${err.code} : ${err.message}`);
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
