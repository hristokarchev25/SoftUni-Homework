function solve(array) {
    let firstSum = 0;
    let secondSum = 0;
    let output = "";
    for (let elements of array) {
        firstSum += elements;
        secondSum += 1/elements;
        let string = elements.toString();
        output += string;
    }
    console.log(firstSum);
    console.log(secondSum.toFixed(4));
    console.log(output);  
}
solve([2, 4, 8, 16])