import { Div, Span } from "../../Helpers/HTMLElements.js";

export default class View {
    constructor() {
        this.fourDigits = 0;
        this.onPressFunction;
    }

    onNumberPress(onPressFunction) {
        this.onPressFunction = onPressFunction;
    }

    renderComponent() {
        const self = this;

        function createPinButton(num, chars) {
            const PinDiv = new Div({
                className: "pin-button",
                onMousedown: function () {
                    self.setPinButtonPressed(this);
                },
                onMouseup: function () {
                    self.finishPinButtonPressed(this);
                },
            });
            PinDiv.append(
                new Span({ className: "pin-number", textContent: num }),
                new Span({ className: "pin-chars", textContent: chars })
            );
            return PinDiv;
        }

        self.Buttons = [
            createPinButton(1, "ABC"),
            createPinButton(2, "DEF"),
            createPinButton(3, "GHI"),
            createPinButton(4, "JKL"),
            createPinButton(5, "MNO"),
            createPinButton(6, "PQRS"),
            createPinButton(7, "TUV"),
            createPinButton(8, "WXYZ"),
            createPinButton(9, "#"),
            createPinButton(0, "*"),
        ];


        $(document).ready(function () {
            for (let i = 0; i < 4; i++) {
                const row = new Div({ className: "row" });
                for (let j = 0; j < (i === 3 ? 1 : 3); j++) {
                    row.append(self.Buttons[(i * 3) + j]);
                }
                $('.container').append(row).hide().fadeIn("slow");
            }
        }).on('keyup', this.keyupListener);

    }

    setPinButtonPressed(button) {
        $(button).addClass('pin-pressed pin-press-animation');
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

    keyupListener = (event) => {
        const self = this;
        var key = event.key;

        $('.pin-button').each(function () {
            if ($(this).find(".pin-number").text() === key) {
                self.setPinButtonPressed(this);

                setTimeout(() => {
                    self.finishPinButtonPressed(this);
                }, 100);
            }
        });
    };
};