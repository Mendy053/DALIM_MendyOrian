function startProgram(userStr) {
    printMassage(orderLetters(userStr));
}
function orderLetters(userStr) {
    const VOWELS_LIST = ["a", "e", "i", "o", "u"];
    const VowelsInString = [];
    const ConsonantsInString = [];
	userStr = userStr.replace(" ", "").toLowerCase();

    for (let i = 0; i < userStr.length; i++) {
        let = letter = userStr[i];

        if (VOWELS_LIST.includes(letter)) {
            VowelsInString.push(letter);
        } else {
            ConsonantsInString.push(letter);
        }
    }
    return [
        VowelsInString.sort().join(", "),
        ConsonantsInString.sort().join(", ")
    ];
}

function printMassage(array = []) {
    alert(`Your string contains the following vowels: ${array[0]}.
And the following consonant: ${array[1]}.`);
}

startProgram(prompt("Please enter your string:"));