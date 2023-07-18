import View from "./view.js";

export default class Controller {
    init() {
        new View().createUsernameView();
        // stop listener keyupListener
    }
}
