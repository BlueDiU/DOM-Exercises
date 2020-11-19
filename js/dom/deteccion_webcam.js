const d = document,
  n = navigator;

export function webcam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((error) => {
        $video.insertAdjacentHTML(
          'beforebegin',
          `<p>Sucedio el seguiente error: <mark>${error}</mark></p>`
        );
        console.log('Uppps!', error);
      });
  }
}
