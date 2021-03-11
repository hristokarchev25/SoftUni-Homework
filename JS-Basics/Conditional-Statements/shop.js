function shop (input)
{
let excursion = Number(input.shift());
let puzzles = Number(input.shift());
let dolls = Number(input.shift());
let bears = Number(input.shift());
let minions = Number(input.shift());
let trucks = Number(input.shift());


let sum = (puzzles*2.60)+(dolls*3)+(bears*4.10)+(minions*8.20)+(trucks*2);
let toys = puzzles+dolls+bears+minions+trucks;

if (toys >= 50){sum = sum*0.25}
sum = sum *0.9;
if (excursion<=sum) {
    console.log(`Yes! ${(sum-excursion).toFixed(2)} lv left.`); 
} else {console.log(`Not enough money! ${(excursion-sum).toFixed(2)} lv needed`);}
}

shop ([320,
    8,
    2,
    5,
    5,
    1])