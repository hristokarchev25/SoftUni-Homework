function maxxx(input) {
    let count = Number(input.shift());
    let max = Number.MIN_SAFE_INTEGER;
    let numberPosition = 1;
    let enterednumbers = Number(input.shift());
    while (numberPosition <= count) {

        if (max < enterednumbers) {
            max = enterednumbers;
        }

        numberPosition++;
        enterednumbers = Number(input.shift());

    }
    console.log(max);


}
maxxx(["4", "24", "8", "1", "9"])