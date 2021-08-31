class GuessingGame {
    constructor() {
        this.value = null;
     }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.value = Math.ceil((this.max + this.min)/ 2);
        return this.value;
    }

    lower() {
        this.setRange(this.min, this.value);
    }

    greater() {
        this.setRange(this.value, this.max);
    }
}

module.exports = GuessingGame;
