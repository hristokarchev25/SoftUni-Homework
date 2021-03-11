function solve(input) {
    let score = Number(input.shift());
    let countMoves = 0;
    let finalscore = 0;
    while (score !== 0) {
        let sector = input.shift();
        let points = input.shift();


        if (sector === "bullseye") {
            countMoves++;
            console.log(`Congratulations! You won the game with a bullseye in ${countMoves} moves!`);
            break;
        }
        else if (sector === "number section") {
            countMoves++;
            score -= points;
        }
        else if (sector === "double ring") {
            countMoves++;
            score -= 2 * points;
        }
        else if (sector === "triple ring") {
            countMoves++;
            score -= 3 * points;
        }
        if (score < 0) {
            console.log(`Sorry, you lost. Score difference: ${Math.abs(score)}.`);
            break;
        }
    }

    if (score === 0) {
        console.log(`Congratulations! You won the game in ${countMoves} moves!`);
    }
}
solve([75, "triple ring", 17, "number section", 16, "triple ring", 13, "double ring", 10])