function solve(array) {
    let arrayToFill = [];
    while (array.length > 0) {
        let currentElement = array.shift();
        if (currentElement < 0) {
            arrayToFill.unshift(currentElement);
        } else {
            arrayToFill.push(currentElement)
        }
    }
    console.log(arrayToFill.join("\n"));
}
solve([7, -2, 8, 9]);