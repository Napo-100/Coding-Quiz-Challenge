const startButton = document.getElementById('start-btn')
const questionContainerElements = document.getElementById
('question-container')

startButton.addEventListener('click', startGame)

function startGame(){
console.log("started")
startButton.classList.add('hide')
removeElement();
}

function removeElement() {
    document.getElementById("welcome-page").style.display = "none";
  }

function setNextQuestion(){

}

function selectAnswer(){

}