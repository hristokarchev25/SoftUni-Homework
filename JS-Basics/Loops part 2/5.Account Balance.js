function abbb(input) {
    let n = Number(input.shift());
    let total = 0;
    let current = 1;
    let text = input.shift();

    while (current <= n) {
        let amount = Number(text);

        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }

        total += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        text = input.shift();
        current++;
    }
    console.log(`Total: ${total.toFixed(2)}`);

}
abbb(["3","5.51","69.50","10"])