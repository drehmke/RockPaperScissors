var Player = (function () {
    function Player(name) {
        this.name = name;
    }
    Player.prototype.randomMove = function () {
        this.throw = gameMoves[Math.floor(Math.random() * gameMoves.length)];
    };
    return Player;
}());
var Throw = (function () {
    function Throw(name, beats, beatsHow) {
        this.name = name;
        this.beats = beats;
        this.beatsHow = beatsHow;
        this.domID = this.name.toLowerCase();
    }
    return Throw;
}());
// Set up the game
var throwRock = new Throw("Rock", "Scissors", "smashes");
var selectRock = document.getElementById(throwRock.domID);
var throwPaper = new Throw("Paper", "Rock", "covers");
var selectPaper = document.getElementById(throwPaper.domID);
var throwScissors = new Throw("Scissors", "Paper", "cut");
var selectScissors = document.getElementById(throwScissors.domID);
var gameMoves = [throwRock, throwPaper, throwScissors];
var playerHuman = new Player("Human");
var playerComputer = new Player("Computer");
function generateResponse(txtWinThrow, txtLoseThrow, txtLoseHow, txtWinner) {
    var txtResults = "";
    return txtResults;
}
function evaluatePlay(humanPlay) {
    // this is here so that the computer makes a move each time the user does as well
    playerComputer.randomMove();
    var txtResults;
    for (var _i = 0, gameMoves_1 = gameMoves; _i < gameMoves_1.length; _i++) {
        var play = gameMoves_1[_i];
        //console.log(play);
        if (play.domID == humanPlay) {
            playerHuman.throw = play;
        }
    }
    if (playerHuman.throw.beats == playerComputer.throw.name) {
        console.log("Player won");
    }
    else if (playerComputer.throw.name == playerHuman.throw.name) {
        console.log("Computer won");
    }
    else {
        console.log("Tied game");
    }
    //console.log(playerComputer, playerHuman);
}
selectRock.addEventListener("click", function () { evaluatePlay("rock"); });
selectPaper.addEventListener("click", function () { evaluatePlay("paper"); });
selectScissors.addEventListener("click", function () { evaluatePlay("scissors"); });
