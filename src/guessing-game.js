class GuessingGame {
  constructor() {
    this.minimum = null;
    this.maximum = null;
    this.probable = null;
  }

  setProbable() {
    this.probable = Math.round((this.minimum + this.maximum) / 2);
  }

  setRange(min, max) {
    this.minimum = min;
    this.maximum = max;
    this.setProbable();
  }

  guess() {
    return this.probable;
  }

  lower() {
    this.maximum = this.probable;
    this.setProbable();
  }

  greater() {
    this.minimum = this.probable;
    this.setProbable();
  }
}

module.exports = GuessingGame;
