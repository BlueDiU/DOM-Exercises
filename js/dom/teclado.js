const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();

  //console.log(e.keyCode);

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsBall.top > limitStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsBall.right < limitStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsBall.bottom < limitStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortCuts(e) {
  /* console.log(e.type);
  console.log(e.key, e.keyCode); */

  if (e.key === 'a' && e.ctrlKey) {
    alert('NOOOOOOOOOOOO');
  }

  if (e.ctrlKey && e.key === 'y') {
    alert('Maestro sensei');
  }
}
