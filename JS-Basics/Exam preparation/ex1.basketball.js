function solve (input)
{
    let tren = Number(input.shift());

    let jordans = tren*((100-40)/100);
    let jersey = jordans*((100-20)/100);
    let ball = jersey*1/4;
    let acs = ball*1/5;
    let sum = tren+jordans+jersey+ball+acs;
    console.log(sum.toFixed(2));
}
solve([320])