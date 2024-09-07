const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

let time = 10;
let score = 0;
let palabraRandom = '';
let timerInterval;

function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function setRandomWord() {
    const randomIndex = getRandomIntInRange(0, words.length);
    palabraRandom = words[randomIndex];
    document.getElementById('randomWord').textContent = palabraRandom;
}

function handleInput(e) {
    const palabraIngresada = e.target.value;
    
    if (palabraIngresada === palabraRandom) {
        updateScore();
        time += 3;
        document.getElementById('timeSpan').textContent = `${time}s`;
        e.target.value = '';
        setRandomWord();
    }
}

function actualizarTiempo() {
    if (time > 0) {
        time--;
        document.getElementById('timeSpan').textContent = `${time}s`;
    } else {
        clearInterval(timerInterval);
        gameOver();
    }
}

function updateScore() {
    score++;
    document.getElementById('score').textContent = score;
}

function gameOver() {
    const endGameContainer = document.getElementById('end-game-container');
    endGameContainer.innerHTML = `
        <h2>¡Se acabó el tiempo!</h2>
        <p>Puntaje final: ${score}</p>
        <button onclick="restartGame()">Jugar de nuevo</button>
    `;
    document.querySelector('.main').style.display = 'none';
}

function restartGame() {
    location.reload();
}

function init() {
    setRandomWord();
    document.getElementById('text').addEventListener('input', handleInput);
    timerInterval = setInterval(actualizarTiempo, 1000);
}

init();
