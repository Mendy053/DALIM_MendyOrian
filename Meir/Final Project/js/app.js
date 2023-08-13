import { Div } from "./Helpers/HTMLElements.js";
import UsernameComponent from "./components/login-username/controller.js";
import PinComponent from "./components/login-pin/controller.js";
import Controller from "./components/dashboard/controller.js";

(function init() {
    const usernameComponent = new UsernameComponent();
    const pinComponent = new PinComponent();
    const dashboardComponent = new Controller();

    $("main").append(new Div({ className: "container" }));

    usernameComponent.init().then(() => {
        pinComponent.init(usernameComponent.model.getUsername()).then((user) => {
            new Audio("./Assets/LoggedIn.mp3").play();
            dashboardComponent.init();
        }).catch(() => {
            alert("You typed incorrect username or pin code!\nTry again..");
            location.reload();
        });
    });

})();