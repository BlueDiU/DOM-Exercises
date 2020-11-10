import { hamburgerMenu } from './dom/menu_hamburger.js';
import { digitalClock, alarm } from './dom/reloj.js';
import { shortCuts, moveBall } from './dom/teclado.js';
import { countDown } from './dom/cuenta_regresiva.js';
import { scrollTopBtn } from './dom/btn_scroll.js';
import { darkTheme } from './dom/dark_theme.js';

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
});

darkTheme('.dark-theme-btn', 'dark-mode');

d.addEventListener('keydown', (e) => {
  shortCuts(e);
  moveBall(e, '.ball', '.stage');
});
