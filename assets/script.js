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
var hi1 = `J Romero`;
var hi2 = `J Carmack`;
var hi3 = `T Hall`;
var hi4 = `R Prince`;
var hi5 = `A Carmack`;
var hi6 = `J Romero`;
var hi7 = `T Hall`;
var hi8 = `J Carmack`;
var hi9 = `S Peterson`;
var hi10 = `K Cloud`;
var sScreen
var hScreen
var gScreen
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
const quest1 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest2 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest3 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest4 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest5 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest6 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest7 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest8 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest9 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest10 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)

function init() {
    if (sScreen) {
        highScore();
    } else {
        if (gScreen) {
            startGame();
        }
    }
}


function highScore() {
    mainScreen.textContent = ("High scores:");
    high1.append(hi1);
    high2.append(hi2);
    high3.append(hi3);
    high4.append(hi4);
    high5.append(hi5);
    high6.append(hi6);
    high7.append(hi7);
    high8.append(hi8);
    high9.append(hi9);
    high10.append(hi10);
}


function startGame() {
    mainScreen.textContent = (quest1.question);
    an1.append(quest1.ans1);
    an2.append(quest1.ans2);
    an3.append(quest1.ans3);
    an4.append(quest1.ans4);
    an3.addEventListener("click", function () { console.log(`3`) });
}

init();