const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let time = 0;
let elaspedTime = 0;
let intervalId;

function startTimer() {
  time = Date.now() - elaspedTime;

  intervalId = setInterval(() => {
    elaspedTime = Date.now() - time;
    timer.textContent = formatTime(elaspedTime);
  }, 10);

  startBtn.disabled = true;
  stopBtn.disabled = false;
}
function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}
function stopTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
function resetTimer() {
  clearInterval(intervalId);
  timer.textContent = "00:00:00";
  elaspedTime = 0;
  startBtn.disabled = false;
  stopBtn.disabled = false;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
