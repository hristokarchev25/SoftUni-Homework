function solve(input) {
    let count = Number(input.shift());
    let even = 0;
    let odd = 0;
    let diff = 0;
    for (let nums = 1; nums <= count; nums++) {
        let checking = Number(input.shift());
        if (nums % 2 === 0) { even += checking; }
        else { odd += checking; }
    }
    if (even === odd) {
        console.log("Yes");
        console.log(`Sum = ${even}`);
    }
    else {
        diff = Math.abs(even - odd);
        console.log("No");
        console.log(`Diff = ${diff}`);

    }
}
solve([3,
    5,
    8,
    1
    ])