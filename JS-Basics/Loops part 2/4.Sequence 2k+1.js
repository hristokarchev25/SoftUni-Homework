function sec(input) {
    let n = Number(input.shift());
    let num = 1;

    while (num <= n) {
        console.log(num);
        num = (num * 2) + 1;

    }
}

sec(["444"])