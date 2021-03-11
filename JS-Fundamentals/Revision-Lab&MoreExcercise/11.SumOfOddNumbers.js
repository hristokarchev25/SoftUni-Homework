function solve(num) {
    let sum = 0;
    let count = 0;
    let i;
    for (i = 1; i <= 100; i += 2) {
        console.log(i);
        count++;
        sum += i;
        if (count == num) {
            console.log(`Sum: ${sum}`);
            break;
        }


    }


}
solve(5);