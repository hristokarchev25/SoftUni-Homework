function ico(input) {
    let inputtext = input.shift();
    let sum = 0;
    while (inputtext !== "Stop") {
        num = Number(inputtext);
        sum += num;
        inputtext = input.shift();
    }
    console.log(sum);

}
ico(["2","5","7","5","Stop"])