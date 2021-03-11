function area(input)
{
let x1 = Number(input.shift());
let y1 = Number(input.shift());
let x2 = Number(input.shift());
let y2 = Number(input.shift());
let a = Math.abs(x1-x2);
let b = Math.abs(y1-y2);
    let area = (a*b).toFixed(2);
    let perimetur = ((a+b)*2).toFixed(2);
console.log(area);
console.log(perimetur);
}
area ([30,40,70,-10]);