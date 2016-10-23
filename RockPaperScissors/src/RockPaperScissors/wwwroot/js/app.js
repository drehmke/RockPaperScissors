var Player = (function () {
    function Player(name) {
        this.name = name;
        this.winCount = 0;
    }
    // I have this as a method on Player because it is something a player can do
    Player.prototype.randomMove = function () {
        this.throw = gameMoves[Math.floor(Math.random() * gameMoves.length)];
        updateThrowCSS("Computer", this.throw.domID);
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
    // setup the variables I'm going to need
    var txtWin;
    var txtLoser;
    var txtWhoWon;
    // I'm presuming the loser based on who won (one of the parameters). Also tweaking some of the text to proper English.
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
    // Fill in our template and assign it to the DOM
    var txtResults = txtWin + " threw " + txtWinThrow + ". <br />" + txtLoser + " threw " + txtLoseThrow + ". <br />" + txtWinThrow + " " + txtWinHow + " " + txtLoseThrow + ". <br /><strong>" + txtWhoWon + "</strong>";
    document.getElementById("gameResults").innerHTML = txtResults;
}
function evaluatePlay(humanPlay) {
    // this is here so that the computer makes a move each time the user does as well
    playerComputer.randomMove();
    var txtResults;
    // find the Throw object that matches what the player selected and assign it to the Player object
    for (var _i = 0, gameMoves_1 = gameMoves; _i < gameMoves_1.length; _i++) {
        var play = gameMoves_1[_i];
        if (play.domID == humanPlay) {
            playerHuman.throw = play;
        }
    }
    // Here I am checking to see who won, starting with the player. 
    // If the player's throw 'beats' property is equal to the computer's throw 'name' property
    if (playerHuman.throw.beats == playerComputer.throw.name) {
        // up the player's win count
        playerHuman.winCount++;
        // display the new total on the player's win board
        document.getElementById("winCountHuman").innerHTML = playerHuman.winCount.toString();
        // fill in and return the round information
        return generateResponse(playerHuman.throw.name, playerComputer.throw.name, playerHuman.throw.how, playerHuman.name);
    }
    else if (playerComputer.throw.beats == playerHuman.throw.name) {
        playerComputer.winCount++;
        document.getElementById("winCountComputer").innerHTML = playerComputer.winCount.toString();
        return generateResponse(playerComputer.throw.name, playerHuman.throw.name, playerComputer.throw.how, playerComputer.name);
    }
    else {
        // If there was a tie, I want a slightly different response printed
        document.getElementById("gameResults").innerHTML = "You threw " + playerHuman.throw.name + ". <br />The computer threw " + playerComputer.throw.name + ". <br /><strong>The game is tied.</strong> ";
        // ties should get counted too!
        document.getElementById("tieCount").innerHTML = (parseInt(document.getElementById("tieCount").innerHTML) + 1).toString();
    }
}
function updateThrowCSS(player, domID) {
    // resetting the CSS classes on all three images so that each round ONLY shows the current player selections
    if (player == "Human") {
        selectRock.className = "";
        selectPaper.className = "";
        selectScissors.className = "";
    }
    // add a colored border based on who selected what
    var elemClassList;
    switch (domID) {
        case "rock":
            elemClassList = selectRock.classList;
            selectRock.className = elemClassList.value + (" selectedBy" + player);
            break;
        case "paper":
            elemClassList = selectRock.classList;
            selectPaper.className = elemClassList.value + (" selectedBy" + player);
            break;
        case "scissors":
            elemClassList = selectRock.classList;
            selectScissors.className = elemClassList.value + (" selectedBy" + player);
            break;
    }
}
// When the user clicks on an image, give a visual indication as to what they selected
// evaluate against the computer and display the results
selectRock.addEventListener("click", function () {
    updateThrowCSS("Human", "rock");
    evaluatePlay("rock");
});
selectPaper.addEventListener("click", function () {
    updateThrowCSS("Human", "paper");
    evaluatePlay("paper");
});
selectScissors.addEventListener("click", function () {
    updateThrowCSS("Human", "scissors");
    evaluatePlay("scissors");
});
