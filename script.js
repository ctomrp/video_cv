function startAudio() {
    var audio = document.getElementById('audio-background');
    audio.muted = false;
    audio.play().catch(error => {
      console.error('Error al reproducir audio:', error);
    });
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function showHiredText(words) {
    var hiredText = document.createElement('div');
    hiredText.className = 'random-text';
    var randomWord = words[getRandomNumber(0, words.length - 1)];
    hiredText.textContent = randomWord;

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var randomX = getRandomNumber(0, screenWidth - 100);
    var randomY = getRandomNumber(0, screenHeight - 30);

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
  }

  var wordList = ['Hired! ;)', 'Awesome', 'Success', 'Innovation', 'Teamwork', 'Punctual'];

  startAudio();
  setInterval(function() {
    showHiredText(wordList);
  }, 490);