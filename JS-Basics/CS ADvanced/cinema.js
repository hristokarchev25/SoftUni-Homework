function cinema (input)
{
let typeofmovie = input.shift();
let rows = Number(input.shift());
let columns = Number(input.shift());

let price = 0;

switch (typeofmovie)
{
    case "Premiere":
        price = (rows*columns)*12.00;
    break;
    case "Normal":
        price = (rows*columns)*7.50;
    break;
    case "Discount":
        price = (rows*columns)*5.00;
    break;
}
console.log(`${price.toFixed(2)} leva`);

}
cinema (["Discount",12,30])
