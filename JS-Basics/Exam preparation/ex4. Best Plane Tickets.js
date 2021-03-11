function solve(input) {
    let flightName = input.shift();
    let bestPrice = 0;
    let name = "";
    let min = Number.MAX_SAFE_INTEGER;
    while (flightName !== "End") {
        let price = Number(input.shift());
        let minutes = Number(input.shift());
        price *= 1.96;
        if (minutes < min) {
            name = flightName;
            bestPrice = price;
            min = minutes;
        }
        flightName = input.shift();
    }
    console.log(`Ticket found for flight ${name} costs ${bestPrice.toFixed(2)} leva with ${Math.trunc(min/60)}h ${min%60}m stay`);

}
solve(["W64301", 60, 140, "FR9967", 80, 200, "FR0066", 45, 60, "End"]);