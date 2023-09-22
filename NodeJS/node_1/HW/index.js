const { askQuestion, readJsonFile, WriteJsonFile } = require("./Helpers.js");

(async function main() {
    try {
        const playerName = await askQuestion("What is your name?");
        console.log(`
Hello ${playerName}!
Welcome to the 'Trivia Game'.
        `);

        let goodAnswers = 0;

        const questions = await readJsonFile("questions.json");

        for (let i = 0;i < questions.length;i++) {
            try {
                const question = questions[i];
                const userAnswer = await askQuestion(`
Question number ${i + 1}:
${question.question}
    1) ${question.answers[0]}
    2) ${question.answers[1]}
    3) ${question.answers[2]}
    4) ${question.answers[3]}
            
Type the correct answer number...
            
            `, 10000);

                if (question.correctAnswer === question.answers[userAnswer - 1]) {
                    goodAnswers++;
                }
            } catch (error) {
                console.log(error);
            }
        };

        console.log(`
        GAME OVER!
        
        You have answered correctly on ${goodAnswers} out of 10 questions..
        `);

        const scores = await readJsonFile("scores.json");
        scores.push({
            name: playerName,
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }),
            goodAnswers: `${goodAnswers}/10`
        });

        await WriteJsonFile("scores.json", scores);

    } catch (error) {
        console.log(error);
    }
})();