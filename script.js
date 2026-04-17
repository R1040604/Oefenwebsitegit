let timeLeft = 30;
let gameTimer = null;


function startGameTimer() {
    clearInterval(gameTimer); // veiligheid

    gameTimer = setInterval(() => {
        timeLeft--;
        updateTimerUI();

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function updateTimerUI() {
    document.getElementById("timer-indicator").innerText =
        "Time: " + timeLeft;
}
