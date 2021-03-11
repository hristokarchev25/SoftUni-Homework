function solve (input)
{
    let food = Number(input.shift());
    let suv = Number(input.shift());
    let hotel = Number(input.shift());

    let road = 420/100*7;
    let benzin = road*1.85;
    let prestoi = (3*food) + (3*suv);
    let dayone = hotel*0.9;
    let daytwo = hotel*0.85;
    let daythree = hotel*0.8;

    let sum = benzin+prestoi+dayone+daytwo+daythree;
    console.log(`Money needed: ${sum.toFixed(2)}`);
    
}
solve ([200,200,1000])