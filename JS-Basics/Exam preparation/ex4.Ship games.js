function solve(input) {
    let name = input.shift();
    let countOfGames = Number(input.shift());
    let countVolleyball = 0;
    let countTennis = 0;
    let countBadminton = 0;
    let volleyball = 0;
    let tennis = 0;
    let badminton = 0;
    let sum = 0;
    for (let i = 1; i <= countOfGames; i++) {
        let games = input.shift();
        let points = Number(input.shift());
        if (games === "volleyball") {
            countVolleyball++;
            volleyball += points + (points * 0.07);

        }
        if (games === "tennis") {
            countTennis++;
            tennis += points + (points * 0.05);

        }
        if (games === "badminton") {
            countBadminton++;
            badminton += points + (points * 0.02);

        }

    }
    sum = volleyball + tennis + badminton;
    if (volleyball / countVolleyball >= 75 && tennis / countTennis >= 75 && badminton / countBadminton >= 75) {
        console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(sum)} points.`);
    } else { console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(sum)}.`); }
}
solve(["Annie", 5, "badminton", 34, "tennis", 76, "badminton", 10, "volleyvall", 62, "badminton", 56])