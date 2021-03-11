function solve(input) {
    let num = Number(input.shift());
    let count = 0;
    for (let x = 0; x <= num; x++) {
        for (let y = 0; y <= num; y++) {
            for (let z = 0; z <= num; z++) {
                if (x + y + z === num) {
                    count++;
                }
            }
        }
    }
    console.log(count);

}
solve([20])