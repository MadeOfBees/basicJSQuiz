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
mainScreen.append(gameState);
}


function highScore(gameState) {
    gameState = ("High scores")
    mainScreen.textContent = (gameState);
}

function startGame(a1,a2,a3,a4){
    mainScreen.replaceWith (quest1.question);
    an1.replaceWith (quest1.ans1);
    an2.replaceWith (quest1.ans2);
    an3.replaceWith (quest1.ans3);
    an4.replaceWith (quest1.ans4);
}


init();