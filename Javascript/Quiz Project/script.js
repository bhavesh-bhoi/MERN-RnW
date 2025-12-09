const questions = [
  {
    question: "Who is the PM of India?",
    options: ["Modi", "Yogi", "Shah", "Pappu"],
    answer: 0, // FIXED
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "2"],
    answer: 1, // FIXED
  },
];

let index = 0;
let score = 0;
let timeleft = 30;
let timer;

const questionE1 = document.getElementById("question");
const optionE1 = document.getElementById("options");
const nextbtn = document.getElementById("next-btn");
const resultE1 = document.getElementById("result");
const timeE1 = document.getElementById("time");
const quizContainer = document.getElementById("quizContainer");

function startTimer() {
  timer = setInterval(() => {
    timeleft--;
    timeE1.innerText = timeleft;

    if (timeleft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  let q = questions[index];
  questionE1.innerText = q.question;
  optionE1.innerHTML = "";

  q.options.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = opt;
    btn.onclick = () => selectOption(i);
    optionE1.appendChild(btn);
  });
}

function selectOption(i) {
  if (i === questions[index].answer) {
    score++;
  }
  index++;

  if (index < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

nextbtn.onclick = () => {
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
};

function endQuiz() {
  clearInterval(timer);
  quizContainer.style.display = "none";
  resultE1.style.display = "block";
  resultE1.innerHTML = `Your Score: <span>${score} / ${questions.length}</span>`;
}

// START GAME
showQuestion();
startTimer();
