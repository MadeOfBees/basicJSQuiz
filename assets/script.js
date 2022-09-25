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
    console.log("                .' '.            __");
    console.log("       .        .   .           (__\_");
    console.log("        .         .         . -{{_(|8)");
    console.log("          ' .  . ' ' .  . '     (__/" );
    console.log("ACSII BY LOAN STARK ON ASCII ART ARCHIVE");
}

