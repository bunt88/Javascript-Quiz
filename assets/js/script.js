
var start = document.getElementById("start");
var begin = document.getElementById("begin");
var timer = document.getElementById("time")
// var time = questions.length * 10;
var questionBoxEl = document.getElementById("question-box");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer-1");
var answer2 = document.getElementById("answer-2");
var answer3 = document.getElementById("answer-3");
var answer4 = document.getElementById("answer-4");
var next = document.getElementById("next");
var positiveresponse = document.getElementById("positiveresponse");
var negativeresponse = document.getElementById("negativeresponse");
var finsih = document.getElementById("finish-screen");
var finalscore = document.getElementById("final-score");
var submit = document.getElementById("submit");
var highScores = document.getElementById("highscores")
var correctanswer


function beginQuiz() {
    // hide start screen and start timer

    start.setAttribute("style", "visibility:hidden");
    questionBoxEl.setAttribute("style", "visibility:visible")
    // var timerId = setInterval(clockTick, 1000);
    // timer.textContent = time;

    questionOne();
}

function questionOne() {
    if (answer3.onclick = correctAnswer()) {
        questionTwo();
    } else if (answer1.onclick = wrongAnswer()) {

    } else if (answer2.onclick = wrongAnswer()) {

    } else (answer4.onclick = wrongAnswer())
}

function correctAnswer() {
    // correctanswer = true;
    positiveresponse.setAttribute("style", "visibility:visible")
    next.setAttribute("style", "visibility:visible")
}

function wrongAnswer() {
    // correctanswer = false;
    negativeresponse.setAttribute("style", "visibility:visible")
    next.setAttribute("style", "visibility:visible")
}



function questionTwo() {


}

function getQuestionTwo() {
    question.setAttribute("question", "The condition in an if / else statement is enclosed with______.");
    answer1.setAttribute("answer-1", "quotes");
    answer2.setAttribute("answer-2", "curly brackets");
    answer3.setAttribute("answer-3", "parentheses");
    answer4.setAttribute("answer-4", "square brackets");

    if (answer3.onclick = correctAnswer()) {
        questionThree();
    } else if (answer1.onclick = wrongAnswer()) {

    } else if (answer2.onclick = wrongAnswer()) {

    } else (answer4.onclick = wrongAnswer())

}

function getQuestionThree() {
    question.setAttribute("question", "Arrays in JavaScript can be used to store _______.");
    answer1.setAttribute("answer-1", "numbers and strings");
    answer2.setAttribute("answer-2", "other arrays");
    answer3.setAttribute("answer-3", "booleans");
    answer4.setAttribute("answer-4", "all of the above");

    if (answer4.onclick = correctAnswer()) {
        questionFour();
    } else if (answer1.onclick = wrongAnswer()) {

    } else if (answer2.onclick = wrongAnswer()) {

    } else (answer3.onclick = wrongAnswer())

}

function getQuestionFour() {
    question.setAttribute("question", "String values must be enclosed within _____ when being assigned to variables.");
    answer1.setAttribute("answer-1", "commas");
    answer2.setAttribute("answer-2", "curly brackets");
    answer3.setAttribute("answer-3", "quotes");
    answer4.setAttribute("answer-4", "parentheses");

    if (answer3.onclick = correctAnswer()) {
        finishScreen();
    } else if (answer1.onclick = wrongAnswer()) {

    } else if (answer2.onclick = wrongAnswer()) {

    } else (answer4.onclick = wrongAnswer())

}

function highScores() {
    highScores.setAttribute("style", "visibility:visible");
    questionBoxEl.setAttribute("style", "visibility:hidden")
}


console.log(questionOne);
begin.onclick = beginQuiz;
highScores.onclick = highScores();