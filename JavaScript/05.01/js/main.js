function emailFormatter(email) {
    email = `${email.split("@")[0].replaceAll(".", "")}@${email.split("@")[1]}`;
    email = `${email.split("@")[0].replaceAll(" ", "")}@${email.split("@")[1]}`;
    email = email.toLowerCase();

    if (email.includes("@gmail.com")) {
        return ({
            status: "grate!",
            email: email
        });
    } else {
        return ({
            status: "wrong!"
        });
    }
}