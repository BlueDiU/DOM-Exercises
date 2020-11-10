const d = document;

export function countDown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = (
        '0' + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        '0' + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = (
        '0' + Math.floor((limitTime % (1000 * 60)) / (1000))
      ).slice(-2);

    $countdown.innerHTML = `<h3 id="countdown">Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
    
    if (limitTime < 0) {
        clearInterval(countdownTempo);
         $countdown.innerHTML = `<h3 id="countdown">${finalMessage}<h3>`;
    }
  }, 1000);
}
