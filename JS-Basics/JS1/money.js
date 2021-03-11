function money (input)
{
let usd = Number(input.shift());
let result = (usd * 1.79549).toFixed(2);
console.log(`${result} BGN`);
}
money ([200]);