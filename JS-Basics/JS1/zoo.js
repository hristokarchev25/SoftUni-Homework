function zoo (input)
{
    let dog = Number(input.shift() * 2.50);
    let others = Number(input.shift() * 4);
    let result = (dog + others).toFixed(2);
    console.log(`${result} lv.`);   
}

zoo([
13,9
]);