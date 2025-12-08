const timerElement = document.getElementById('timer');
let currentNumberOfSeconds = parseInt(timerElement.textContent);

function secondsToHMS(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

timerElement.textContent = secondsToHMS(currentNumberOfSeconds);

const intervalId = setInterval(() => {
  currentNumberOfSeconds = currentNumberOfSeconds - 1;
  timerElement.textContent = secondsToHMS(currentNumberOfSeconds);
  if (currentNumberOfSeconds == 0) {
    clearInterval(intervalId);
    window.alert("Вы победили в конкурсе!");
  }
}, 1000);