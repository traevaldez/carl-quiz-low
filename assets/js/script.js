// 1. Quiz will be over JavaScript Fundamentals
// 2. Quiz will be timed
// 3. Scores will be stored
// 4. Needs a start button
// 5. When start button is clicked, a timer starts and a question is shown
// 6. When a question is answered, another question is shown
// 7. When a question is answered incorrectly, time is subtracted from the clock
// 8. When all questions are answered or the timer reaches 0, the game is over
// 9. When the game is over, you can save your initials and score

var quizStatus = true;
var questionNum = 0;
var answerNum = 0;
var score = 0;
var highScore = 100;
var finalAnswer = 0;
var timeCheck = 1;
var timeLeft = 60;
var htmlTimeLeft = document.getElementById("time-left");

// buttons
// start button
var startBtnEl = document.getElementById("start-btn");
// answer buttons
var answerABtnEl = document.getElementById("answer-a");
var answerBBtnEl = document.getElementById("answer-b");
var answerCBtnEl = document.getElementById("answer-c");
var answerDBtnEl = document.getElementById("answer-d");
// submit score button & enter initials
var submitBtnEl = document.getElementById("submit-btn");
var initialsEl = document.getElementById("initials");
var initialsTextEl = document.getElementById("initials-text");
// check high score
var highScoresBtnEl = document.getElementsByClassName("high-scores");

// main/questions area
var mainEl = document.getElementById("main");
var questionsEl = document.getElementsById("questions");
var answerResultEl = document.getElementById("answer-result");
var finalScoreEL = document.getElementById("final-score");

// hide elements
answerABtnEl.style.display = "none";
answerBBtnEl.style.display = "none";
answerCBtnEl.style.display = "none";
answerDBtnEl.style.display = "none";
submitBtnEl.style.display = "none";
initialsTextEl.style.display = "none";
answerResultEl.style.display = "nonw";

// questions
var questionsObj = {
    0: "Commonly used data types DO NOT include:",
    1: "The condition in an if/else statment is enclosed within ___:. ",
    2: "Arrays can be used to store the following:",
    3: "A very useful tool to debug arrays is:",
    4: "Strings must be enclosed with:"
};

// answers
var answersObj = {
    0: {
        0: "a. strings",
        1: "b. booleans",
        2: "c. alerts",
        3: "d. numbers"
    },
    1: {
        0: "a. quotes",
        1: "b. curly brackets",
        2: "c. square brackets",
        3: "d. forward slash"
    },
    2: {
        0: "a. strings",
        1: "b. other arrays",
        2: "c. booleans",
        3: "d. all of the above"
    },
    3: {
        0: "a. JavaScript",
        1: "b. 'for' loops",
        2: "c. Terminal/bash",
        3: "d. Console.log"
    },
    4: {
        0: "a. commas",
        1: "b. curly brackets",
        2: "c. parenthesis",
        3: "d. quotes"
    }
};

// timer
htmlTimeLeft.textContent = timeLeft;


