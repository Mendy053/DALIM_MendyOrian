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
                textContent: "Username:"
            }),
            new Input({
                type: "email",
                name: "username",
                id: "username",
                placeholder: "Enter your username",
                value: ""
            }),
            new Span({
                id: "wrong-message"
            })
        );

        this.submit = new Button({
            id: "submit-button",
            textContent: "Submit"
        });

        $(document).ready(function () {
            $(".container").append(self.usernameInput, self.submit);
        });
    }

    setWrongMassage() {
        $("#wrong-message")
            .text("Please enter some username!")
            .fadeIn(null, function () {
                setTimeout(() => {
                    $(this).fadeOut();
                }, 6000);
            });
    }

    onSubmit = (submitFunction) => {
        $(this.submit).click(() => {
            const username = $(this.usernameInput).find("#username").val();
            submitFunction(username);
        });
    };

    removeComponent() {
        $(".container").children().fadeOut().empty();
    }
}