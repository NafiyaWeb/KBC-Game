const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the currency of the United Kingdom?", answer: "Pound Sterling" },
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "What is the boiling point of water?", answer: "100" },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestionIndex].question;
        generateQRCode();
    } else {
        document.getElementById("question").innerText = "No more questions!";
        document.getElementById("qrcode").innerHTML = ""; // Clear QR code
    }
}

document.getElementById("submit-answer").addEventListener("click", function () {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("message").innerText = `Congratulations, ${userAnswer}! You got it right!`;
        document.getElementById("message").style.color = "green"; // Green for correct answer
        currentQuestionIndex++;
        setTimeout(() => {
            document.getElementById("message").innerText = "";
            loadQuestion();
        }, 2000);
    } else {
        document.getElementById("message").innerText = "Incorrect answer! Try again.";
        document.getElementById("message").style.color = "red"; // Red for Incorrect answer
        document.getElementById("answer").value = ""; // Clear input field
    }
});

// Load the first question when the page loads
window.onload = loadQuestion;
