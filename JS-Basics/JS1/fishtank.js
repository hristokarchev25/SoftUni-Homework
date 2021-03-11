function tank(input)
{
let dul = Number(input.shift());
let shi = Number(input.shift());
let vis = Number(input.shift());
let procent = Number(input.shift());

    let v = (dul * shi * vis);
    let all = (v * 0.001).toFixed(3);
    let p = (procent * 0.01);
    let result = (all * (1-p)).toFixed(3);

 console.log(result);
    
}
tank ([105,77,89,18.5]);