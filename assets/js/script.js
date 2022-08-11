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
var questionsEl = document.getElementById("questions");
var answerResultEl = document.getElementById("answer-result");
var finalScoreEL = document.getElementById("final-score");

// hide elements
// answer buttons
answerABtnEl.style.display = "none";
answerBBtnEl.style.display = "none";
answerCBtnEl.style.display = "none";
answerDBtnEl.style.display = "none";
// submit buttons
submitBtnEl.style.display = "none";
// initial text box
initialsEl.style.display = "none"
initialsTextEl.style.display = "none";
// answer results
answerResultEl.style.display = "none";

// questions
var questionsObj = {
    question: {
    // question 1
    0: "Commonly used data types DO NOT include:",
    // question 2
    1: "The condition in an if/else statment is enclosed within ___:. ",
    // question 3
    2: "Arrays can be used to store the following:",
    // question 4
    3: "A very useful tool to debug arrays is:",
    // question 5
    4: "Strings must be enclosed with:"
    }
};

// answers
var answersObj = {
    answers: {
    // question 1 answers
    0 : {
        0: "a. strings",
        1: "b. booleans",
        2: "c. alerts",
        3: "d. numbers"
    },
    // question 2 answers
    1 : {
        0: "a. quotes",
        1: "b. curly brackets",
        2: "c. square brackets",
        3: "d. forward slash"
    },
    // question 3 answers
    2 : {
        0: "a. strings",
        1: "b. other arrays",
        2: "c. booleans",
        3: "d. all of the above"
    },
    // question 4 answers
    3 : {
        0: "a. JavaScript",
        1: "b. 'for' loops",
        2: "c. Terminal/bash",
        3: "d. Console.log"
    },
    // question 5 answers
    4 : {
        0: "a. commas",
        1: "b. curly brackets",
        2: "c. parenthesis",
        3: "d. quotes"
    }
    }
};

// timer
htmlTimeLeft.textContent = timeLeft;

// view high score
/*highScoresBtnEl.addEventListener("click", function(){
    var highScores = "";
    var quizPlayers = "";
    var substringVal = "";

    for (var i = 0; i < localStorage.length; i++) {
        var checkPlayerScore = [];

        quizPlayers = localStorage.getItem(localStorage.key(i));
        substringVal = quizPlayers.substring(0, 4)
        if (substringTest == "quiz") {
            checkPlayerVal - quizPlayers.split(", ");
            var userName = checkPlayerVal;
            highScores += "User " + userName.substring(4) + " high score is: " + checkPlayerVal[1] + "/n";
        }

    }
    window.alert(highScores);
});*/

// submit score
submitBtnEl.addEventListener("click", function(){
    var quizLocalStorage = "quiz";
    var quizPlayerInfo = "";
    var value = [];

    quizUserInfo = quizLocalStorage = initialsTextEl.value
    value = [quizUserInfo,highScore]

    if (!localStorage.length){
        localStorage.setItem("test","test");
    }

    for (var i = 0; i < localStorage.length; i++){
        var checkPlayer = "";
        var checkPlayerVal = [];

        quizPlayerInfo = quizLocalStorage + initialsTextEl.value;

        checkPlayer = localStorage.getItem(quizPlayerInfo);

        if (checkPlayer == null) {
            localStorage.setItem(quizPlayerInfo, value);
            window.alert("Your score of " + highScore + "has been recoreded!")
            break;
        } else if (checkPlayer != null){
            checkPlayerVal = checkPlayer.split(", ");
        }
    }
});

answerABtnEl.addEventListener("mouseover", function(){
    answerResultEl.style.diplay = "none";
});

answerBBtnEl.addEventListener("mouseover", function(){
    answerResultEl.style.diplay = "none";
});

answerCBtnEl.addEventListener("mouseover", function(){
    answerResultEl.style.diplay = "none";
});

answerDBtnEl.addEventListener("mouseover", function(){
    answerResultEl.style.diplay = "none";
});

submitBtnEl.addEventListener("mouseover", function(){
    answerABtnEl.style.diplay = "none";
});

startBtnEl.addEventListener("mouseover", function(){
    startBtnEl.style.display = "none";
    questionsEl.style.display = "none";
    initialsEl.style.display = "none";
    score = 0;
    timeLeft = 60;
    htmlTimeLeft.textContent = timeLeft;
    finalAnswer = 0;
    timeCheck = 1;

    console.log(startBtnEl);

    var timeInterval = setInterval(function(){
        if (score === 1){
            highScore -= 10;
        }

        score = 0;

        if (timeLeft >=1 && finalAnswer !== 1) {
            questionsEl.textContent = questionsObj.question[questionNum];
            
            questionsEl.style.display = "";
            answerABtnEl.style.display = "";
            answerBBtnEl.style.display = "";
            answerCBtnEl.style.display = "";
            answerDBtnEl.style.display = "";

            answerABtnEl.textContent = answersObj.answers[answerNum][0];
            answerBBtnEl.textContent = answersObj.answers[answerNum][1];
            answerCBtnEl.textContent = answersObj.answers[answerNum][2];
            answerDBtnEl.textContent = answersObj.answers[answerNum][3];

            quizContainer.appendChild(questionsEl);
            quizContainer.appendChild(answerABtnEl);
            quizContainer.appendChild(finalScoreEL);
            timeLeft -= 1;
            htmlTimeLeft.textContent = timeLeft
        }
    })
});

