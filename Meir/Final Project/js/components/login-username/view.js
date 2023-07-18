import { Div, Span } from "../../Helpers/HTMLElements.js";

export default class View {
    createUsernameView() {

        const NumbersContainer = new Div({
            className: "numbers-container",
        });

        function createPinButton(num, chars) {
            const PinDiv = new Div({
                className: "pin-button",
                onMousedown: function () {
                    this.classList.add('pin-pressed', 'pin-press-animation');
                },
                onMouseup: function () {
                    this.classList.remove('pin-pressed');
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
        }).on('keyup', keyupListener);
    }
}

var keyupListener = function (event) {
    var key = event.key;
    $('.pin-button').each(function () {
        console.log(888)
        if ($(this).text() === key) {
            $(this).addClass('pin-pressed pin-press-animation');
            setTimeout(() => {
                $(this).removeClass('pin-pressed');
            }, 200);
        }
    });
};