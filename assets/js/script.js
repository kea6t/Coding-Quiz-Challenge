// Global variables
var score = 0;
var currIndex = 0;
var penaltyTime = 15;
var totalTime = 75;
var timerEl = document.getElementById("time")

var buttonEl = {
  btnStartEl: document.querySelector("#startQuiz"),
  btnChoicesEl: document.querySelector("#answer-list"),
  btnSubmitEl: document.querySelector("#submit-quiz"),
  btnBackEl: document.querySelector("#return-back"),
  btnClearEl: document.querySelector("#clear-score")
};




var pageContentEl = document.querySelector("#page-content");

// create array to hold tasks for saving
var tasks = [];



var startQuiz = function() {
  timerEl.textContent = totalTime;
  counter = setInterval(timer, 1000);

}

var timer = function() {
  if (totalTime <= 0) {
    clearTimer();
  } else {
    totalTime--;
  }
}


// Create a new task
btnStartEl.addEventListener("click", startQuiz);