export default class Module {
    constructor() {
        this.username;
    }
    getUsername() {
        return this.username;
    }
    setValidUsername(newUsername) {
        return new Promise((resolved, rejected) => {
            if (newUsername) {
                this.username = newUsername;
                resolved();
            } else {
                rejected();
            }
        });
    }
}