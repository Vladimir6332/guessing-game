class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.range;               
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.range = this.max - this.min;
    }

    guess() {
        return Math.round((this.max - this.min) / 2);               
    }

    lower() {
        this.max -= Math.round(this.range / 2);
        this.range = this.max - this.min;

    }

    greater() {
        this.min += Math.round(this.range / 2);
        this.range = this.max - this.min;

    }
}

module.exports = GuessingGame;
