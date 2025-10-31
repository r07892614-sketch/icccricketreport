let timer = 60;
const countdown = document.getElementById("countdown");

const interval = setInterval(() => {
  timer--;
  countdown.textContent = timer;

  if (timer <= 0) {
    clearInterval(interval);
    document.getElementById("joinBtn").click(); // auto redirect
  }
}, 1000);
