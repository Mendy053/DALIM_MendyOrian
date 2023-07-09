import Pin_view from "../login-pin/controller";
import View from "./view";

export default class Controller {
    constructor() {
        this.Username_V = new View();

        this.username;
    }

    init() {
        this.Username_V.init();
        this.Username_V.SubmitButton.on("click", () => {
            this.Username_V.getUsername()
                .then(username => {
                    this.username = username;
                    this.Pin_V = new Pin_view(this.username);
                    this.Pin_V.init();
                })
                .catch(() => {
                    alert("Please fill in the username field..");
                });
        });

    }
}