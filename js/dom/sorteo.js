const d = document;

export function draw(btn, selector) {
  // get winner form nodeList (selector)
  const getWinner = (selector) => {
    const $player = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $player.length),
      winner = $player[random];

    return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}

/* const getWinnerComments = (selector) => {
  const $player = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $player.length),
    winner = $player[random];

  return `El ganador es: ${winner.textContent}`;
}; */
