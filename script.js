let num1, num2, correctAnswer;
let score = 0;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;
    correctAnswer = num1 + num2;
    document.getElementById("question").innerText = `${num1} + ${num2} = ?`;
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    let resultElement = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        score += 10;
        document.getElementById("score").innerText = score;
        resultElement.innerText = "ត្រឹមត្រូវ! +10 ពិន្ទុ 👏";
        resultElement.style.color = "#27ae60";
        setTimeout(() => {
            resultElement.innerText = "";
            generateQuestion();
        }, 1200);
    } else {
        resultElement.innerText = "ខុសហើយ! សាកល្បងម្តងទៀត 💪";
        resultElement.style.color = "#e74c3c";
    }
}

generateQuestion();

