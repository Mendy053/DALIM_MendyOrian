import Module from "./module.js";
import View from "./view.js";

export default class Controller {
    constructor() {
        this.view = new View();
        this.model = new Module();
    }

    init() {
        return new Promise((resolved) => {
            this.view.renderComponent();
            this.view.onSubmit((username) => {
                this.model.setValidUsername(username)
                    .then(() => {
                        this.view.removeComponent();
                        resolved(this.model.getUsername());
                    }).catch(() => {
                        this.view.setWrongMassage();
                    });
            });
        });
    }
}