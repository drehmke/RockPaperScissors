class Player {
    public throw: any;
    constructor(public name: string) { }

    randomMove() {
        this.throw = gameMoves[Math.floor(Math.random() * gameMoves.length)];
    }
}

class Throw {
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

let gameMoves = [throwRock, throwPaper, throwScissors];

let playerHuman: Player = new Player(`Human`);
let playerComputer: Player = new Player(`Computer`);

function generateResponse(txtWinThrow, txtLoseThrow, txtWinHow, txtWinner) {
    let txtWin: string;
    let txtLoser: string;
    let txtWhoWon: string;
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
    let txtResults: string = `${txtWin} threw ${txtWinThrow}. ${txtLoser} threw ${txtLoseThrow}. ${txtWinThrow} ${txtWinHow} ${txtLoseThrow}. ${txtWhoWon}`
    return txtResults;
}

function evaluatePlay(humanPlay) {
    // this is here so that the computer makes a move each time the user does as well
    playerComputer.randomMove();
    let txtResults: string;

    for (let play of gameMoves) {
        //console.log(play);
        if (play.domID == humanPlay) {
            playerHuman.throw = play;
        }
    }

    if (playerHuman.throw.beats == playerComputer.throw.name) {
        console.log(playerHuman.throw, playerComputer.throw);
        return generateResponse(playerHuman.throw.name, playerComputer.throw.name, playerHuman.throw.how, playerHuman.name);
    } else if (playerComputer.throw.beats == playerHuman.throw.name) {
        console.log(playerHuman.throw, playerComputer.throw);
        return generateResponse(playerComputer.throw.name, playerHuman.throw.name, playerComputer.throw.how, playerComputer.name);
    } else {
        console.log(playerHuman.throw, playerComputer.throw);
        return `You threw ${playerHuman.throw.name}. The computer threw ${playerComputer.throw.name}. The game is tied. `;
    }
    //console.log(playerComputer, playerHuman);
}

selectRock.addEventListener(`click`, () => { console.log(evaluatePlay(`rock`)); });
selectPaper.addEventListener(`click`, () => { console.log(evaluatePlay(`paper`)); });
selectScissors.addEventListener(`click`, () => { console.log(evaluatePlay(`scissors`)); });

