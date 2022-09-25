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
    console.log("              \     /              ");
    console.log("          \    o ^ o    /          ");
    console.log("            \ (     ) /            ");
    console.log(" ____________(%%%%%%%)____________ ");
    console.log("(     /   /  )%%%%%%%(  \   \     )");
    console.log("(___/___/__/           \__\___\___)");
    console.log("   (     /  /(%%%%%%%)\  \     )   ");
    console.log("    (__/___/ (%%%%%%%) \___\__)    ");
    console.log("            /(       )\            ");
    console.log("          /   (%%%%%)   \          ");
    console.log("               (%%%)               ");
    console.log("                 !                 ");
    console.log("Bzzz site MadeOfBees");
}
