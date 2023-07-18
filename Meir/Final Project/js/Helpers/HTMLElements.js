export class Span extends HTMLSpanElement {
    constructor(properties) {
        super();
        Object.assign(this, properties);
        attachEventListeners(this);
    }
}

customElements.define("custom-span", Span, { extends: "span" });

export class Input extends HTMLInputElement {
    constructor(properties) {
        super();
        Object.assign(this, properties);
        attachEventListeners(this);
    }
}

customElements.define("custom-input", Input, { extends: "input" });

export class Button extends HTMLButtonElement {
    constructor(properties) {
        super();
        Object.assign(this, properties);
        attachEventListeners(this);
    }
}

customElements.define("custom-button", Button, { extends: "button" });

export class Form extends HTMLFormElement {
    constructor(properties) {
        super();
        Object.assign(this, properties);
        attachEventListeners(this);
    }
}

customElements.define("custom-form", Form, { extends: "form" });

export class Div extends HTMLDivElement {
    constructor(properties) {
        super();
        Object.assign(this, properties);
        attachEventListeners(this);
    }
}

customElements.define("custom-div", Div, { extends: "div" });

export class Label extends HTMLLabelElement {
    constructor(properties) {
        super();
        Object.assign(this, properties);
        attachEventListeners(this);
    }
}

customElements.define("custom-label", Label, { extends: "label" });


function attachEventListeners(element) {
    if (element.onClick && typeof element.onClick === "function") {
        element.addEventListener("click", element.onClick);
    }
    if (element.onMousedown && typeof element.onMousedown === "function") {
        element.addEventListener("mousedown", element.onMousedown);
    }
    if (element.onMouseup && typeof element.onMouseup === "function") {
        element.addEventListener("mouseup", element.onMouseup);
    }
    if (element.onKeyup && typeof element.onKeyup === "function") {
        element.addEventListener("keyup", element.onKeyup);
    }
    if (element.onChange && typeof this.onChange === "function") {
        this.addEventListener("change", this.onChange);
    }
    if (element.onSubmit && typeof this.onSubmit === "function") {
        this.addEventListener("submit", this.onSubmit);
    }
}