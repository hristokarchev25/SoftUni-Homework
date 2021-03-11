function radians (input)
{
 let rad = Number(input.shift());
 let c = ((rad * 180)/Math.PI).toFixed(0);
 console.log(c);
}
radians([6.2832]);