const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

// Implement method to display how much time is left in "timeDisplay" element

function displayTimeLeft(timeLeft) {
  var minutes = Math.floor((timeLeft % 3600) / 60);
  var seconds = Math.floor(timeLeft % 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.innerHTML = minutes + ":" + seconds;
}

// Implement method to display end time in "endTime" element

function displayEndTime(timestamp) {
  endTime.innerHTML = "Stop counting at " + timestamp;
}



var x;
function timer(seconds) {
  var countDownDate = new Date().getTime();
  console.log(countDownDate, "a");
  let unix = Math.floor(countDownDate / 1000);
  unix += parseInt(seconds);

  const newDate = new Date(Math.floor(unix * 1000));

  let futureTime = [
    newDate.getHours(),
    newDate.getMinutes(),
    newDate.getSeconds()
  ]
    .map(time => time.toString().padStart(2, "0"))
    .join(":");

  let timeLeft = parseInt(seconds);
  console.log(timeLeft);
  console.log(x);
  if (x) {
    clearInterval(x);
  }
  x = setInterval(() => {
    timeLeft--;
    if (timeLeft >= 0) {
      displayTimeLeft(timeLeft);
    } else if (timeLeft < 0) {
      clearInterval(x);
    }
  }, 1000);

  displayEndTime(futureTime);
}


function startTimer(e) {
  let seconds = e.target.dataset.time;
  timer(seconds);
}

buttons.forEach(btn => {
  btn.addEventListener("click", startTimer);
});

document.customForm.addEventListener("submit", e => {
  e.preventDefault();
  let seconds = e.target.elements["inputField"].value;
  seconds = parseInt(seconds);
  timer(seconds);
});

