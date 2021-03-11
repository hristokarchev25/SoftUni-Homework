function solve(input) {
    let num = Number(input.shift());
    let singleDig = num % 10;
    let doubleDig = (num / 10) % 10;
    let tripleDig = num / 100;
    for (let n1 = 1; n1 <= singleDig; n1++) {
        for (let n2 = 1; n2 <= doubleDig; n2++) {
            for (let n3 = 1; n3 <= tripleDig; n3++) {
                console.log(`${n1} * ${n2} * ${n3} = ${n1 * n2 * n3};`);
            }
        }
    }


}
solve([324])