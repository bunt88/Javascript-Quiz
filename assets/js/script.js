
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

var positiveResponse = document.getElementById("positiveresponse");
var negativeResponse = document.getElementById("negativeresponse");

var finish = document.getElementById("finish-screen");
var finalScore = document.getElementById("final-score");

var submit = document.getElementById("submit");

var highScores = document.getElementById("highscores")

var correctAnswer;

// NOTE: added a simple timer/countdown, questionRandom & questionNumber variable here to assign later in the beginQuiz() function

var countDown;
var questionRandom;
var questionNumber;

//TODO ---> Start by Creating an Array of Questions and Answers to work with
// NOTE : you can name the questions variable whatever you'd like, but here's an example below:
// NOTE : This is an array of objects. this will help us work in our functions when needing to reference different data points.

// NOTICE --> we refactored these commented functions into an objects Array (questionsArray)
// WHY >> Efficiency. By creating the questionsArray you've offloaded a lot of expense/work on a machine when it runs through the javascript


var questionArray = [
    {
        question: "The condition in an if / else statement is enclosed with ___________.",
        options: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "parentheses", correct: true },
            { text: "square brackets", correct: false },
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ___________.",
        options: [
            { text: "numbers and strings", correct: false },
            { text: "other arrays", correct: false },
            { text: "booleans", correct: false },
            { text: "all of the above", correct: true },
        ]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        options: [
            { text: "commas", correct: false },
            { text: "curly brackets", correct: false },
            { text: "quotes", correct: true },
            { text: "parentheses", correct: false },
        ]
    }
]

//TODO --> beginquiz - in this function:
// -> start timer,
// -> render and randomize questions array,
// -> select an answer,
// -> go to next question

function beginQuiz() {
    // hide start screen and start timer -> using the countDown variable created prior (line 31)

    // TODO -> you can now assign your countDown variable and create a timer using the setInterval() method
    // TODO --> Future ToDo -> create a function for clockTick();

    countDown = setInterval(clocktick, 1000);
    // timer.textContent = time;

        //var timerId = setInterval(clockTick, 1000);
    //  NOTE --> your original code was extremely close you could make this work how you have it,
    //      you are on the perfect track. the best part about coding is theres always more than way to do something.


     //TODO --> use questionRandom variable to randomize/sort your questionArray (hint: use .sort() and Math.random() methods)

    questionRandom = questionArray.sort(() => Math.random() > .5 ? 1 : -1);

       // NOTE --> within Math.random() is a ternary operator. Basically shorthand for conditional statements like 'if' and 'case' blocks
    //example syntax:  condition ? exprIfTrue : exprIfFalse
    // Here's a link to a good source on ternary operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

    //TODO -> use questionNumber variable to set current question number

        // timer.textContent = time;
        
    questionNumber = 0;

    //NOTE: This is great! you are hiding the start element by setting it's style visibility attribute to hidden.

    start.setAttribute("style", "visibility:hidden");
    questionBoxEl.setAttribute("style", "visibility:visible");
    // var timerId = setInterval(clockTick, 1000);

    questionOne();
}

//TODO -> refactor 'questionOne()' function for questionsArray.
//        NOTE : consider renaming this function for clarity (i.e. nextQuestion)

function nextQuestion() {
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

function highScores() {
    highScores.setAttribute("style", "visibility:visible");
    questionBoxEl.setAttribute("style", "visibility:hidden")
}

// console.log(questionOne);
console.log(questionOne);
begin.onclick = beginQuiz;
highScores.onclick = highScores();