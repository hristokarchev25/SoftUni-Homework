function solve(input) {
    let location = input.shift();
    let typeRoom = input.shift();
    let days = Number(input.shift());
    let sum = 0;
    switch (location) {
        case "Mediterranean":
            if (typeRoom === "standard cabin") {
                sum = days * 27.50 * 4;
            }
            else if (typeRoom === "cabin with balcony") {
                sum = days * 30.20 * 4;
            }
            else if (typeRoom === "apartment") {
                sum = days * 40.50 * 4;
            }
            break;
        case "Adriatic":
            if (typeRoom === "standard cabin") {
                sum = days * 22.99 * 4;
            }
            else if (typeRoom === "cabin with balcony") {
                sum = days * 25.00 * 4;
            }
            else if (typeRoom === "apartment") {
                sum = days * 34.99 * 4;
            }
            break;
        case "Aegean":
            if (typeRoom === "standard cabin") {
                sum = days * 23.00 * 4;
            }
            else if (typeRoom === "cabin with balcony") {
                sum = days * 26.60 * 4;
            }
            else if (typeRoom === "apartment") {
                sum = days * 39.80 * 4;
            }
            break;
    }
    if (days > 7) {
        sum *= 0.75;
    }
    console.log(`Annie's holiday in the ${location} sea costs ${sum.toFixed(2)} lv.`);


}
solve(["Aegean", "standard cabin", 10])