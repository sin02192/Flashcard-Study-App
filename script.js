const flashcards = [
    {
        question: "What is Java?",
        answer: "Java is a programming language."
    },
    {
        question: "What is HTML?",
        answer: "HTML is used to create the structure of web pages."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used to style web pages."
    }
];

let currentCard = 0;

function showAnswer() {
    document.getElementById("answer").innerText =
        flashcards[currentCard].answer;
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;

    document.getElementById("question").innerText =
        flashcards[currentCard].question;

    document.getElementById("answer").innerText = "";
}function previousCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;

    document.getElementById("question").innerText =
        flashcards[currentCard].question;

    document.getElementById("answer").innerText = "";
}function previousCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;

    document.getElementById("question").innerText =
        flashcards[currentCard].question;

    document.getElementById("answer").innerText = "";
}
function previousCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;

    document.getElementById("question").innerText =
        flashcards[currentCard].question;

    document.getElementById("answer").innerText = "";
}
// Flashcard navigation feature
