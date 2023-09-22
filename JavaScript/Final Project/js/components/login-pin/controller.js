import Module from "./module.js";
import View from "./view.js";

export default class Controller {
    constructor() {
        this.view = new View();
        this.module = new Module();
    }

    init(username) {
        return new Promise((resolved, rejected) => {

            this.view.renderComponent();

            this.view.onNumberPress((num) => {
                this.module.addToPin(num);
                if (this.module.isFourDigits()) {
                    this.view.removeComponent();

                    // Check User
                    this.module.checkTheUser(username).then((user) => {
                        resolved(user);
                    }).catch(() => {
                        rejected(false);
                    });
                }
            });
        });
    }
}
