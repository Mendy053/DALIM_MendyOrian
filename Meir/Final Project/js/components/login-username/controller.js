import View from "./view.js";
import Model from "./model.js";

export default class Controller {
    constructor() {
        this.view = new View();
        this.model = new Model();
    }
    init() {
        this.view.renderPinButtons();
        
        this.view.onButtonPress((num) => {
            this.model.addToPin(num);
            if(this.model.isFourDigits()){
                $("main").fadeOut("slow")
                this.view.stopTheKeyupListener()
            }
        });
        // stop listener keyupListener
    }
}
