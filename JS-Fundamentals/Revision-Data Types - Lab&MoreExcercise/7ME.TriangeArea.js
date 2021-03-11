function solve(sideA, sideB, sideC) {
    let p = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
    console.log(area);
}
solve(2,3.5,4);