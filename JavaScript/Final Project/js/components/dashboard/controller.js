import Module from "./module.js";
import View from "./view.js";

export default class Controller {
    constructor(username) {
        this.username = username;
        this.View;
        this.Module = new Module();
    }

    init() {
        const self = this;

        this.Module.getAllUsers().then(function (response) {
            self.View = new View(
                // Role
                response.Table.filter(x => x.username === self.username)[0].role,
                self.username,
                // Edit function
                (id, newData) => {
                    self.Module.editUser(id, newData).then((response) => {
                        response && alert("It's Done!");
                    });
                },
                // Delete function
                (id, username) => {
                    self.Module.deleteUser(id, username).then((response) => {
                        response && alert("It's Done!");
                    });
                }
            );
            self.View.renderComponent(response.Table);
        }).catch(() => {
            alert("Something went wrong!");
        });
    }
}