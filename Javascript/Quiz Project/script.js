const questions = [
  {
    question: "Who is the PM of India?",
    options: ["Modi", "Yogi", "Shah", "Pappu"],
    answer: 0,
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "2"],
    answer: 1,
  },
];

let index = 0;
let score = 0;
let timeleft = 30;
let timer;

// ✅ store selected answers
const userAnswers = new Array(questions.length).fill(null);

const questionE1 = document.getElementById("question");
const optionE1 = document.getElementById("options");
const nextbtn = document.getElementById("next-btn");
const prevbtn = document.getElementById("prev-btn");
const resultE1 = document.getElementById("result");
const timeE1 = document.getElementById("time");
const quizContainer = document.getElementById("quizContainer");

function startTimer() {
  timer = setInterval(() => {
    timeleft--;
    timeE1.innerText = timeleft;
    if (timeleft <= 0) endQuiz();
  }, 1000);
}

function showQuestion() {
  let q = questions[index];
  questionE1.innerText = q.question;
  optionE1.innerHTML = "";

  q.options.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = opt;

    if (userAnswers[index] === i) {
      btn.classList.add("selected");
    }

    btn.onclick = () => {
      userAnswers[index] = i;
      document
        .querySelectorAll(".option")
        .forEach((o) => o.classList.remove("selected"));
      btn.classList.add("selected");
    };

    optionE1.appendChild(btn);
  });

  prevbtn.disabled = index === 0;
  nextbtn.innerText = index === questions.length - 1 ? "Finish" : "Next";
}

nextbtn.onclick = () => {
  if (userAnswers[index] === questions[index].answer) score++;

  if (index < questions.length - 1) {
    index++;
    showQuestion();
  } else {
    endQuiz();
  }
};

prevbtn.onclick = () => {
  if (index > 0) {
    index--;
    showQuestion();
  }
};

function endQuiz() {
  clearInterval(timer);
  quizContainer.style.display = "none";
  resultE1.style.display = "block";
  resultE1.innerHTML = `Your Score: ${score} / ${questions.length}`;
}

showQuestion();
startTimer();
