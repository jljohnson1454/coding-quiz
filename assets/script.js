var timerEl = document.getElementById("countdowntimer");
var viewscoreEl = document.getElementById("viewscores");
var questionEl = document.getElementById("questionmain");
var choiceA = document.getElementById("btna");
var choiceB = document.getElementById("btnb");
var choiceC = document.getElementById("btnc");
var choiceD = document.getElementById("btnd");
var scoreEl = document.getElementById("score");

var questions = [
    {question: "What is HTML?", a:"Document Object Model", b:"Hyper Text Markup Language", c:"dog", d:"skeleton", answer: "Hyper Text Markup Language"},
    {question: "What is CSS?", a:"Cascading Style Sheet", b:"HTML", c: "c", d:"blarh", answer: "Cascading Style Sheet"},
    {question: "What is Javascript?", a: "language", b: "Dark Souls", c:"Steve", d:"Tony", answer: "Dark Souls"},
    {question: "What is JQUERY?", a:"green", b:"Thanos", c:"GTA", d: "Library", answer: "Library"},
    {question: "What is Bootstrap?", a:"Pirate", b:"Bill", c:"Third Party API", d:"Belt", answer: "Third Party API"}
]
var i = 0;
var userinput = "";
var timeLeft = 30;
var score = 10;

function startGame() {
    
document.getElementById("titlepage").className = "startHide";
document.getElementById("right").className = "startHide";
document.getElementById("wrong").className = "startHide";
document.getElementById("question").className = "questionAppear";

firstQuestion();
//First question should appear
}

function firstQuestion() {

        questionEl.innerHTML = questions[0].question;
        choiceA.innerHTML = questions[0].a;
        choiceB.innerHTML = questions[0].b;
        choiceC.innerHTML = questions[0].c;
        choiceD.innerHTML = questions[0].d;
    

        document.getElementById("btna").onclick = function() {answerVerification()};
        document.getElementById("btnb").onclick = function() {answerVerification()};
        document.getElementById("btnc").onclick = function() {answerVerification()};
        document.getElementById("btnd").onclick = function() {answerVerification()};

}

function answerVerification() {
    
    if (choiceB = questions[i].answer) {
        console.log(score);
        
        console.log(score);
        nextQuestion();} else {
            score--;
            timeLeft -= 5;
            
        }


    
};
    
    // } else if (choiceA.innerHTML === questions[1].answer){
    //     console.log(score);
    //     score++;
    //     console.log(score);
    //     nextQuestion();
    // } else if (choiceA.innerHTML === questions[2].answer) {
    //     console.log(score);
    //     score++;
    //     console.log(score);
    //     nextQuestion();
    // }

function nextQuestion() {

    // for(var i=0; i<=questions.length; i++) 
        i++;

        if(i < questions.length) {
        questionEl.innerHTML = questions[i].question;
        choiceA.innerHTML = questions[i].a;
        choiceB.innerHTML = questions[i].b;
        choiceC.innerHTML = questions[i].c;
        choiceD.innerHTML = questions[i].d;
            
         } else {
             document.getElementById("question").className = "questionbox";
             saveScore();
         }


}

function countdown() {



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
            saveScore();
          }
    }, 1000);


}

function saveScore() {
//use local storage to save
document.getElementById("scoresubmit").className = "scoresubmissionAppear";
document.getElementById("question").className = "questionDisappear";

    localStorage.setItem("highscores", score);

// if (score > localStorage.getItem("highscores")) {
//     localStorage.setItem("highscores", score);

highScore();
}


function highScore() {
    
    var highscore = localStorage.getItem ("highscores");
    var span = document.getElementById("scoredisplay");

    span.innerHTML = " " + highscore;

}

document.getElementById("start").addEventListener("click", startGame);
document.getElementById("start").addEventListener("click", countdown);
