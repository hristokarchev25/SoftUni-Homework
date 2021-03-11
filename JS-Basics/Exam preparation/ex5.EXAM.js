function solve (input)
{
    let boughtFood = Number(input.shift())*1000;
    let sum = 0;
    let text = input.shift();
    while (text !== "Adopted")
    {
        let eatenFood = Number(text);
        sum +=eatenFood;
        text = input.shift();
    }
    let diff = Math.abs(boughtFood-sum);

    if (sum <= boughtFood){
        console.log(`Food is enough! Leftovers: ${diff} grams.`);   
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);  
    }
}
solve ([4,
    130,
    345,
    400,
    180,
    230,
    120,
    "Adopted"
    ])