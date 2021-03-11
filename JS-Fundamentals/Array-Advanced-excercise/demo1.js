function solve(input) {
    let first = Number(input.shift());
    let second = Number(input.shift());
    let third = Number(input.shift());
    let peopleWithQuestions = Number(input.shift());
    let hours = 0;
    let jobTheyCanDo = first + second + third;
    while (peopleWithQuestions > 0) {
        hours++;
        if (hours % 4 === 0) {
            continue;
        }
        peopleWithQuestions -= jobTheyCanDo;
    }
    console.log(`Time needed: ${hours}h.`);
}
solve([3,
    2,
    5,
    40]);