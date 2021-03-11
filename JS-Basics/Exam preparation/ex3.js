function solve(input) {
    let sushi = input.shift();
    let restaurant = input.shift();
    let porcii = Number(input.shift());
    let order = input.shift();
    let sum = 0;
    let price = 0;
    let dostavka = 0;
    let isError = false;
    switch (restaurant) {
        case "Sushi Zone":
            if (sushi === "sashimi") {
                sum = porcii * 4.99;
            }
            else if (sushi === "maki") {
                sum = porcii * 5.29;
            }
            else if (sushi === "uramaki") {
                sum = porcii * 5.99;
            }
            else if (sushi === "temaki") {
                sum = porcii * 4.29;
            }
            break;
        case "Sushi Time":
            if (sushi === "sashimi") {
                sum = porcii * 5.49;
            }
            else if (sushi === "maki") {
                sum = porcii * 4.69;
            }
            else if (sushi === "uramaki") {
                sum = porcii * 4.49;
            }
            else if (sushi === "temaki") {
                sum = porcii * 5.19;
            }
            break;

        case "Sushi Bar":
            if (sushi === "sashimi") {
                sum = porcii * 5.25;
            }
            else if (sushi === "maki") {
                sum = porcii * 5.55;
            }
            else if (sushi === "uramaki") {
                sum = porcii * 6.25;
            }
            else if (sushi === "temaki") {
                sum = porcii * 4.75;
            }
            break;
        case "Asian Pub":
            if (sushi === "sashimi") {
                sum = porcii * 4.50;
            }
            else if (sushi === "maki") {
                sum = porcii * 4.80;
            }
            else if (sushi === "uramaki") {
                sum = porcii * 5.50;
            }
            else if (sushi === "temaki") {
                sum = porcii * 5.50;
            }
            break;
        default:
            isError = true;
            break;
    }
    if (isError == true)
    {console.log(`${restaurant} is invalid restaurant!`);}
    else {
    if (order === "Y") {
        dostavka = sum * 0.20;
        price = sum + dostavka;
        console.log(`Total price: ${Math.ceil(price)} lv.`);
    } else {
        console.log(`Total price: ${Math.ceil(sum)} lv.`);
    }}
}
solve(["temaki",
    "Asian",
    5,
    "N"])