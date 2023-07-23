import { Div } from "./Helpers/HTMLElements.js";
import usernameComponent from "./components/login-username/controller.js";
import pinComponent from "./components/login-pin/controller.js";

(function init() {
    let user = {};

    $("main").append(new Div({ id: "container" }));

    new usernameComponent().init().then((username) => {
        user.username = username;
        new pinComponent().init().then((pin) => {
            user.pin = pin;

            checkUser(user);
        });
    });

    function checkUser(user) {
        alert("checking..");
    }
})();