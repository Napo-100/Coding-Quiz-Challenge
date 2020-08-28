//Questions

const questions = [{
    question: "Which of the following is not a commonly used data type?",
    answers: [ "Alerts", "Strings", "Booleans", "Numbers"],
    correctAnswer: "Booleans"

}, {
    question: "What can arrays in JavaScript can be used to store?",
    answers: [ "Booleans",  "Numbers and strings", "Other arrays", "All of the above"], 
    correctAnswer: "All of the above"
    
}, {
    question: "How do you enclose the condition of an ' if ' statement?",
    answers: ["Quotes",  "Square brackets",  "Curly brackets",  "Any of the above"],
    correctAnswer: "Curly brackets" 
    
}, {
    question: "What is a very useful tool for debugging and printing content to the debugger?",
    answers: ["Console.log", "For loops",  "CSS",  "Terminal/Bash"], 
    correctAnswer: "Console.log"

}, {
    question: "What does DOM stand for?",
    answers: ["Do Over Mulligan", "Document Object Model", "Data Object Model",  "Document Option Model"], 
    correctAnswer: "Document Object Model"
}];

const timerEl = document.getElementById("timer");
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const welcomePageElements = document.getElementById('welcome-page')
let questionCounter = 0;

const answer1 = document.getElementById("btn1");
const answer2 = document.getElementById("btn2");
const answer3 = document.getElementById("btn3");
const answer4 = document.getElementById("btn4");

// let shuffledQuestions, currentQuestionIndex

// Timer countdown from 75 seconds
function countDown() {
    var timeLeft = 75;                         

    var timeInterval = setInterval(function(){

        if(timeLeft > 0){
            timerEl.textContent = "Timer:  " + timeLeft;
            timeLeft--
        }
        else {
            timerEl.textContent = "Timer:  " + timeLeft;
            clearInterval(timeInterval);
        }

    }, 1000);
        
}


var createQuestionElement = function(index) {

    var currentQuestion = questions[questionCounter]
    question.textContent = currentQuestion.question;

    answer1.textContent = currentQuestion.answers[0]
    answer2.textContent = currentQuestion.answers[1]
    answer3.textContent = currentQuestion.answers[2]
    answer4.textContent = currentQuestion.answers[3]
}

var checkAnswer = function(event) {
    var correctAnswer = questions[questionCounter].correctAnswer
    var currentAnswer = event.target.textContent    
    if (currentAnswer === correctAnswer) {
        alert("Correct!")
    } else {
        alert("False")
    }

    questionCounter++;
    createQuestionElement();
}


// function setNextQuestion(){
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//     questionElement.innerText =question.question
    
    
// }

//  function selectAnswer(){

// }

var startGame = function(){
    console.log("started")
    startButton.classList.add('hide')
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    // currentQuestionIndex = 0
    welcomePageElements.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    countDown();
    // setNextQuestion()
    createQuestionElement();
    }


startButton.addEventListener('click', startGame)
answer1.addEventListener("click", checkAnswer)
answer2.addEventListener("click", checkAnswer)
answer3.addEventListener("click", checkAnswer)
answer4.addEventListener("click", checkAnswer)