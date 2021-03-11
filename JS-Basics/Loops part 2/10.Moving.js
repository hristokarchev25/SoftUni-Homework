function ico(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let sum = width * length * height;
    let text = input.shift();


    while (text !== "Done") {
        let num = Number(text);
        sum -= num;
        if (sum < 0) {
            console.log(`No more free space! You need ${Math.abs(sum)} Cubic meters more.`);
            break;
        }
        text = input.shift();
    }

    if (sum >= 0) { console.log(`${Math.abs(sum)} Cubic meters left.`); }
}
ico(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"
])