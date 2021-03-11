function cake(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let sumCake = width * length;

    let text = input.shift();
    while (text != "STOP") {
        let num = Number(text);
        sumCake -= num;
        if (sumCake < 0) {
            console.log(`No more cake left! You need ${Math.abs(sumCake)} pieces more.`);
            break;
        }
        text = input.shift();
    }
    if (sumCake >= 0) {
        console.log(`${Math.abs(sumCake)} pieces are left.`);
    }
}
cake(["10","2","2","4","6","STOP","26"])