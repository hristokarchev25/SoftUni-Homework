/* class Baskeball {
    constructor(name,ppg,rbp) {
        this.name = name;
        this.ppg = ppg;
        this.rbp = rbp;
    }
    print() {
        console.log(`${this.name} averages ${this.ppg}ppg and ${this.rbp}rpg for 2019/20 season`);
    }
}

let player1 = new Baskeball("LeBron",27,10);
player1.print();



class Awards extends Baskeball {
    constructor(name,ppg,rbp,awards) {
        super(name,ppg,rbp);
        this.awards = awards
    }
    milestones() {
        console.log(`${this.name} have won a ${this.awards}`);
    }
}

let player2 = new Awards("Kevin",26,10,"MVP");
player2.print();
player2.milestones(); */

function Baskeball (name,ppg,rbp) {
    this.name = name;
    this.ppg = ppg;
    this.rbp = rbp;
}
Baskeball.prototype.print = function(z) {
    let per = (this.ppg*this.rbp)/z;
    return `${this.name} is having PER of ${per.toFixed(2)}`;
}
let player = new Baskeball("LeBron",27,10);
console.log(player.print(11));
let player2 = new Baskeball("KD",26,10);
console.log(player2.print(15));


