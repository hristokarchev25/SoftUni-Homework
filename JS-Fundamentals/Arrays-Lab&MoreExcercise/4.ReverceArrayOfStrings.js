function solve(arrayOfStrings) {
    let arrayToFill = [];
    let emptyString = "";
    for (let i = arrayOfStrings.length - 1; i >= 0; i--) {
        arrayToFill[i] = arrayOfStrings[i];
        emptyString += arrayToFill[i] + " ";
    }
    console.log(emptyString);
}
solve(['a','b','c','d','e']);