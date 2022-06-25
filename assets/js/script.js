// Global variables
var score = 0;
var currIndex = 0;
var penaltyTime = 10;
var timeLeft = 75;
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question-title");
var displayAnswers = document.getElementById("answer-list")
var questTitle = document.getElementById(".quest-title");


var buttonEl = {
  startEl: document.querySelector("#start-quiz"),
  choicesEl: document.querySelector("#answer-list"),
  submitEl: document.querySelector("#submit-quiz"),
  backEl: document.querySelector("#return-back"),
  clearEl: document.querySelector("#clear-score")
};

// quiz questions with the answer set and passing the value in array
var quizQuestions = [
  {
    question: "Commonly used data types DO NOT include: ",
    answers: {
      1: "Strings",
      2: "Booleans",
      3: "Alerts",
      4: "Numbers"
    },
    correctAnswer: '3'
  },

  {
    question: "The condition in an if / else statement is enclosed with _____________. ",
    answer: {
      1: "Quotes",
      2: "Curly brackets",
      3: "Parenthesis",
      4: "Square brackets"
    },
    correctAnswer: '3' 
  },

  {
    question: "Arrays in Javascript can be used to store ________________. ",
    answer: {
      1: "Numbers and Strings", 
      2: "Other arrays",
      3: "Booleans",
      4: "All of the above"
    },
    correctAnswer: '4'

  },

  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answer: {
      1: "JavaScript",
      2: "Terminal / bash",
      3: "For loops",
      4: "console.log"
    },
    correctAnswer: '4'
  }
];


var pageContentEl = document.querySelector("#page-content");



// Timer that counts down from 75
var countdown = function() {
  var timeInterval = setInterval(function () {
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }else {
      timerEl.innerHTML = timeLeft;
      timeLeft--;
    }
  }, 1000);
}


var displayQuiz = function() {
  // get the quiz
  var quizSection = document.getElementById("quiz-section");
  // get the value of the quiz display property
  var displaySetting = quizSection.style.display;
  // now toggle the quiz when the button is clicked, depending on current state
  if (displaySetting == "none") {
    // quiz is not visible then show it
    quizSection.style.display = "block";
  }else {
    // quiz is visible then hide it
    quizSection.style.display = "none";
  }
  console.log(displayQuiz);
}



// Create a new task
buttonEl.startEl.addEventListener("click", countdown);