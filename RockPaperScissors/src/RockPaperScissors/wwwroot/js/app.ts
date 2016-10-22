// Board Pieces
let pieces = [`rock`, `paper`, `scissors`];
let txtRockWins = `Rock crushes scissors.`;
let txtPaperWins = `Paper covers rock.`;
let txtScissorsWins = `Scissors cuts paper.`;

// Computer's Play Setup
function randomMove() {
    let play = pieces[Math.floor(Math.random() * pieces.length)];
    return play;
}

// Grab the Player's Move
let btnPaper = <HTMLImageElement>document.getElementById('paper');
let btnRock = <HTMLImageElement>document.getElementById('rock');
let btnScissors = <HTMLImageElement>document.getElementById('scissors');

function savePlayersMove(player, computer) {
    // highlight the player's selection
    console.log(`You chose ${player}. The computer chose ${computer}.`);
}

let playersMove1 = btnPaper.addEventListener(`click`, () => { savePlayersMove(`paper`, randomMove()); });
let playersMove2 = btnRock.addEventListener(`click`, () => { savePlayersMove(`rock`, randomMove()); });
let playersMove3 = btnScissors.addEventListener(`click`, () => { savePlayersMove(`scissors`, randomMove()); });


// Compare Computer to Player
