const CTS_Button = {
    button: document.querySelector("#cts-area h1"),
    text_hover: "Click me to start..",
    text_notHover: "Catch Me If You Can!",
};

(function () {
    CTS_Button.button.innerText = CTS_Button.text_notHover
    CTS_Button.button.addEventListener("mouseover", () => CTS_Button.button.innerText = CTS_Button.text_hover)
    CTS_Button.button.addEventListener("mouseout", () => CTS_Button.button.innerText = CTS_Button.text_notHover)
})();