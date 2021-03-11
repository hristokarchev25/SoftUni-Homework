function solve(input) {
    let numbers = input.split(" ");
    let sum = 0;
    let count = 0;
    let avg = 0;
    let arrToFill = [];
    let isResult = false;
    for (let el of numbers) {
        count++;
        sum += Number(el);
        avg = sum / count;
    }
    for (let i = 0; i < count; i++) {
        if (numbers[i] > avg) {
            arrToFill.push(numbers[i]);
            isResult = true;
        }
    }
    if (isResult) {
        arrToFill.sort((a, b) => b - a).splice(5);
        console.log(arrToFill.join(" "));
    } else {
        console.log(`No`);
    }
}
solve('-1 -2 -3 -4 -5 -6');