function solve(arr) {
    const priceBitcoin = 11949.16;
    const priceGold = 67.51;
    let daysCount = 0;
    let totalMoney = 0;
    let money = 0;
    let bitcoinsCount = 0;
    let dayBC = 0;
    for (let i = 0; i < arr.length; i++) {
        daysCount++;
        if (daysCount % 3 === 0) {
            arr[i] = arr[i] - (arr[i] * 0.3);
        }
        money = arr[i] *  priceGold;
        totalMoney += money;
        if (totalMoney >= priceBitcoin) { //while loop,but it breaks;
            totalMoney -= priceBitcoin;
            bitcoinsCount++;
            if (bitcoinsCount === 1) {
                dayBC = daysCount;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsCount}`);
    if (dayBC > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayBC}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
solve([100, 200, 300]);