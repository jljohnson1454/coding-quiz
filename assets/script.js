var timerEl = document.getElementById("countdowntimer");
var viewscoreEl = document.getElementById("viewscores");
var questionEl = document.getElementById("questionmain");
var choiceA = document.getElementById("btna");
var choiceB = document.getElementById("btnb");
var choiceC = document.getElementById("btnc");
var choiceD = document.getElementById("btnd");
var scoreEl = document.getElementById("score");

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

//First question should appear

        questionEl.innerHTML = questions[0].question;
        choiceA.innerHTML = questions[0].a;
        choiceB.innerHTML = questions[0].b;
        choiceC.innerHTML = questions[0].c;
        choiceD.innerHTML = questions[0].d;


document.getElementById("answer").onclick = function() {nextQuestion()};

}

function nextQuestion() {

    for(var i = 0; i <= questions.length; i++) {
        questionEl.innerHTML = questions[i].question;
        choiceA.innerHTML = questions[i].a;
        choiceB.innerHTML = questions[i].b;
        choiceC.innerHTML = questions[i].c;
        choiceD.innerHTML = questions[i].d;
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
document.getElementById("scoresubmit").className = "scoresubmissionAppear";

if (score > localStorage.getItem("highscores")) {
    localStorage.setItem("highscores", score);
  }

}

function highScore() {



}

document.getElementById("start").addEventListener("click", startGame);
document.getElementById("start").addEventListener("click", countdown);
