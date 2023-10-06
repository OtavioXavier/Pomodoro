const pauseButton = document.querySelector(".pause");
const playButton = document.querySelector(".play");
const clockButton = document.querySelector(".clock");
const stopButton = document.querySelector(".stop");
const startmusic = document.querySelector(".sound-on");
const stopmusic = document.querySelector(".sound-off");
const timeMinute = document.querySelector("#minutes"); 
const timeSeconds = document.querySelector("#seconds");
const audio = document.querySelector('audio');
let minute = Number(timeMinute.textContent);
let timerTimeOut;

function countseconds() {

  timerTimeOut = setTimeout(() => {
    let seconds = Number(timeSeconds.textContent);
    let minute = Number(timeMinute.textContent);

    showCorrectDisplay(minute, 0);

    if (minute <= 0) {
      resetButtons()
      return;
    }

    if(seconds <= 0) {
      seconds = 60;
      --minute;
    } 
    
    showCorrectDisplay(minute, String(seconds - 1 ) );
    
    countseconds();

  }, 1000);
}

function resetButtons() {
  playButton.classList.remove("hiden");
  pauseButton.classList.add("hiden");
  clockButton.classList.remove("hiden");
  stopButton.classList.add("hiden");
}

function showCorrectDisplay(minute, seconds){
  timeMinute.textContent = String(minute).padStart(2, "0");
  timeSeconds.textContent = String(seconds).padStart(2, "0");
}

function ShowTimerZero() {
  showCorrectDisplay(0,0)
  clearTimeout(timerTimeOut);
}

playButton.addEventListener("click", () => { 
  //dar play
  playButton.classList.toggle("hiden");
  pauseButton.classList.toggle("hiden");
  clockButton.classList.add("hiden");
  stopButton.classList.remove("hiden");

  countseconds();
  });

pauseButton.addEventListener("click", () => {
  playButton.classList.toggle("hiden");
  pauseButton.classList.toggle("hiden");
  clearTimeout(timerTimeOut);
});

stopButton.addEventListener("click", () => {
  resetButtons();
  ShowTimerZero();
});

clockButton.addEventListener("click", () => {
  minute = prompt("Set the minutes: ") || 0;
  showCorrectDisplay(minute, 0);
});

startmusic.addEventListener("click", () => {
  startmusic.classList.add("hiden");
  stopmusic.classList.remove("hiden");
  audio.pause();
});

stopmusic.addEventListener("click", () => {
  startmusic.classList.remove("hiden");
  stopmusic.classList.add("hiden");
    audio.play();
    audio.loop = true;
});
