var Player = (function () {
    function Player(name) {
        this.name = name;
    }
    Player.prototype.randomMove = function () {
        //this.play = gameMoves[Math.floor(Math.random() * gameMoves.length)];
        this.playID = Math.floor(Math.random() * gameMoves.length);
    };
    return Player;
}());
var Throw = (function () {
    function Throw(name, beats, beatHow) {
        this.name = name;
        this.beats = beats;
        this.beatHow = beatHow;
        this.domID = this.name.toLowerCase();
    }
    return Throw;
}());
var throwRock = new Throw("Rock", "Scissors", "crushes");
var selectRock = document.getElementById(throwRock.domID);
var throwPaper = new Throw("Paper", "Rock", "covers");
var selectPaper = document.getElementById(throwPaper.domID);
var throwScissors = new Throw("Scissors", "Paper", "cut");
var selectScissors = document.getElementById(throwScissors.domID);
var gameMoves = [throwRock, throwPaper, throwScissors];
var playerHuman = new Player("Human");
var playerComputer = new Player("Computer");
function evaluatePlay(humanPlay) {
    playerComputer.randomMove();
    var txtResults = "";
    for (var key in gameMoves) {
        if (gameMoves[key].name.toLowerCase() == humanPlay) {
            playerHuman.playID = key;
        }
    }
    console.log(playerHuman);
    /*
    txtResults = `You threw ${gameMoves[key].name}. The computer threw ${gameMoves[playerComputer.playID].name}. (${key}) `;
    // which throw wins ?
    if (gameMoves[key].beats === gameMoves[playerComputer.playID].name) {
        txtResults += `${gameMoves[key].name} ${gameMoves[key].beatHow} ${gameMoves[playerComputer.playID].name}, so you win! (${key}) `;
    }
    else if (gameMoves[playerComputer.playID].beats === gameMoves[key].name) {
        txtResults += `${gameMoves[playerComputer.playID].name} ${gameMoves[key].beatHow} ${gameMoves[key].beats}, so the computer wins! (${key}) `;
    }
    else if (gameMoves[key].name == gameMoves[playerComputer.playID].name) {
        txtResults += ` You both threw the same, so it is a tied game! (${key}) `;
    }

    txtResults += `Care to try again? `;
    */
}
selectRock.addEventListener("click", function () { evaluatePlay("rock"); });
selectPaper.addEventListener("click", function () { evaluatePlay("paper"); });
selectScissors.addEventListener("click", function () { evaluatePlay("scissors"); });
