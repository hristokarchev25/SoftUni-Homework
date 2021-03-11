function solve(input) {
    let pencicals = Number(input.shift());
    let markeri = Number(input.shift());
    let preparat = Number(input.shift());
    let discount = Number(input.shift());

    let priceHimikali = pencicals * 5.80;
    let priceMArkeri = markeri * 7.20;
    let pricePreparat = preparat * 1.20;
    let sum = priceHimikali + priceMArkeri + pricePreparat;
    let priceWithDiscount = sum - ((sum * discount) / 100);
    console.log(priceWithDiscount.toFixed(3));

}
solve([2,
    3,
    2.5,
    25])