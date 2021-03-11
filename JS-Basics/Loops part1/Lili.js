function lili(input) {
    let age = Number(input.shift());
    let washingMachinePrice = Number(input.shift());
    let pricePerToy = Number(input.shift());
    let diff = 0;
    let toys = 0;
    let cash = 0;
    let bro = 0;
    let ten = 10;
    for (let count = 1; count <= age; count++) {
        if (count % 2 === 0) {
            cash += ten;
            bro++;
            ten += 10;
        }
        else {
            toys++;
        }

    }
    let money = cash + (toys * pricePerToy) - bro;
    if (money >= washingMachinePrice) {
        diff = Math.abs(money - washingMachinePrice);
        console.log(`Yes! ${diff.toFixed(2)}`);
    }
    else {
        diff = Math.abs(money - washingMachinePrice);
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
lili([10, 170.00, 6])