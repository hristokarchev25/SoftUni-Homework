function minmax(input) {
    let countNUM = Number(input.shift());
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    for (let count = 0; count < countNUM; count++) {
        let enterednumbers = Number(input.shift());
        if (max < enterednumbers) {
            max = enterednumbers;
        }
        if (min > enterednumbers) {
            min = enterednumbers;
        }

    }
    console.log(`Max number: ${max}`);
    console.log(`Min number: ${min}`);

}
minmax([4, 545, 4, 5, 6])