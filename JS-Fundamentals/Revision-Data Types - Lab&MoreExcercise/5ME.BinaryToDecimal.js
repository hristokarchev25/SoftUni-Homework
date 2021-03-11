function solve(binary) {
    let twoPower = 1;
    let decimalNum = 0;
    for (let i = binary.length-1; i >= 0; i--) {
        if (binary[i] === '1') {
            decimalNum += twoPower;
        }
        twoPower <<=1;
    }
    console.log(decimalNum);
}
solve('11110000');