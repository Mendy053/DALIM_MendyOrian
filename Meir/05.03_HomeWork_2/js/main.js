function fun(str = "") {
    str = str.toUpperCase().replace(/[^a-zA-Z]/g, '');
    let obj = [];

    while (str.length > 0) {
        let letter = str[0];
        let amount = countLetter(str, letter);

        obj.push(
            {
                letter: letter,
                amount: amount
            }
        )

        str = str.replaceAll(letter, "");
    }

    return obj;
}

function countLetter(str = "", letter = "") {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

alert(`Results of counter:

${JSON.stringify(fun(prompt("Type a string:")))}`)
