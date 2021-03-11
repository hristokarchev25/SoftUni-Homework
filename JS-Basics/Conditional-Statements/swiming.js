function swiming (input)
{
let recSecods = Number(input.shift());
let distance = Number (input.shift());
let timepersec = Number(input.shift());

let mustSwim = (distance*timepersec);
let slowing = Math.floor(distance/15)*12.5;
let sum = (mustSwim+slowing);

if (recSecods > sum) {
console.log(`Yes, he succeeded! The new world record is ${sum.toFixed(2)} seconds.`);}
else { let tryagain = sum-recSecods;
    console.log(`No, he failed! He was ${tryagain.toFixed(2)} seconds slower.`);
}

}
swiming ([55555.67,
    3017,
    5.03
    
    ])
     