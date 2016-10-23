class Player {
    public playID: number;                // not in the constructor because we don't want it on instantiation
    constructor(public name: string) { }

    randomMove() {
        //this.play = gameMoves[Math.floor(Math.random() * gameMoves.length)];
        this.playID = Math.floor(Math.random() * gameMoves.length);
    }

}

class Throw {
    public domID: string;
    constructor(public name: string, public beats: string, public beatHow: string) {
        this.domID = this.name.toLowerCase();
    }
    
}

let throwRock = new Throw(`Rock`, `Scissors`, `crushes`);
let selectRock = <HTMLImageElement>document.getElementById(throwRock.domID);
let throwPaper = new Throw(`Paper`, `Rock`, `covers`);
let selectPaper = <HTMLImageElement>document.getElementById(throwPaper.domID);
let throwScissors = new Throw(`Scissors`, `Paper`, `cut`);
let selectScissors = <HTMLImageElement>document.getElementById(throwScissors.domID);

let gameMoves = [throwRock, throwPaper, throwScissors];

let playerHuman = new Player(`Human`);
let playerComputer = new Player(`Computer`);


function evaluatePlay(humanPlay) {
    playerComputer.randomMove();
    let txtResults = ``;
    for (let key in gameMoves) {
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

selectRock.addEventListener(`click`, () => { evaluatePlay(`rock`); });
selectPaper.addEventListener(`click`, () => { evaluatePlay(`paper`); });
selectScissors.addEventListener(`click`, () => { evaluatePlay(`scissors`); });

