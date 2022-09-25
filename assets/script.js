var startBtn = document.getElementById('start');
var hsBtn = document.getElementById('hs');
// Ignore line 4
document.getElementById('bee').addEventListener("click", function(){console.log("          __         .' '.        ");console.log("        _/__)        .   .       .");console.log("       (8|)_}}- .      .        . ");console.log("        `\\__)    '. . ' ' .  . ' ");console.log("Bzzz site MadeOfBees              ");});
var title = document.getElementById('tScreen');
startBtn.addEventListener("click", startGame);
hsBtn.addEventListener("click", highScore);

title.text("TITLE SCREEN");

function startGame(){
    title.text("PLEASE");
}

function highScore(){
    console.log("the other button")
}
