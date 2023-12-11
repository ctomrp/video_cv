//party time
function startAudio() {
    var audio = document.getElementById('audio-background');
    audio.muted = false;
    audio.play().catch(error => {
        console.error('Error al reproducir audio:', error);
    });
}

//lights
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function showHiredText(words, currentIndex) {
    currentIndex = currentIndex % words.length;

    var hiredText = document.createElement('div');
    hiredText.className = 'random-text';
    var currentWord = words[currentIndex];
    hiredText.textContent = currentWord;

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var textWidth = 7 * currentWord.length;
    var textHeight = 7;

    var randomX = getRandomNumber(0, screenWidth - textWidth);
    var randomY = getRandomNumber(0, screenHeight - textHeight);

    randomX = Math.max(0, Math.min(randomX, screenWidth - textWidth));
    randomY = Math.max(0, Math.min(randomY, screenHeight - textHeight));

    hiredText.style.left = randomX + 'px';
    hiredText.style.top = randomY + 'px';

    document.body.appendChild(hiredText);

    setTimeout(function () {
      hiredText.style.display = 'block';
      setTimeout(function () {
        hiredText.style.display = 'none';
        document.body.removeChild(hiredText);
      }, 490);
    }, 0);

    return currentIndex + 1;
  }

  var wordList = ['Awesome', 'Success', 'Innovation', 'Teamwork', 'Punctual', 'Hired! ;)'];

  var currentIndex = 0;
  setInterval(function () {
    currentIndex = showHiredText(wordList, currentIndex);
  }, 490);

  window.onload = function () {
    // Oculta el loader y muestra la página
    document.getElementById('loader').classList.add('hide');
}