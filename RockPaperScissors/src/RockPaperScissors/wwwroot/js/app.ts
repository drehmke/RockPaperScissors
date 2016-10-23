class Player {
    public throw: any;
    constructor(public name: string) { }

    randomMove() {
        this.throw = gameMoves[Math.floor(Math.random() * gameMoves.length)];
    }
}

class Throw {
    public domID: string;
    constructor(public name: string; public beats: string, public beatsHow: string) {
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

function generateResponse(txtWinThrow, txtLoseThrow, txtLoseHow, txtWinner) {
    let txtResults: string = ``;

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
        console.log(`Player won`);
    } else if (playerComputer.throw.name == playerHuman.throw.name) {
        console.log(`Computer won`);
    } else {
        console.log(`Tied game`);
    }
    //console.log(playerComputer, playerHuman);
}

selectRock.addEventListener(`click`, () => { evaluatePlay(`rock`); });
selectPaper.addEventListener(`click`, () => { evaluatePlay(`paper`); });
selectScissors.addEventListener(`click`, () => { evaluatePlay(`scissors`); });

