function xandy (input)
{
let x1 = Number(input.shift());
let y1 = Number(input.shift());
let x2 = Number(input.shift());
let y2 = Number(input.shift());
let x = Number(input.shift());
let y = Number(input.shift());

let firstCon = (x == x1 || x == x2) && (y >= y1 || y <=y2 );
let secondCon = (y == y1 || y == y2) && (x >= x1 || x <=x2 );

if (firstCon || secondCon)
{
    console.log("Border");
}
else
{
    console.log("Inside/Outside");
    
}
}
xandy ([2,
    -3,
    12,
    3,
    12,
    -1])