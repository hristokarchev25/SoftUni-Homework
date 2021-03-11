function solve (input)
{
    let n = Number(input.shift());
    let num = 1;

    while (num <= n) {
        console.log(num.toFixed(2));
        num = (1/num) + 1;
       
    }
    
    
solve ([4])