const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");


const timerInitial = () => {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
}

const timerRunning = () => {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
}

const timerStopped = () => {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
}

timerInitial();

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  const countUp = () => {
  const d = new Date(Date.now() - startTime + elapsedTime);
  const h = d.getHours()-9;
  const m = d.getMinutes();
  const s = d.getSeconds();
  const ms = d.getMilliseconds();
  timer.textContent = `${h}:${m}:${s}:${ms}`
  timeId = setTimeout(() => {
        countUp();
      }, 10)
      timerRunning();
}

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });


  stop.addEventListener("click", () => {
    clearTimeout(timeId);
    elapsedTime += Date.now() - startTime;
    timerStopped();
  })

  reset.addEventListener("click", () => {
    timer.textContent = "0:0:0:0"
    elapsedTime = 0;
    timerInitial();
  })