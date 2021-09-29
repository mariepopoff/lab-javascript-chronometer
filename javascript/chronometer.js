class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime ++;
  }, 1000);
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60 
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return (value<10) ? `0${value}` : value.toString();
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minute}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
