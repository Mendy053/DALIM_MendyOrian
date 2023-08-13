import View from "./view.js";

export default class Controller {
    constructor() {
        this.View = new View();
    }

    init() {
        const self = this;

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
            self.View.renderComponent(response);
        });
    }
}