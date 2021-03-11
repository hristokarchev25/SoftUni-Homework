function newhome (input)
{
let flower = input.shift();
let count = Number(input.shift());
let budegt = Number(input.shift());

let price = 0;

switch (flower)
{
    case "Roses":
        price  = count*5;
        if (count > 80) {price *= 0.90;}
    break;
    case "Dahlias":
        price = count*3.80;
        if (count > 90) {price *=0.85;}
    break;
    case "Tulips":
        price = count*2.80;
        if (count > 80) {price *=0.85;}
    break;
    case "Narcissus":
        price = count*3;
        if (count < 120) {price *= 1.15;}
    break;
    case "Gladiolus":
        price = count*2.50;
        if (count < 80) {price *= 1.20;}
    break;
}
    let result = Math.abs(budegt-price);
    if (budegt >= price)
    {console.log(`Hey, you have a great garden with ${count} ${flower} and ${result.toFixed(2)} leva left.`);}
    else
    {console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`);}
}
newhome(["Tulips",
    88,
    260
    ])