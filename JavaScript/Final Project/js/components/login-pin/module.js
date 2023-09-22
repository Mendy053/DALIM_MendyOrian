export default class Module {
    constructor() {
        this.pin = "";
    }
    getPin() {
        return this.pin;
    }

    addToPin(num) {
        if (this.pin.length < 4) {
            this.pin += num;
        }
    }

    isFourDigits() {
        return this.pin.length === 4;
    }

    checkTheUser(username) {
        this.username = username;
        return new Promise((resolved, rejected) => {
            let settings = {
                "url": "https://meir-final-project-7c7c47.appdrag.site/api/getUser",
                "data": {
                    "username": this.username,
                    "pin": this.pin,
                    "AD_PageNbr": "1",
                    "AD_PageSize": "500"
                },
                "method": "GET",
                "async": true,
                "crossDomain": true,
                "processData": true
            };

            $.ajax(settings).done(function (response) {
                if (response.Table.length)
                    resolved(response.Table[0]);
                else
                    rejected(false);
            });
        });
    }
}