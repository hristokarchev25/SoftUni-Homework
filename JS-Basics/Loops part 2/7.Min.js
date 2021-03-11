function minnn(input) {
    let count = Number(input.shift());
    let min = Number.MAX_SAFE_INTEGER;
    let position = 1;
    let enteredNUM = Number(input.shift());

    while (position <= count) {
        if (enteredNUM < min) {
            min = enteredNUM;
        }
        position++;
        enteredNUM = Number(input.shift());
    }
    console.log(min);

}
minnn(["3", "6", "2", "22"])
