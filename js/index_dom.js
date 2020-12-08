import { hamburgerMenu } from './dom/menu_hamburger.js';
import { digitalClock, alarm } from './dom/reloj.js';
import { shortCuts, moveBall } from './dom/teclado.js';
import { countDown } from './dom/cuenta_regresiva.js';
import { scrollTopBtn } from './dom/btn_scroll.js';
import { darkTheme } from './dom/dark_theme.js';
import { resposiveMedia } from './dom/objeto_resposive.js';
import { resposiveTester } from './dom/prueba_responsive.js';
import { userDeviceInfo } from './dom/deteccion_dispositivos.js';
import { networkStatus } from './dom/deteccion_red.js';
import { webcam } from './dom/deteccion_webcam.js';
import { getGeoLocation } from './dom/geolocalizacion.js';
import { searchFilters } from './dom/filtro_busquedas.js';
import { draw } from './dom/sorteo.js';
import { slider } from './dom/carousel.js';
import { scrollSpy } from './dom/scroll_espia.js';

//./dom/menu_hamburger.js

const d = document;

d.addEventListener('DOMContentLoaded', () => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm(
    'assets/alarma-morning-mix.mp3',
    '#activar-alarma',
    '#desactivar-alarma'
  );
  countDown('countdown', 'February 20, 2021 02:23:00', 'Feliz cumpleaños 🎉');
  scrollTopBtn('.scroll-top-btn');
  resposiveMedia(
    'youtube',
    '(min-width: 1024px)',
    `
    <a href="https://www.youtube.com/embed/LXb3EKWsInQ"  target="_blank" >Ver video</a> 
    `,
    `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
  );

  resposiveMedia(
    'gmaps',
    '(min-width: 1024px)',
    ` <a href="https://goo.gl/maps/dYm24MCJh3YYBhQP8"  target="_blank" >Ver Mapa</a> `,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62022.61447860239!2d-89.24443494427737!3d13.693393743140744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633067b411775d%3A0x1f75978893fb5c96!2sSan%20Salvador!5e0!3m2!1sen!2ssv!4v1605228881044!5m2!1sen!2ssv" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );

  resposiveTester('responsive-tester');

  userDeviceInfo('user-device');

  webcam('webcam');

  getGeoLocation('geolocalition');

  searchFilters('.card-filter', '.card');

  draw('#winner-btn', '.player');

  slider();

  scrollSpy();
});

darkTheme('.dark-theme-btn', 'dark-mode');

networkStatus();

d.addEventListener('keydown', (e) => {
  shortCuts(e);
  moveBall(e, '.ball', '.stage');
});
