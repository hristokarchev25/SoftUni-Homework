function solve(number) {
    if (number % number == 0 && number > 1 && number % 1 == 0 && number%2!==0) {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
}
solve(8);