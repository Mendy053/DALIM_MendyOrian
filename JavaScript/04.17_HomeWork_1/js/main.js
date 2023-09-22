let income;
let tax = 0;

while (!income || typeof income !== "number") {
    income = parseFloat(prompt("Enter your income for this month:"));
}

if (income <= 25000) {
    tax = income * 0.1;
} else if (income > 25000 && income <= 50000) {
    tax = 2500 + ((income - 25000) * 0.2);
} else if (income > 50000 && income <= 100000) {
    tax = 7500 + ((income - 50000) * 0.3);
} else if (income > 100000 && income <= 150000) {
    tax = 19500 + ((income - 100000) * 0.4);
} else {
    tax = 49500 + ((income - 150000) * 0.5);
}

alert("You must pay taxes in the amount of: " + tax);