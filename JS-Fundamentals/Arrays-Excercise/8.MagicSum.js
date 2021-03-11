function solve(array, magicSum) {
    let arrayToFill = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let nextElement = array[j];
            let isMagic = (element + nextElement) === magicSum;
            if (isMagic) {
                arrayToFill.push(`${element} ${nextElement}`);
            }
        }
    }
    console.log(arrayToFill.join('\n'));
}
solve([1, 7, 6, 2, 19, 23], 8);