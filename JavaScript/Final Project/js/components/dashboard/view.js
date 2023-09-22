import { Div, Span } from "../../Helpers/HTMLElements.js";

export default class View {
    constructor(role, username, submitEditFunction, submitDeleteFunction) {
        this.role = Number(role);
        this.username = username;
        this.controllerEditSubmitFunction = submitEditFunction;
        this.controllerDeleteSubmitFunction = submitDeleteFunction;
    }

    renderComponent(dataForTable) {
        console.log(dataForTable);
        $(".container").fadeIn();
        const self = this;

        // Table head
        let table = $('<table class="table table-hover"/>').attr("id", "table").addClass("display");
        let thead = $("<thead>");
        let thr = $("<tr>");
        let ths = $(`<th scope="col">Username</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">PIN</th><th scope="col">Role</th><th scope="col"></th><th scope="col"></th>`);
        thr.append(ths);
        thead.append(thr);

        // Table body
        let tbody = $("<tbody>");
        dataForTable.forEach(user => {
            let row = $(`<tr${user.username === this.username ? ' class="my-row"' : ""}></tr>`);
            row.append(`<td>${user.username}</td>`);
            row.append(`<td>${user.first_name}</td>`);
            row.append(`<td>${user.last_name}</td>`);
            row.append(`<td>${user.pin}</td>`);
            row.append(`<td>${user.role}</td>`);

            row.append(`<td>
                ${this.role === 1 || ((this.role === 2 || this.role === 3) && this.username === user.username) ? `<i user-id="${user.id}" class="edit-user fa-solid fa-pen-to-square">` : ""}</td>
                <td>${this.username !== user.username && (this.role === 1 || (this.role === 2 && Number(user.role) === 3)) ? `</i><i user-id="${user.id}" username="${user.username}" class="delete-user fa-solid fa-trash"></i>` : ""}
            </td>`);

            tbody.append(row);
        });

        table.append(thead);
        table.append(tbody);

        $(".container").append(table);

        $(".delete-user").click((event) => {
            self.controllerDeleteSubmitFunction(event.target.getAttribute("user-id"), event.target.getAttribute("username"));
        });

        $(".edit-user").click(event => {
            let popup = $("<div class='popup'><div class='container' /></div>");
            popup.find(".container").append(this.#popupContainer(dataForTable.filter(x => x.id == id)[0]));
            $("body").append(popup);
            popup.hide();
            popup.slideDown();
            $(".gray-space").show();
        });
    }


    removeComponent() {
    }

    #popupContainer(user) {
        const Username = {
            label: $(`<label for="username-input">Username:</label>`),
            input: $(`<input type="text" id="username-input" placeholder="Username" value="${user.username}" />`)
        };
        const First_name = {
            label: $(`<label for="first-name-input">First name:</label>`),
            input: $(`<input  type="text" id="first-name-input" placeholder="First name" value="${user.first_name}" />`)
        };
        const Last_name = {
            label: $(`<label for="last-name-input">Last name:</label>`),
            input: $(`<input type="text"  id="last-name-input" placeholder="Last name" value="${user.last_name}" />`)
        };
        const Token = {
            label: $(`<label for="token-input">Token:</label>`),
            input: $(`<input type="text"  id="token-input" placeholder="Token" value="${user.token}" />`)
        };
        const PIN = {
            label: $(`<label for="pin-input">PIN:</label>`),
            input: $(`<input  type="number" maxlength="4" id="pin-input" placeholder="PIN" value="${user.pin}" />`)
        };
        const Submit = $(`<button id="edit-user">Submit</button>`);

        const MyForm = $("<form id='edit-form'>");
        $(MyForm).append(Username.label);
        $(MyForm).append(Username.input);
        $(MyForm).append(First_name.label);
        $(MyForm).append(First_name.input);
        $(MyForm).append(Last_name.label);
        $(MyForm).append(Last_name.input);
        $(MyForm).append(Token.label);
        $(MyForm).append(Token.input);
        $(MyForm).append(PIN.label);
        $(MyForm).append(PIN.input);
        $(MyForm).append(Submit);
        $(MyForm).on("submit", (event => {
            event.preventDefault();
            const formData = {
                username: $("#username-input").val(),
                first_name: $("#first-name-input").val(),
                last_name: $("#last-name-input").val(),
                token: $("#token-input").val(),
                pin: $("#pin-input").val()
            };
            this.controllerEditSubmitFunction(user.id,formData);

            const popup = $(".popup").slideUp();
            popup.empty();
            $(".gray-space").hide();
        }));

        return MyForm;
    }
};