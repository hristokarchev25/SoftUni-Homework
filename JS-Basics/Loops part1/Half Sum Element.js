function solve(input) {
    let count = Number(input.shift());
    let diff = 0;
    let sum = 0;
    let result = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let nums = 1; nums <= count; nums++) {
        let search = Number(input.shift());
        sum += search;
        if (search > max) { max = search; }
    }
    result = Math.abs(sum - max);

    if (max === result) {
        console.log("Yes");
        console.log(`Sum = ${result}`);
    }
    else {
        diff = Math.abs(result - max);
        console.log("No");
        console.log(`Diff = ${diff}`);

    }

}
solve([3, 2, 1, 5])