function solve (input)
{
    let lemons = Number(input.shift());
    let sugar = Number(input.shift());
    let water = Number(input.shift());

    let juice = lemons*980;
    let lemonade = juice+water*1000+(0.30*sugar);
    let soldCups= Math.floor(lemonade/150);
    let sum = soldCups*1.2;
    console.log(`All cups sold: ${soldCups}`);
    console.log(`Money earned: ${sum.toFixed(2)}`);
}
solve ([5,3.5,5]);