import View from "./view";
import Model from "./model";

export default class Controller {
    constructor(username) {
        this.username = username;
        this.View = new View();
        this.Model = new Model();
    }

    init() {
        this.View.init();
        $(".pin-button").on("click", () => {
            this.Model.addNumberIntoView(this.find(".main-text").text());
        });
    }

    
}