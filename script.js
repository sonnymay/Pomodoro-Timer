const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

let timeLeftInSeconds = 25 * 60;
let intervalId;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeftInSeconds / 60);
    const seconds = timeLeftInSeconds % 60;

    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");
}

function startTimer() {
    intervalId = setInterval(() => {
        timeLeftInSeconds--;

        if (timeLeftInSeconds < 0) {
            clearInterval(intervalId);
            alert("Time's up! Take a short break.");
            resetTimer();
        } else {
            updateTimerDisplay();
        }
    }, 1000);

    startButton.disabled = true;
    resetButton.disabled = false;
}

function resetTimer() {
    clearInterval(intervalId);
    timeLeftInSeconds = 25 * 60;
    updateTimerDisplay();

    startButton.disabled = false;
    resetButton.disabled = true;
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
