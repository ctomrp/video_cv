function startAudio() {
    var audio = document.getElementById('audio-background');
    audio.muted = false;
    audio.play().catch(error => {
        console.error('Error al reproducir audio:', error);
    });
}