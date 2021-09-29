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

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
  btnRightElement.textContent = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.add("reset");
  btnRightElement.classList.remove("split");
  btnRightElement.textContent = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  btnLeftElement.classList.toggle("start");
  btnLeftElement.classList.toggle("stop");
  (btnLeftElement.textContent === "START") ? 
    btnLeftElement.textContent = "STOP" :
    btnLeftElement.textContent = "START";
  (btnLeftElement.classList.contains("start")) ? setResetBtn() : setSplitBtn();
    
}
)

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
(btnLeftElement.classList.contains("start")) ? setResetBtn() : setSplitBtn();
  
}
)
