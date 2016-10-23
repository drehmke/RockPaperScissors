interface IPlayer {
    name: string;
    winCount: number;
    throw: any;
}
interface IThrow {
    domID: string;
    name: string;
    beats: string;
    how: string;
}

class Player implements IPlayer {
    public throw: any;
    public winCount: number;
    constructor(public name: string) {
        this.winCount = 0;
    }
    // I have this as a method on Player because it is something a player can do
    randomMove() {
        this.throw = gameMoves[Math.floor(Math.random() * gameMoves.length)];
        updateThrowCSS(`Computer`, this.throw.domID);
    }
}

class Throw implements IThrow {
    public domID: string;
    constructor(public name: string; public beats: string, public how: string) {
        this.domID = this.name.toLowerCase();
    }
}

// Set up the game
let throwRock: Throw = new Throw(`Rock`, `Scissors`, `smashes`);
let selectRock = <HTMLImageElement>document.getElementById(throwRock.domID);
let throwPaper: Throw = new Throw(`Paper`, `Rock`, `covers`);
let selectPaper = <HTMLImageElement>document.getElementById(throwPaper.domID);
let throwScissors: Throw = new Throw(`Scissors`, `Paper`, `cut`);
let selectScissors = <HTMLImageElement>document.getElementById(throwScissors.domID);                                                                

let gameMoves: IThrow[] = [throwRock, throwPaper, throwScissors];

let playerHuman: Player = new Player(`Human`);
let playerComputer: Player = new Player(`Computer`);

function generateResponse(txtWinThrow, txtLoseThrow, txtWinHow, txtWinner) {
    // setup the variables I'm going to need
    let txtWin: string;
    let txtLoser: string;
    let txtWhoWon: string;
    // I'm presuming the loser based on who won (one of the parameters). Also tweaking some of the text to proper English.
    if (txtWinner == `Human`) {
        txtWin = `You`;
        txtLoser = `The computer`;
        txtWhoWon = `You won! `;
    }
    else if (txtWinner == `Computer`) {
        txtWin = `The computer`;
        txtLoser = `You`;
        txtWhoWon = `The computer wins.`;
    }
    // Fill in our template and assign it to the DOM
    let txtResults: string = `${txtWin} threw ${txtWinThrow}. <br />${txtLoser} threw ${txtLoseThrow}. <br />${txtWinThrow} ${txtWinHow} ${txtLoseThrow}. <br /><strong>${txtWhoWon}</strong>`;
    document.getElementById(`gameResults`).innerHTML = txtResults;
}

function evaluatePlay(humanPlay) {
    // this is here so that the computer makes a move each time the user does as well
    playerComputer.randomMove();
    let txtResults: string;

    // find the Throw object that matches what the player selected and assign it to the Player object
    for (let play of gameMoves) {
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
        document.getElementById(`winCountHuman`).innerHTML = playerHuman.winCount.toString(); 
        // fill in and return the round information
        return generateResponse(playerHuman.throw.name, playerComputer.throw.name, playerHuman.throw.how, playerHuman.name); 
    } else if (playerComputer.throw.beats == playerHuman.throw.name) {
        playerComputer.winCount++;
        document.getElementById(`winCountComputer`).innerHTML = playerComputer.winCount.toString();
        return generateResponse(playerComputer.throw.name, playerHuman.throw.name, playerComputer.throw.how, playerComputer.name);
    } else {
        // If there was a tie, I want a slightly different response printed
        document.getElementById(`gameResults`).innerHTML = `You threw ${playerHuman.throw.name}. <br />The computer threw ${playerComputer.throw.name}. <br /><strong>The game is tied.</strong> `;
        // ties should get counted too!
        document.getElementById(`tieCount`).innerHTML = (parseInt(document.getElementById(`tieCount`).innerHTML) + 1).toString();
    }

}

function updateThrowCSS(player, domID) {
    // resetting the CSS classes on all three images so that each round ONLY shows the current player selections
    if (player == `Human`) {
        selectRock.className = ``;
        selectPaper.className = ``;
        selectScissors.className = ``;
    }

    // add a colored border based on who selected what
    let elemClassList: any;
    switch (domID) {
        case `rock`:
            elemClassList = selectRock.classList;
            selectRock.className = elemClassList.value + ` selectedBy${player}`;
            break;
        case `paper`:
            elemClassList = selectRock.classList;
            selectPaper.className = elemClassList.value + ` selectedBy${player}`;
            break;
        case `scissors`:
            elemClassList = selectRock.classList;
            selectScissors.className = elemClassList.value + ` selectedBy${player}`;
            break;
    }
}

// When the user clicks on an image, give a visual indication as to what they selected
// evaluate against the computer and display the results
selectRock.addEventListener(`click`, () => {
    updateThrowCSS(`Human`, `rock`);
    evaluatePlay(`rock`);
});
selectPaper.addEventListener(`click`, () => {
    updateThrowCSS(`Human`, `paper`);
    evaluatePlay(`paper`);
});
selectScissors.addEventListener(`click`, () => {
    updateThrowCSS(`Human`, `scissors`);
    evaluatePlay(`scissors`);
});
