var startBtn = document.getElementById('start');
var hsBtn = document.getElementById('hs');
var beeBtn = document.getElementById('bee');
startBtn.addEventListener("click", startGame);
hsBtn.addEventListener("click", highScore);
beeBtn.addEventListener("click", buzzBuzz);

function startGame(){
    console.log("press the button to begin")
}

function highScore(){
    console.log("the other button")
}

function buzzBuzz(){
    console.log("          __         .' '.");
    console.log("        _/__)        .   .       .");
    console.log("       (8|)_}}- .      .        .");
    console.log("        `\\__)    '. . ' ' .  . '");
    console.log("Bzzz site MadeOfBees");
}
