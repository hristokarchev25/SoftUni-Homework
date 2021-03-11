function charity (input)
{
let days = Number(input.shift());
let cookers = Number(input.shift());
let cakes = Number(input.shift());
let gofrette = Number(input.shift());
let pancakes = Number(input.shift());

    let numCakes = cakes*45;
    let numGofrettes = gofrette*5.80;
    let numPancakes = pancakes*3.20;
        let sum = (numCakes+numGofrettes+numPancakes)* cookers;
        let fullCharity = sum*days;
        let afterCharity = fullCharity-(1/8*fullCharity);
console.log(afterCharity.toFixed(2));
}
charity ([131,5,9,33,46]);