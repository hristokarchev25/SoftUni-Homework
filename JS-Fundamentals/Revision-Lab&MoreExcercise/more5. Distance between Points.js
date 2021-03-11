function solve(xOne,yOne,xTwo,yTwo) {
    let a = Math.abs(xOne-xTwo);
    let b = Math.abs(yOne-yTwo);

    let distance = Math.sqrt((a*a)+(b*b));
    console.log(distance);
}
solve(2,4,5,0);