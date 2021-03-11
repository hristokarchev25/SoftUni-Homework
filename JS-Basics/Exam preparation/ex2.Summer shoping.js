function solve(input) {
    let budget = Number(input.shift());
    let priceTowel = Number(input.shift());
    let discount = Number(input.shift());

    let umbr = priceTowel * (2 / 3);
    let flipflops = umbr * 0.75;
    let bag = (priceTowel + flipflops) * 1/3;
    let sum = priceTowel + umbr + flipflops + bag;
    let final = sum *((100-discount)/100);
    diff = Math.abs(budget - final);
    if (budget >= final) {
        console.log(`Annie's sum is ${final.toFixed(2)} lv. She has ${diff.toFixed(2)} lv. left.`);
    } else {
        console.log(`Annie's sum is ${final.toFixed(2)} lv. She needs ${diff.toFixed(2)} lv. more.`);
    }
}
solve([40,15,5])