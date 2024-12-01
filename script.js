let quiData = [
  {
    question: "Most popular programming language?",
    a: "C++",
    b: "Python",
    c: "JavaScript",
    answer: "c",
  },
  {
    question: "Which language is primarily used for web development?",
    a: "Ruby",
    b: "JavaScript",
    c: "C",
    answer: "b",
  },
  {
    question: "Which programming language is best for data science?",
    a: "Python",
    b: "Java",
    c: "PHP",
    answer: "a",
  },
  {
    question: "Which language is used for iOS app development?",
    a: "Swift",
    b: "Kotlin",
    c: "JavaScript",
    answer: "a",
  },
  {
    question: "Which of the following is not a programming language?",
    a: "HTML",
    b: "C#",
    c: "Ruby",
    answer: "a",
  },
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Computer Style Sheets",
    c: "Creative Style Sheets",
    answer: "a",
  },
  {
    question:
      "Which programming language is known as 'write once, run anywhere'?",
    a: "C",
    b: "Java",
    c: "Python",
    answer: "b",
  },
  {
    question: "Which language is mostly used for machine learning?",
    a: "Python",
    b: "C++",
    c: "JavaScript",
    answer: "a",
  },
  {
    question: "Which of these is a frontend framework?",
    a: "React",
    b: "Node.js",
    c: "Django",
    answer: "a",
  },
  {
    question: "What is the symbol for comments in JavaScript?",
    a: "//",
    b: "#",
    c: "<!-- -->",
    answer: "a",
  },
];

// Get element from DOM
let title = document.querySelector(".title");
let aLabel = document.querySelector(".aLabel");
let bLabel = document.querySelector(".bLabel");
let cLabel = document.querySelector(".cLabel");
let submitBtn = document.getElementById("submit");
let answers = document.querySelectorAll(".answer");



let currentQuestionIndex = 0; // Track the current question index
let score = 0; // Track the user's score

// Display the current question and answers
function displayQuestion() {
  const currentQuestion = quiData[currentQuestionIndex];
  title.innerHTML = currentQuestion.question;
  aLabel.innerHTML = currentQuestion.a;
  bLabel.innerHTML = currentQuestion.b;
  cLabel.innerHTML = currentQuestion.c;
}

// Check and handle the submitted answer
const submitAnswer = () => {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const userAnswer = getUserAnswer();
    if (userAnswer) {
      if (userAnswer === quiData[currentQuestionIndex].answer) {
        score++;
        alert("Correct!");
      } else {
        alert("Wrong answer!");
      }

      // Move to the next question or end the quiz
      currentQuestionIndex++;
      if (currentQuestionIndex < quiData.length) {
        resetAnswers();
        displayQuestion();
      } else {
        alert(`Quiz finished! Your score is ${score}/${quiData.length}`);
      }
    } else {
      alert("Please select an answer before submitting.");
    }
  });
};

// Get the user's selected answer
const getUserAnswer = () => {
  let userAnswer;
  answers.forEach((answer) => {
    if (answer.checked) {
      userAnswer = answer.id;
    }
  });
  return userAnswer;
};

// Reset selected answers
function resetAnswers() {
  answers.forEach((answer) => {
    answer.checked = false;
  });
}

// Initialize the quiz
displayQuestion();
submitAnswer();
