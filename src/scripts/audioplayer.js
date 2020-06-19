// eslint-disable-next-line import/extensions

async function audioplayer() {
    const audioElement = document.querySelectorAll('data-js-playlist');
  
    audioElement.forEach((element) => {
      const sound = new Howl({
          //data-js-playlist -> /audio.
      });
      element.addEventListener('click', () => {
        if (sound.play()) {
          sound.stop();
        } else {
          sound.play();
        }
      });
    });
  } 
  audioplayer();  