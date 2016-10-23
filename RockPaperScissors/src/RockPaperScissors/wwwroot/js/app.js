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
    function Throw(name, beats, how) {
        this.name = name;
        this.beats = beats;
        this.how = how;
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
function generateResponse(txtWinThrow, txtLoseThrow, txtWinHow, txtWinner) {
    var txtWin;
    var txtLoser;
    var txtWhoWon;
    if (txtWinner == "Human") {
        txtWin = "You";
        txtLoser = "The computer";
        txtWhoWon = "You won! ";
    }
    else if (txtWinner == "Computer") {
        txtWin = "The computer";
        txtLoser = "You";
        txtWhoWon = "The computer wins.";
    }
    var txtResults = txtWin + " threw " + txtWinThrow + ". " + txtLoser + " threw " + txtLoseThrow + ". " + txtWinThrow + " " + txtWinHow + " " + txtLoseThrow + ". " + txtWhoWon;
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
        console.log(playerHuman.throw, playerComputer.throw);
        return generateResponse(playerHuman.throw.name, playerComputer.throw.name, playerHuman.throw.how, playerHuman.name);
    }
    else if (playerComputer.throw.beats == playerHuman.throw.name) {
        console.log(playerHuman.throw, playerComputer.throw);
        return generateResponse(playerComputer.throw.name, playerHuman.throw.name, playerComputer.throw.how, playerComputer.name);
    }
    else {
        console.log(playerHuman.throw, playerComputer.throw);
        return "You threw " + playerHuman.throw.name + ". The computer threw " + playerComputer.throw.name + ". The game is tied. ";
    }
    //console.log(playerComputer, playerHuman);
}
selectRock.addEventListener("click", function () { console.log(evaluatePlay("rock")); });
selectPaper.addEventListener("click", function () { console.log(evaluatePlay("paper")); });
selectScissors.addEventListener("click", function () { console.log(evaluatePlay("scissors")); });
