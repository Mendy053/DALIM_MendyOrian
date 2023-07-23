export default class Module {
    constructor() {
        this.pin = "";
    }
    getPin() {
        return this.pin;
    }

    addToPin(num) {
        if (this.pin.length < 4) {
            this.pin += num;
        }
    }

    isFourDigits() {
        return this.pin.length === 4;
    }
}