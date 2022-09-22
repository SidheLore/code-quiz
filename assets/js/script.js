var score = 0;
var seconds = 60;
var incorrect = 5;
var timerE1 = document.getElementById("timer");
var screenContainerEl = document.querySelector("#");
var viewScoresButtonEl = document.querySelector("#");

var questions = [
    {
        question: "Which tag is used in HTML to insert a line-break?",
        choices: ["<a>", "<b>", "<br>", "<li>"],
        correct: "<br>"
    },
    {
        question: "Which property is used in CSS to change an element's background color?",
        choices: ["bg", "background-color", "bgcolor", "None of the above"],
        correct: "background-color"   
    },
    {
        question: "Which property is used in CSS to specify an element's transparency?",
        choices: ["filter", "overlay", "visibility", "opacity"],
        correct: "opacity"
    },
    {
        question: "In Javascript, 'function' and 'var' are ____?",
        choices: ["declaration statements", "data types", "prototypes", "keywords"],
        correct: "declaration statements"
    },
    {
        question: "Which of the following choices is NOT considered an error in Javascript?",
        choices: ["missing bracket", "division by 0", "syntax error", "missing semicolon"],
        correct: "division by 0"
    }
];