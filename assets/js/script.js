const startButton = document.getElementById('start-btn')
const questionContainerElements = document.getElementById('question-container')
const welcomePageElements = document.getElementById('welcome-page')

startButton.addEventListener('click', startGame)

function startGame(){
console.log("started")
startButton.classList.add('hide')
welcomePageElements.classList.add('hide')
questionContainerElements.classList.remove('hide')
}



function setNextQuestion(){

}

function selectAnswer(){

}
