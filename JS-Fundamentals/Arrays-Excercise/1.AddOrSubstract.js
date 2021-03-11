function addORsubstract(array) {
    let originalSum = 0;
    let newSum = 0;
    let arrayToFill = [];
    for (let i = 0; i < array.length; i++) {
        originalSum += array[i];
        if (array[i] % 2 === 0) {
            arrayToFill[i] = array[i] + i;
        } else {
            arrayToFill[i] = array[i] - i;
        }
    }
    for (let numbers of arrayToFill) {
        newSum += numbers;
    }
    console.log(arrayToFill);
    console.log(originalSum);
    console.log(newSum);

}
addORsubstract([5, 15, 23, 56, 35]);