import * as MyHTML from "../../Helpers/HTMLElements.js";
export default class View {
    constructor() {
    }

    init() {
        const Form = new MyHTML.Form({
            id: "login-form"
        });

        // USERNAME
        const Username = new MyHTML.Div({
            id: "username-group"
        });

        const UsernameLabel = new MyHTML.Label({
            for: "username",
            innerText: "Username:"
        });

        const UsernameInput = new MyHTML.Input({
            type: "text",
            id: "username",
            placeholder: "Enter Your Username",
            required: true
        });

        Username.append(UsernameLabel, UsernameInput);

        // SUBMIT
        const Submit = new MyHTML.Div({
            id: "submit-group"
        });

        this.SubmitButton = new MyHTML.Button({
            type: "submit",
            innerText: "Submit",
        });

        Submit.append(SubmitButton);

        $("main").empty().append(Username, Submit);
    }

    getUsername() {
        return new Promise((resolve, reject) => {
            const Username = $("#username").val();
            if (Username) resolve(Username);
            else reject();
        });
    }
}
