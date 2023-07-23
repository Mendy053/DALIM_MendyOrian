import Module from "./module.js";
import View from "./view.js";

export default class Controller {
    constructor() {
        this.view = new View();
        this.module = new Module();
    }
    init() {
        return new Promise((resolved) => {

            this.view.renderComponent();

            this.view.onNumberPress((num) => {
                this.module.addToPin(num);
                if (this.module.isFourDigits()) {
                    this.view.removeComponent();
                    resolved(this.module.getPin());
                }
            });
        });
    }
}
