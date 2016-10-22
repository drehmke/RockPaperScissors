// Board Pieces
var pieces = ["rock", "paper", "scissors"];
var txtRockWins = "Rock crushes scissors.";
var txtPaperWins = "Paper covers rock.";
var txtScissorsWins = "Scissors cuts paper.";
// Computer's Play Setup
function randomMove() {
    var play = pieces[Math.floor(Math.random() * pieces.length)];
    return play;
}
// Grab the Player's Move
var btnPaper = document.getElementById('paper');
var btnRock = document.getElementById('rock');
var btnScissors = document.getElementById('scissors');
function savePlayersMove(player, computer) {
    // highlight the player's selection
    console.log("You chose " + player + ". The computer chose " + computer + ".");
}
var playersMove1 = btnPaper.addEventListener("click", function () { savePlayersMove("paper", randomMove()); });
var playersMove2 = btnRock.addEventListener("click", function () { savePlayersMove("rock", randomMove()); });
var playersMove3 = btnScissors.addEventListener("click", function () { savePlayersMove("scissors", randomMove()); });
// Compare Computer to Player
