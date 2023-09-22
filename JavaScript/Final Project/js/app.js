import { Div } from "./Helpers/HTMLElements.js";
import UsernameComponent from "./components/login-username/controller.js";
import PinComponent from "./components/login-pin/controller.js";
import Controller from "./components/dashboard/controller.js";

(function init() {
    const usernameComponent = new UsernameComponent();
    const pinComponent = new PinComponent();

    $("main").append(new Div({ className: "container" }));
    $(new Div({ className: "gray-space" })).insertBefore(".container").hide().click(() => {
        const popup = $(".popup").slideUp();
        popup.empty();
        $(".gray-space").hide();
    });

    usernameComponent.init().then(() => {
        const username = usernameComponent.model.getUsername();
        pinComponent.init(username).then((user) => {
            new Audio("./Assets/LoggedIn.mp3").play();
            const dashboardComponent = new Controller(username);
            dashboardComponent.init();
        }).catch(() => {
            alert("You typed incorrect username or pin code!\nTry again..");
            location.reload();
        });
    });

})();