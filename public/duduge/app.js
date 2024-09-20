const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
const grid = document.querySelector(".grid")
const mole = document.querySelector(".mole")
var squares;
let result = 0;
let targetPosisition = null;
let currentTime = 60;
let timer;
let countdownTimer;

for (let i=0; i<9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}
squares = document.querySelectorAll(".square")

function randomSquare() {
    squares.forEach(function(square) {
        square.classList.remove('mole')
    })
    let randomNumber = Math.floor(Math.random() * 9);
    targetPosisition = randomNumber
    let randomSquare = squares[randomNumber];
    randomSquare.classList.add('mole')
}

function moveInterval() {
    timer =setInterval(randomSquare, 1000)
}

moveInterval()

for (let i=0; i<9; i++) {
    squares[i].addEventListener('mousedown', function() {
        if (i === targetPosisition) {
            result++
            score.textContent = result
            targetPosisition = null;
        }
    })
}

function countdwon() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(timer)
        clearInterval(countdownTimer)
        alert("YOU GAME OVER YEEEEEEEEEE! Score : " + result)
    }
}

countdownTimer = setInterval(countdwon, 1000)