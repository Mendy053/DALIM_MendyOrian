import { Button, Div, Input, Label, Span } from "../../Helpers/HTMLElements.js";

export default class View {
    constructor() { }
    renderComponent() {
        const self = this;

        this.usernameInput = new Div({
            id: "username-container"
        });

        this.usernameInput.append(
            new Label({
                for: "username",
                textContent: "Username"
            }),
            new Input({
                name: "username",
                id: "username",
                placeholder: "Enter your username:",
                value: ""
            }),
            new Span({
                id: "wrong-message"
            })
        );

        this.submit = new Button({
            id: "submit-button",
            onClick: this.onSubmit
        });

        $(document).ready(function () {
            $("#container").append(self.usernameInput, self.submit);
        });

    }

    setWrongMassage() {
        $("#wrong-message")
            .text("Please set some username!")
            .fadeIn(null, function () {
                setTimeout(() => {
                    $(this).fadeOut();
                }, 6000);
            });
    }
    // view.js
    onSubmit = (submitFunction) => {
        // Get the value of the username input field
        const username = $(this.usernameInput).find("#username").val();
        // Call the submitFunction with the username value
        submitFunction(username); // Call the passed function with the username
    };


    removeComponent() {
        $("#container").children().fadeOut().empty();
    }
}