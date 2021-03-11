function solve(first,second,third) {
    let a = first.length;
    let b = second.length;
    let c = third.length;
    let result = a+b+c;
    console.log(result);
    console.log(Math.floor(result/3));
}
solve('pasta', '5', '22.3');