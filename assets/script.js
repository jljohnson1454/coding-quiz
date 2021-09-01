var timerEl = document.getElementById("countdowntimer");
var scoreEl = document.getElementById("viewscores");
var questionEl = document.getElementById("questionmain");

var questions = [
    {question: "What is HTML?", a:"Document Object Model", b:"Hyper Text Markup Language", c:"poop", d:"shoot", answer: "green"},
    {question: "What is CSS?", a:"Cascading Style Sheet", b:"HTML", c: "c", d:"blarh", answer: "purple"},
    {question: "What is Javascript?", a: "Thanos", b: "bucky", c:"Steve", d:"Tony", answer: "black"},
    {question: "Which is JQUERY?", a:"green", b:"Javascript", c:"GTA", d: "I hate you", answer: "green"},
    {question: "What is Bootstrap?", a:"Pirate", b:"Bill", c:"Third Party API", d:"Belt", answer: "green"}
]

function startGame() {
document.getElementById("titlepage").className = "startHide";
document.getElementById("question").className = "questionAppear";

    for(var i = 0; i < questions.length; i++) {
        document.getElementById("questionmain").innerHTML = questions[i].question;
        document.getElementById("btna").innerHTML = questions[i].a;
        document.getElementById("btnb").innerHTML = questions[i].b;
        document.getElementById("btnc").innerHTML = questions[i].c;
        document.getElementById("btnd").innerHTML = questions[i].d;

        
         }

}

function countdown() {

var timeLeft = 30;

    var timeInterval = setInterval(function() {
        if (timeLeft>0) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;

        } else if (timeLeft === 1) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
            
          } else {
            timerEl.textContent = "";
            clearInterval (timeInterval);
          }
    }, 1000);


}

function saveScore() {
//use local storage to save

if (score > localStorage.getItem("highscores")) {
    localStorage.setItem("highscores", score);
  }

}

function highScore() {



}

document.getElementById("start").addEventListener("click", startGame);
document.getElementById("start").addEventListener("click", countdown);
