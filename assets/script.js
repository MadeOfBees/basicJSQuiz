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
    smallScreen.style.listStyle = "none"
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
    smallScreen.style.listStyle = "square inside"
    high1.textContent=(hi1);
    high2.textContent=(hi2);
    high3.textContent=(hi3);
    high4.textContent=(hi4);
    high5.textContent=(hi5);
    high6.textContent=(hi6);
    high7.textContent=(hi7);
    high8.textContent=(hi8);
    high9.textContent=(hi9);
    high10.textContent=(hi10);
}


function startGame() {
    smallScreen.style.listStyle = "square inside"
    // how abt you pull these names from an array? 
    mainScreen.textContent = (quest1.question);
    an1.textContent=(quest1.ans1);
    an2.textContent=(quest1.ans2);
    an3.textContent=(quest1.ans3);
    an4.textContent=(quest1.ans4);
    an1.addEventListener("click", function () { console.log(`1`) });
    an2.addEventListener("click", function () { console.log(`2`)});
    an3.addEventListener("click", function () { console.log(`3`)});
    an4.addEventListener("click", function () { console.log(`4`)});
}
function lv2(){
    an1.textContent=(quest2.ans1);
    an2.textContent=(quest2.ans2);
    an3.textContent=(quest2.ans3);
    an4.textContent=(quest2.ans4);
    an1.addEventListener("click", function () { console.log(`1`) });
    an2.addEventListener("click", function () { console.log(`2`)});
    an3.addEventListener("click", function () { console.log(`3`)});
    an4.addEventListener("click", function () { console.log(`4`)});
}
function lv3(){
    an1.textContent=(quest3.ans1);
    an2.textContent=(quest3.ans2);
    an3.textContent=(quest3.ans3);
    an4.textContent=(quest3.ans4);
    an1.addEventListener("click", function () { console.log(`1`) });
    an2.addEventListener("click", function () { console.log(`2`)});
    an3.addEventListener("click", function () { console.log(`3`)});
    an4.addEventListener("click", function () { console.log(`4`)});
}
function lv4(){
    an1.textContent=(quest4.ans1);
    an2.textContent=(quest4.ans2);
    an3.textContent=(quest4.ans3);
    an4.textContent=(quest4.ans4);
    an1.addEventListener("click", function () { console.log(`1`) });
    an2.addEventListener("click", function () { console.log(`2`)});
    an3.addEventListener("click", function () { console.log(`3`)});
    an4.addEventListener("click", function () { console.log(`4`)});
}
function lv5(){
    an1.textContent=(quest5.ans1);
    an2.textContent=(quest5.ans2);
    an3.textContent=(quest5.ans3);
    an4.textContent=(quest5.ans4);
    an1.addEventListener("click", function () { console.log(`1`) });
    an2.addEventListener("click", function () { console.log(`2`)});
    an3.addEventListener("click", function () { console.log(`3`)});
    an4.addEventListener("click", function () { console.log(`4`)});
}
function lv6(){
    an1.textContent=(quest6.ans1);
    an2.textContent=(quest6.ans2);
    an3.textContent=(quest6.ans3);
    an4.textContent=(quest6.ans4);
    an1.addEventListener("click", function () { console.log(`1`) });
    an2.addEventListener("click", function () { console.log(`2`)});
    an3.addEventListener("click", function () { console.log(`3`)});
    an4.addEventListener("click", function () { console.log(`4`)});
}
function lv7(){
    an1.textContent=(quest7.ans1);
    an2.textContent=(quest7.ans2);
    an3.textContent=(quest7.ans3);
    an4.textContent=(quest7.ans4);
    an1.addEventListener("click", function () { console.log(`1`) });
    an2.addEventListener("click", function () { console.log(`2`)});
    an3.addEventListener("click", function () { console.log(`3`)});
    an4.addEventListener("click", function () { console.log(`4`)});
}
function lv8(){
    an1.textContent=(quest8.ans1);
    an2.textContent=(quest8.ans2);
    an3.textContent=(quest8.ans3);
    an4.textContent=(quest8.ans4);
    an1.addEventListener("click", function () { console.log(`1`) });
    an2.addEventListener("click", function () { console.log(`2`)});
    an3.addEventListener("click", function () { console.log(`3`)});
    an4.addEventListener("click", function () { console.log(`4`)});
}
function lv9(){
    an1.textContent=(quest9.ans1);
    an2.textContent=(quest9.ans2);
    an3.textContent=(quest9.ans3);
    an4.textContent=(quest9.ans4);
    an1.addEventListener("click", function () { console.log(`1`) });
    an2.addEventListener("click", function () { console.log(`2`)});
    an3.addEventListener("click", function () { console.log(`3`)});
    an4.addEventListener("click", function () { console.log(`4`)});
}
function lv10(){
    an1.textContent=(quest10.ans1);
    an2.textContent=(quest10.ans2);
    an3.textContent=(quest10.ans3);
    an4.textContent=(quest10.ans4);
    an1.addEventListener("click", function () { console.log(`1`) });
    an2.addEventListener("click", function () { console.log(`2`)});
    an3.addEventListener("click", function () { console.log(`3`)});
    an4.addEventListener("click", function () { console.log(`4`)});
}
init();