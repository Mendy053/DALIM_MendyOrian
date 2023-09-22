export default class Module {
    constructor() { }
    getAllUsers() {
        return new Promise((resolved, rejected) => {
            $.ajax({
                "url": "https://meir-final-project-7c7c47.appdrag.site/api/getAllUsers",
                "data": {
                    "AD_PageNbr": "1",
                    "AD_PageSize": "500"
                },
                "method": "GET",
                "async": true,
                "crossDomain": true,
                "processData": true
            }).done(function (response) {
                resolved(response);
            });
        });
    }

    deleteUser(id, username) {
        if (confirm("Are you sure you want to delete the account:\n" + username)) {
            return new Promise((resolved) => {
                const settings = {
                    "url": "https://meir-final-project-7c7c47.appdrag.site/api/deleteUser",
                    "data": {
                        "id": id
                    },
                    "method": "DELETE",
                    "async": true,
                    "crossDomain": true,
                    "processData": true
                };
                $.ajax(settings).done(function (response) {
                    resolved(response); // TODO: Do something with the result
                });
            });
        }
    }

    editUser(id, newData) {
        if (confirm("Sure?")) {
            return new Promise((resolved) => {
                const settings = {
                    "url": "https://meir-final-project-7c7c47.appdrag.site/api/editUser",
                    "data": {
                        "id": id,
                        "username": newData.username,
                        "first_name": newData.first_name,
                        "last_name": newData.last_name,
                        "token": newData.token,
                        "pin": newData.pin
                    },
                    "method": "POST",
                    "async": true,
                    "crossDomain": true,
                    "processData": true
                };
                $.ajax(settings).done(function (response) {
                    resolved(response); // TODO: Do something with the result
                });
            });
        }
    }
}