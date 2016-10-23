// option: keep track of wins
// option: send response to dom

class Player {
    public throw: any;
    public winCount: number;
    constructor(public name: string) {
        this.winCount = 0;
    }

    randomMove() {
        this.throw = gameMoves[Math.floor(Math.random() * gameMoves.length)];
        updateThrowCSS(`Computer`, this.throw.domID);
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
    let txtResults: string = `${txtWin} threw ${txtWinThrow}. <br />${txtLoser} threw ${txtLoseThrow}. <br />${txtWinThrow} ${txtWinHow} ${txtLoseThrow}. <br /><strong>${txtWhoWon}</strong>`;
    document.getElementById(`gameResults`).innerHTML = txtResults;
}

function evaluatePlay(humanPlay) {
    // this is here so that the computer makes a move each time the user does as well
    playerComputer.randomMove();
    let txtResults: string;

    for (let play of gameMoves) {
        if (play.domID == humanPlay) {
            playerHuman.throw = play;
        }
    }

    if (playerHuman.throw.beats == playerComputer.throw.name) {
        return generateResponse(playerHuman.throw.name, playerComputer.throw.name, playerHuman.throw.how, playerHuman.name);

    } else if (playerComputer.throw.beats == playerHuman.throw.name) {
        return generateResponse(playerComputer.throw.name, playerHuman.throw.name, playerComputer.throw.how, playerComputer.name);
    } else {
        document.getElementById(`gameResults`).innerHTML = `You threw ${playerHuman.throw.name}. <br />The computer threw ${playerComputer.throw.name}. <br /><strong>The game is tied.</strong> `;
    }
}

function updateThrowCSS(player, domID) {
    if (player == `Human`) {
        selectRock.className = ``;
        selectPaper.className = ``;
        selectScissors.className = ``;
    }
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

