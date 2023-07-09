import * as MyHTML from "../../Helpers/HTMLElements.js";

class NumberButton {
    constructor(mainText, smallText) {
        this.div = new MyHTML.Div({
            className: "pin-button " + mainText
        });
        const mainText = new MyHTML.Span({
            className: "main-text",
            innerText: mainText
        });
        const smallText = new MyHTML.Span({
            className: "small-text",
            innerText: smallText
        });
        this.div.append(mainText, smallText);
    }
}

export default class View {
    constructor() {
    }
    init() {
        const NumbersContainer = new MyHTML.Div({
            id:"numbers-container"
        })
        NumbersContainer.append(
            new NumberButton(1, "*"),
            new NumberButton(2, "ABC"),
            new NumberButton(3, "DEF"),
            new NumberButton(4, "GHI"),
            new NumberButton(5, "JKL"),
            new NumberButton(6, "MNO"),
            new NumberButton(7, "PQRS"),
            new NumberButton(8, "TUV"),
            new NumberButton(9, "WXYZ"),
            new NumberButton(0, ".")
        )

        $("main").empty().append(
            new MyHTML.Div({
                id: "pin-view"
            }),
            NumbersContainer
        );
    }
}