import { Div, Span } from "../../Helpers/HTMLElements.js";

export default class View {
    constructor() {
    }

    renderComponent(dataForTable) {
        console.log(dataForTable.Table);
        $(".container").fadeIn();
        const self = this;

        // Table head
        let table = $("<table>").attr("id", "table").addClass("display");
        let thead = $("<thead>");
        let thr = $("<tr>");
        let th = [$("<th>Username</th>"), $("<th>First Name</th>"), $("<th>Last Name</th>"), $("<th>PIN</th>"), $("<th>Role</th>")];
        th.forEach(t => thr.append(t));
        thead.append(thr);

        // Table body
        let tbody = $("<tbody>");
        dataForTable.Table.forEach(user => {
            let row = $("<tr>");
            row.append(`<td>${user.username}</td>`);
            row.append(`<td>${user.first_name}</td>`);
            row.append(`<td>${user.last_name}</td>`);
            row.append(`<td>${user.pin}</td>`);
            row.append(`<td>${user.role}</td>`);

            tbody.append(row);
        });

        table.append(thead);
        table.append(tbody);

        $(".container").append(table);
        $("#table").DataTable({
            paging: true,
            searching: true
        });
    }

    finishPinButtonPressed(button) {
        $(button).removeClass('pin-pressed pin-press-animation');
        this.onPressFunction($(button).find(".pin-number").text());
    };

    removeComponent() {
        $(document).off('keyup', this.keyupListener);
        this.Buttons.forEach((button) => {
            $(button).children().off();
        });
        $(this.Buttons).off();
        $(".container").fadeOut().empty();
    }
};