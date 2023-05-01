let num;

while (!`${num}`.toLowerCase().includes("stop")) {
    num = prompt("What is your WHOLE number?\n\ntype \"stop\" to stop the loop..");
    let isNotPalindrome = false;

    if (!isNaN(num)) {
        if (num % 1 === 0) {
            for (let i = 0; i < num.length / 2; i++) {
                if (num[i] !== num[num.length - i - 1]) {
                    isNotPalindrome = true;
                    break;
                }
            }

            if (isNotPalindrome) {
                alert(`${parseFloat(num)} is NOT a palindrome number!`)
            } else {
                alert(`${parseFloat(num)} is a palindrome number!`)
            }
        } else {
            alert("It's not a WHOLE number..")
        }
    } else if (!num.toLowerCase().includes("stop")) {
        alert("It's not a number..")
    }
}