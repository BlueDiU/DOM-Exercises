const d = document,
  w = window;

export function resposiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mq);

  const resposive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  //breakpoint.addListener(resposive);
  breakpoint.addEventListener('change', resposive);
  resposive(breakpoint);
}