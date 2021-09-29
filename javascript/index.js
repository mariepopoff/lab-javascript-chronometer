
const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let intervalId;

function printTime() {
  printMinutes();
  printSeconds();
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
  let minute = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minute.substr(0,1);
  minUniElement.textContent = minute.substr(1,1);
  
}


function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds.substr(0,1);
  secUniElement.textContent = seconds.substr(1,1);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const el = document.createElement("li");
  el.textContent= chronometer.split();
  splitsElement.appendChild(el);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML ="";
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.toggle("start");
  btnLeftElement.classList.toggle("stop");
    btnLeftElement.textContent = "START";
  chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
  btnRightElement.textContent = "SPLIT";
  printSplit();
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.toggle("start");
  btnLeftElement.classList.toggle("stop");
  btnLeftElement.textContent = "STOP";
  chronometer.start();
  intervalId = setInterval(printTime, 1000);
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.add("reset");
  btnRightElement.classList.remove("split");
  btnRightElement.textContent = "RESET";
  chronometer.reset();
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains("start")) {
    btnRightElement.classList.remove("reset");
    btnRightElement.classList.add("split");
    btnRightElement.textContent = "SPLIT";
    setStartBtn();
  } else {
    btnRightElement.classList.add("reset");
    btnRightElement.classList.remove("split");
    btnRightElement.textContent = "RESET";
    setStopBtn();
  } ;
    
}
)

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
(btnLeftElement.classList.contains("start")) ? setResetBtn() : setSplitBtn();
  
}
)
