// Var Soup
var playerScores;
var gameState = "Super JSquiz Bros"
var smallScreen = document.getElementById('lScreen');
var mainScreen = document.getElementById('mScreen');
var startBtn = document.getElementById('start');
var hsBtn = document.getElementById('hs');
var homeBtn = document.getElementById('bee');
var an1 = document.getElementById('a1');
var an2 = document.getElementById('a2');
var an3 = document.getElementById('a3');
var an4 = document.getElementById('a4');
var high1 = document.getElementById('hs1');
var high2 = document.getElementById('hs2');
var high3 = document.getElementById('hs3');
var high4 = document.getElementById('hs4');
var high5 = document.getElementById('hs5');
var high6 = document.getElementById('hs6');
var high7 = document.getElementById('hs7');
var high8 = document.getElementById('hs8');
var high9 = document.getElementById('hs9');
var high10 = document.getElementById('hs10');
var time = document.getElementById('timer');
var tScore
var sScreen
var hScreen
var gScreen
var tLeft = 45;

function setTimer() {
    var timerInterval = setInterval(function() {
      tLeft--;
      time.textContent = tLeft;
      if(tLeft === 0) {
        clearInterval(timerInterval);
        saveHs;
      }
  
    }, 1000);
  }

// Basic Nav interaction
startBtn.addEventListener("click", function () { { window.location.replace("./gameScreen.html"); } });
hsBtn.addEventListener("click", function () { { window.location.replace("./highScores.html"); } });
homeBtn.addEventListener("click", function () { { window.location.replace("./index.html"); } });
class Question {
    constructor(question, ans1, ans2, ans3, ans4) {
        this.question = question;
        this.ans1 = ans1;
        this.ans2 = ans2;
        this.ans3 = ans3;
        this.ans4 = ans4;
    }
}
// Here's where we hold our questions
const quest1 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A programming language`)
const quest2 = new Question(`What is an object?`, `Food`, `Everything is an object`, `Tea`, `A language`)
const quest3 = new Question(`Is programming hard?`, `Yes`, `Very`, `Absolutely`, `Certainly`)
const quest4 = new Question(`Who made this test?`, `Dave`, `Bee`, `Tommy`, `Saul`)
const quest5 = new Question(`Best quotation?`, `Backticks`, `Single-quotes`, `Quotes`, `Burps`)
const quest6 = new Question(`What is the air-speed-velocity of an unlayden swallow?`, `How am I supposed to know that`, `4`, `312cm/s`, `African or europian?`)
const quest7 = new Question(`Who's gonna get a 100 on this assigment?`, `The smart people in my class`, `Dave`, `Me`, `Nate`)
const quest8 = new Question(`What question are we on?`, `6`, `9`, `8`, `2`)
const quest9 = new Question(`What is HTML?`, `Fish`, `The skeleton of our website`, `Tea`, `A Yeti`)
const quest10 = new Question(`Are you glad this test is over?`, `Yes`, `Absolutely`, `Certainly`, `For sure`)

function init() {
    smallScreen.style.listStyle = "none"
    if (sScreen) {
        highScore();
    } else {
        if (gScreen) {
            startGame();
        }
    }
}






function wrongAnswer(){
alert(`Wrong answer`)
}
function startGame() {
    setTimer();
    tScore = 1;
    smallScreen.style.listStyle = "square inside"
    mainScreen.textContent = (quest1.question);
    an1.textContent=(quest1.ans1);
    an2.textContent=(quest1.ans2);
    an3.textContent=(quest1.ans3);
    an4.textContent=(quest1.ans4);
    an1.addEventListener("click", wrongAnswer);
    an2.addEventListener("click", wrongAnswer);
    an3.addEventListener("click", wrongAnswer);
    an4.addEventListener("click", lv2);
}
function lv2(){
    an1.removeEventListener("click", wrongAnswer);
    an2.removeEventListener("click", wrongAnswer);
    an3.removeEventListener("click", wrongAnswer);
    an4.removeEventListener("click", lv2);
    tScore = 2;
    mainScreen.textContent = (quest2.question);
    an1.textContent=(quest2.ans1);
    an2.textContent=(quest2.ans2);
    an3.textContent=(quest2.ans3);
    an4.textContent=(quest2.ans4);
    an1.addEventListener("click", wrongAnswer);
    an2.addEventListener("click", lv3);
    an3.addEventListener("click", wrongAnswer);
    an4.addEventListener("click", wrongAnswer);
}
function lv3(){
    an1.removeEventListener("click", wrongAnswer);
    an2.removeEventListener("click", lv3);
    an3.removeEventListener("click", wrongAnswer);
    an4.removeEventListener("click", wrongAnswer);
    tScore = 3;
    mainScreen.textContent = (quest3.question);
    an1.textContent=(quest3.ans1);
    an2.textContent=(quest3.ans2);
    an3.textContent=(quest3.ans3);
    an4.textContent=(quest3.ans4);
    an1.addEventListener("click", lv4);
    an2.addEventListener("click", lv4);
    an3.addEventListener("click", lv4);
    an4.addEventListener("click", lv4);
}
function lv4(){
    an1.removeEventListener("click", lv4);
    an2.removeEventListener("click", lv4);
    an3.removeEventListener("click", lv4);
    an4.removeEventListener("click", lv4);
    tScore = 4;
    mainScreen.textContent = (quest4.question);
    an1.textContent=(quest4.ans1);
    an2.textContent=(quest4.ans2);
    an3.textContent=(quest4.ans3);
    an4.textContent=(quest4.ans4);
    an1.addEventListener("click", wrongAnswer);
    an2.addEventListener("click", lv5);
    an3.addEventListener("click", wrongAnswer);
    an4.addEventListener("click", wrongAnswer);
}
function lv5(){
    an1.removeEventListener("click", wrongAnswer);
    an2.removeEventListener("click", lv5);
    an3.removeEventListener("click", wrongAnswer);
    an4.removeEventListener("click", wrongAnswer);
    tScore = 5;
    mainScreen.textContent = (quest5.question);
    an1.textContent=(quest5.ans1);
    an2.textContent=(quest5.ans2);
    an3.textContent=(quest5.ans3);
    an4.textContent=(quest5.ans4);
    an1.addEventListener("click", lv6);
    an2.addEventListener("click", wrongAnswer);
    an3.addEventListener("click", wrongAnswer);
    an4.addEventListener("click", wrongAnswer);
}
function lv6(){
    an1.removeEventListener("click", lv6);
    an2.removeEventListener("click", wrongAnswer);
    an3.removeEventListener("click", wrongAnswer);
    an4.removeEventListener("click", wrongAnswer);
    tScore = 6;
    mainScreen.textContent = (quest6.question);
    an1.textContent=(quest6.ans1);
    an2.textContent=(quest6.ans2);
    an3.textContent=(quest6.ans3);
    an4.textContent=(quest6.ans4);
    an1.addEventListener("click", wrongAnswer);
    an2.addEventListener("click", wrongAnswer);
    an3.addEventListener("click", wrongAnswer);
    an4.addEventListener("click", lv7);
}
function lv7(){
    an1.removeEventListener("click", wrongAnswer);
    an2.removeEventListener("click", wrongAnswer);
    an3.removeEventListener("click", wrongAnswer);
    an4.removeEventListener("click", lv7);
    tScore =7;
    mainScreen.textContent = (quest7.question);
    an1.textContent=(quest7.ans1);
    an2.textContent=(quest7.ans2);
    an3.textContent=(quest7.ans3);
    an4.textContent=(quest7.ans4);
    an1.addEventListener("click", lv8);
    an2.addEventListener("click", lv8);
    an3.addEventListener("click", wrongAnswer);
    an4.addEventListener("click", lv8);
}
function lv8(){
    an1.removeEventListener("click", lv8);
    an2.removeEventListener("click", lv8);
    an3.removeEventListener("click", wrongAnswer);
    an4.removeEventListener("click", lv8);
    tScore =8;
    mainScreen.textContent = (quest8.question);
    an1.textContent=(quest8.ans1);
    an2.textContent=(quest8.ans2);
    an3.textContent=(quest8.ans3);
    an4.textContent=(quest8.ans4);
    an1.addEventListener("click", wrongAnswer);
    an2.addEventListener("click", wrongAnswer);
    an3.addEventListener("click", lv9);
    an4.addEventListener("click", wrongAnswer);
}
function lv9(){
    an1.removeEventListener("click", wrongAnswer);
    an2.removeEventListener("click", wrongAnswer);
    an3.removeEventListener("click", lv9);
    an4.removeEventListener("click", wrongAnswer);
    tScore =9;
    mainScreen.textContent = (quest9.question);
    an1.textContent=(quest9.ans1);
    an2.textContent=(quest9.ans2);
    an3.textContent=(quest9.ans3);
    an4.textContent=(quest9.ans4);
    an1.addEventListener("click", wrongAnswer);
    an2.addEventListener("click", lv10);
    an3.addEventListener("click", wrongAnswer);
    an4.addEventListener("click", wrongAnswer);
}
function lv10(){
    an1.removeEventListener("click", wrongAnswer);
    an2.removeEventListener("click", lv10);
    an3.removeEventListener("click", wrongAnswer);
    an4.removeEventListener("click", wrongAnswer);
    tScore =10;
    mainScreen.textContent = (quest10.question);
    an1.textContent=(quest10.ans1);
    an2.textContent=(quest10.ans2);
    an3.textContent=(quest10.ans3);
    an4.textContent=(quest10.ans4);
    an1.addEventListener("click", saveHs);
    an2.addEventListener("click", saveHs);
    an3.addEventListener("click", saveHs);
    an4.addEventListener("click", saveHs);
    

}
function saveHs(){
    an1.removeEventListener("click", saveHs);
    an2.removeEventListener("click", saveHs);
    an3.removeEventListener("click", saveHs);
    an4.removeEventListener("click", saveHs);
    console.log(`save user high score`)
    localStorage.setItem(`pScore`, tScore);
}
function highScore() {
    mainScreen.textContent = ("High scores:");
    smallScreen.style.listStyle = "square inside"
    high1.textContent=(0);
    high2.textContent=(0);
    high3.textContent=(0);
    high4.textContent=(0);
    high5.textContent=(0);
    high6.textContent=(0);
    high7.textContent=(0);
    high8.textContent=(0);
    high9.textContent=(0);
    high10.textContent=(0);
    if(pScore){high1.textContent = localStorage.getItem(pScore)}
}
init();