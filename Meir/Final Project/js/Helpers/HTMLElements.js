export class Span extends HTMLSpanElement {
    constructor(object) {
        super();

        for (let key in object) {
            this[key] = object[key];
        }
    }
}
export class Input extends HTMLInputElement {
    constructor(object) {
        super();

        for (let key in object) {
            this[key] = object[key];
        }
    }
}
export class Button extends HTMLButtonElement {
    constructor(object) {
        super();

        for (let key in object) {
            this[key] = object[key];
        }
    }
}
export class Form extends HTMLFormElement {
    constructor(object) {
        super();

        for (let key in object) {
            this[key] = object[key];
        }
    }
}
export class Div extends HTMLDivElement {
    constructor(object) {
        super();

        for (let key in object) {
            this[key] = object[key];
        }
    }
}
export class Label extends HTMLLabelElement {
    constructor(object) {
        super();

        for (let key in object) {
            this[key] = object[key];
        }
    }
}