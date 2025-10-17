const quizData = [
  {
    question: "who is owner of rnw",
    options: ["heet", "hitesh", "hasmukh", "parth"],
    correct: 1,
  },
  {
    question: "who is the best cricket captian",
    options: ["heet", "hitesh", "hasmukh", "parth"],
    correct: 1,
  },
];
let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionEl = document.querySelectorAll(".option-btn");
const nextbtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");
function loadQuestions() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  optionEl.forEach((btn, index) => {
    btn.textContent = currentQuestion.options[index];
    btn.className = "option-btn";
    btn.disabled = false;
    btn.onclick = () => checkAnswer(btn, index);
  });
  nextbtn.style.display = "none";
}
function checkAnswer(selectedBtn, selectedIndex) {
  const correctIndex = quizData[currentQuestionIndex].correct;
  if (selectedIndex === correctIndex) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
    optionEl[correctIndex].classList.add("correct");
  }
  optionEl.forEach((btn) => (btn.disabled = true));
  nextbtn.style.display = "inline-block";
}
nextbtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestions();
  } else {
    showScore();
  }
});
function showScore() {
  quizContainer.innerHTML = `<h1> Quiz Completed!</h1>
            <h2>Your Score: ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Restart Quiz</button>`;
}
loadQuestions();
