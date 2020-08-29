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
const endGameElements = document.getElementById('end-page')
const scoreElement = document.getElementById('score')
const displayEl = document.getElementById('display')
const displayEl2 = document.getElementById('display2')
const submitButton = document.getElementById('submit-btn')
let initialsEl = document.getElementById('initials')

let questionCounter = 0;
let timeLeft = questions.length * 15;     
                                              

const answer1 = document.getElementById("btn1");
const answer2 = document.getElementById("btn2");
const answer3 = document.getElementById("btn3");
const answer4 = document.getElementById("btn4");

// let shuffledQuestions, currentQuestionIndex

// Timer countdown from 75 seconds
function countDown() {
                            
        if(timeLeft > 0){
            timerEl.textContent = "Timer:  " + timeLeft;
            timeLeft--
        }
        else {
            timerEl.textContent = "Timer:  " + timeLeft; 
            endGame();
        }
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
    displayEl.classList.remove('hide') 
    displayEl2.classList.remove('hide')
    
    if (currentAnswer === correctAnswer) {
        displayEl2.classList.add('hide')
        displayEl.textContent = "-----------Correct!-----------"
    } else {
        displayEl.classList.add('hide')
        displayEl2.textContent = "-----------Wrong!-----------"
        timeLeft -= 15;
    }
    
    questionCounter++;
    if(questionCounter === questions.length){
        endGame();
    } else {
    createQuestionElement();
}
}

var startGame = function(){
    timeInterval = setInterval(countDown, 1000);
    startButton.classList.add('hide')
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    // currentQuestionIndex = 0
    welcomePageElements.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    countDown();
    // setNextQuestion()
    createQuestionElement();
    }

var endGame = function(){
    clearInterval(timeInterval);
    questionContainerElement.classList.add('hide')
       endGameElements.classList.remove('hide')
       scoreElement.textContent = "Your final score is " + timeLeft;
       timerEl.classList.add('hide')
       timerInterval = setInterval(countDown, 1000);

       setTimeout(function() {
           displayEl.setAttribute("class", "hide");
       }, 2000);
       setTimeout(function() {
           displayEl2.setAttribute("class", "hide");
       }, 2000);
   
  }

  function saveScore(){

    var ID = initialsEl.value.trim()

    if (ID !== "") {
        var highScores =
        JSON.parse(window.localStorage.getItem("newScores")) || [];

        var newTime = {
            score: timeLeft,
            intials: ID,
        };

    highScores.push(newTime);
    localStorage.setItem("newScores", JSON.stringify(highScores));
}

printHighScores()
  }

function printHighScores() {
    scoreElement.setAttribute("class", "hide")
    endGameElements.setAttribute("class", "hide")
        // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("newScores")) || [];

    // Uses a sort function to place higher scores on top by comparing each score before being plugged into the forEach function
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score) {
        // Will make each indiviual input for scores be placed in as initials and scores
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " " + score.score;

        // with plug in the list elements into the ordered list element in html via newScores id
        var olEl = document.getElementById("newScores");
        olEl.appendChild(liTag);
    });
}

  

startButton.addEventListener('click', startGame)
answer1.addEventListener("click", checkAnswer)
answer2.addEventListener("click", checkAnswer)
answer3.addEventListener("click", checkAnswer)
answer4.addEventListener("click", checkAnswer)
submitButton.addEventListener('click', saveScore)
