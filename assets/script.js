var timerEl = document.getElementById("countdowntimer");
var viewscoreEl = document.getElementById("viewscores");
var questionEl = document.getElementById("questionmain");
var choiceA = document.getElementById("btna");
var choiceB = document.getElementById("btnb");
var choiceC = document.getElementById("btnc");
var choiceD = document.getElementById("btnd");
var scoreEl = document.getElementById("score");
var initialsEl = document.getElementById("initials");

var questions = [
    { question: "What is HTML?", a: "Document Object Model", b: "Hyper Text Markup Language", c: "A video game", d: "Phone App", answer: "Hyper Text Markup Language" },
    { question: "What is CSS?", a: "Cascading Style Sheet", b: "HTML", c: "Computer Style System", d: "Javascript", answer: "Cascading Style Sheet" },
    { question: "What does Javascript add to a webpage?", a: "Pictures", b: "Nothing", c: "Styles", d: "Interactivity", answer: "Interactivity" },
    { question: "Why use JQUERY?", a: "To order sandwiches", b: "To consolidate code", c: "JQUERY isn't real", d: "To order a PS5", answer: "To consolidate code" },
    { question: "A network to deliver content to users in different geological locations is called _________", a: "Bootstrap", b: "CNN", c: "Content Delivery Network", d: "Git", answer: "Content Delivery Network" }
]
var i = 0;
var userinput = "";
var timeLeft = 30;
var score = 0;

function startGame() {

    document.getElementById("titlepage").className = "startHide";
    document.getElementById("right").className = "startHide";
    document.getElementById("wrong").className = "startHide";
    document.getElementById("question").className = "questionAppear";

    firstQuestion();
}

function firstQuestion() {

    questionEl.innerHTML = questions[0].question;
    choiceA.innerHTML = questions[0].a;
    choiceB.innerHTML = questions[0].b;
    choiceC.innerHTML = questions[0].c;
    choiceD.innerHTML = questions[0].d;


    document.getElementById("btna").onclick = function () {
        console.log(this);
        var button = this;
        answerVerification(button)
    };
    document.getElementById("btnb").onclick = function () { answerVerification(this) };
    document.getElementById("btnc").onclick = function () { answerVerification(this) };
    document.getElementById("btnd").onclick = function () { answerVerification(this) };

}

function answerVerification(button) {
    console.log(button);
    if (button.innerHTML === questions[i].answer) {
        score += 20;
        console.log(score);
        console.log(button);
        console.log(button.innerHTML);
        document.getElementById("right").className = "rightanswer";
        document.getElementById("wrong").className = "startHide";
        document.getElementById("rightsound").play();
    } else {
        score -= 20;
        timeLeft -= 5;
        console.log(score);
        document.getElementById("right").className = "startHide";
        document.getElementById("wrong").className = "wronganswer";
        document.getElementById("wrongsound").play();
    }
    nextQuestion();
};

function nextQuestion() {

    i++;

    if (i < questions.length) {
        questionEl.innerHTML = questions[i].question;
        choiceA.innerHTML = questions[i].a;
        choiceB.innerHTML = questions[i].b;
        choiceC.innerHTML = questions[i].c;
        choiceD.innerHTML = questions[i].d;

    } else {
        document.getElementById("question").className = "startHide";
        saveScore();
    }


}

//Countdown will start at 30 seconds and each question will add or remove 20 seconds. When timer hits 0 goes to game over page
function countdown() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;

        } else if (timeLeft === 1) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;

        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            saveScore();
        }
    }, 1000);
}

function saveScore() {
    //use local storage to save
    document.getElementById("scoresubmit").className = "scoresubmissionAppear";
    document.getElementById("question").className = "startHide";
    document.getElementById("countdown").className = "startHide";

    var span = document.getElementById("scoredisplay");
    span.innerHTML = " " + score;

    // if (score > localStorage.getItem("highscores")) {
    //     localStorage.setItem("highscores", score);

    highScore();
}


function highScore() {


    localStorage.setItem("", score);

    document.getElementById("initSubmit").addEventListener("click", function () {
        var initials = initialsEl.value.trim();
        if (initials === ("")) {
            prompt("Please enter your initials");
        } else {

            var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
            var newScore = {
                s: score,
                i: initials
            };
            highscores.push(newScore);
            highscores = JSON.stringify(highscores);
            localStorage.setItem("highscores", highscores);
            window.location.href = "./assets/highscores.html";
        }
        // first capture the score from initials
        // capture initials and score
        // store it to the high scores page
    });
}
document.getElementById("start").addEventListener("click", startGame);
document.getElementById("start").addEventListener("click", countdown);
