class ExtendedClock extends Clock {
    constructor(template) {
        super(template);
        this.precision = 1000;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}