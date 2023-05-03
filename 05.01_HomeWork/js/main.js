let students = [];

for (let i = 0; i < 5; i++) {
	students.push(prompt("What is the name of student number " + (i + 1) + "?"));
}

students = students.sort();

alert("The students list:\n" + students.join(", "));