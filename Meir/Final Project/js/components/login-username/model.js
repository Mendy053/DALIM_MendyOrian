export default class Model {
    constructor() {
        this.pin = "";
    }
    getPin() {
        return this.pin;
    }

    addToPin(num) {
        this.pin += num;
        console.log(this)
    }

    isFourDigits() {
        return this.pin.length === 4;
    }
}