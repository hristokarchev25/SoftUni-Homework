function kingkong (input)
{
let budget = Number(input.shift());
let actors = Number(input.shift());
let Pricecloths = Number(input.shift());

let expenses = (budget*0.10);
let sumCloths = (actors*Pricecloths);
if (actors >= 150) {sumCloths = sumCloths*0.90}

let sumClothsANDexpenses = expenses+sumCloths;
let sumMovie = Math.abs(budget-sumClothsANDexpenses);



if (sumClothsANDexpenses > budget) {console.log("Not enough money!");
console.log(`Wingard needs ${sumMovie.toFixed(2)} leva more.`);}
else {console.log("Action!");
      console.log(`Wingard starts filming with ${sumMovie.toFixed(2)} leva left.`);}
}
kingkong([9587.88,
    222,
    55.68, 
    ])