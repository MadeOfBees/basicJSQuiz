var playerScores;
var gameState = "Super JSquiz Bros"
var mainScreen = document.getElementById('mScreen');
var mainScreen = document.getElementById('lScreen');
var startBtn = document.getElementById('start');
var hsBtn = document.getElementById('hs');
var an1 = document.getElementById('a1');
var an2 = document.getElementById('a2');
var an3 = document.getElementById('a3');
var an4 = document.getElementById('a4');
var high1 = document.getElementById('a1');
var high2 = document.getElementById('a2');
var high3 = document.getElementById('a3');
var high4 = document.getElementById('a4');
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
startBtn.addEventListener("click", startGame);
hsBtn.addEventListener("click", highScore);
class Question {
    constructor(question, ans1, ans2, ans3, ans4) {
      this.question = question;
      this.ans1 = ans1;
      this.ans2 = ans2;
      this.ans3 = ans3;
      this.ans4 = ans4;
    }
}

const quest1 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest2 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest3 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest4 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)
const quest5 = new Question(`What is javascript?`, `Fish`, `Java`, `Tea`, `A language`)

function init(){
mainScreen.textContent(gameState);
}


function highScore(gameState) {
    gameState = ("High scores")
    mainScreen.textContent = (gameState);
    high1.textContent(hi1);
    high2.textContent(hi2);
    high3.textContent(hi3);
    high4.textContent(hi4);
    high5.textContent(hi5);
    high6.textContent(hi6);
    high7.textContent(hi7);
    high8.textContent(hi8);
    high9.textContent(hi9);
    high10.textContent(hi10);
}

function startGame(){
    mainScreen.textContent(quest1.question);
    an1.textContent(quest1.ans1);
    an2.textContent(quest1.ans2);
    an3.textContent(quest1.ans3);
    an4.textContent(quest1.ans4);
}


init();