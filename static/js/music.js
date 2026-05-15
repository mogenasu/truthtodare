const music = document.getElementById('bg-music');
const toggle = document.getElementById('music-toggle');

let playing = false;

toggle.addEventListener('click', () => {
    if (playing) {
        music.pause();
        toggle.innerHTML = '♪';
    } else {
        music.play();
        toggle.innerHTML = '❚❚';
    }

    playing = !playing;
});