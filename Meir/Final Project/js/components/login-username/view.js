import { Div, Span } from "../../Helpers/HTMLElements.js";

export default class View {
    constructor() {
        this.fourDigits = 0;
        this.onPressFunction;
    }

    onButtonPress(onPressFunction) {
        this.onPressFunction = onPressFunction;
    }

    renderPinButtons() {
        const self = this;

        const NumbersContainer = new Div({
            className: "numbers-container",
        });

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

        NumbersContainer.append(
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
        );


        $(document).ready(function () {
            $('main').empty().append(NumbersContainer).hide().fadeIn("slow");
        }).on('keyup', this.keyupListener);

    }

    setPinButtonPressed(button) {
        $(button).addClass('pin-pressed', 'pin-press-animation');
    }

    finishPinButtonPressed(button) {
        $(button).removeClass('pin-pressed', 'pin-press-animation');
        this.onPressFunction($(button).find(".pin-number").text());
    };

    stopTheKeyupListener() {
        $(document).off('keyup', this.keyupListener);
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