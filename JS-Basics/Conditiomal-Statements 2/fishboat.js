function fboat (input)
{
let budegt = Number(input.shift());
let season = input.shift();
let group = Number(input.shift());

let price = 0;

switch (season)
{
    case "Spring":
        price = 3000;
        if (group <= 6) {price *= 0.90;}
        else if (group >= 7 && group <= 11) {price *= 0.85;}
        else if (group > 12) {price *= 0.75;}
        if (group % 2 == 0) {price *= 0.95;}
    break;
    case "Winter":
        price = 2600;
        if (group <= 6) {price *= 0.90;}
        else if (group >= 7 && group <= 11) {price *= 0.85;}
        else if (group > 12) {price *= 0.75;}
        if (group % 2 == 0) {price *= 0.95;}
    break;
    case "Summer":
        price = 4200;
        if (group <= 6) {price *= 0.90;}
        else if (group >= 7 && group <= 11) {price *= 0.85;}
        else if (group > 12) {price *= 0.75;}
        if (group % 2 == 0) {price *= 0.95;}
    break;
    case "Autumn":
        price = 4200;
        if (group <= 6) {price *= 0.90;}
        else if (group >= 7 && group <= 11) {price *= 0.85;}
        else if (group > 12) {price *= 0.75;}
    break;
}
let result = Math.abs(budegt-price);
if (budegt>=price) {console.log(`Yes! You have ${result.toFixed(2)} leva left.`);}
else {console.log(`Not enough money! You need ${result.toFixed(2)} leva.`);}
}
fboat([2000,
    "Winter",13
    ])