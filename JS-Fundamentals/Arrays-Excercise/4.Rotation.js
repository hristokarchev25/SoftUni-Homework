function arrayRotation(array, countOfRotations) {
    let arrayToFill = [];
    let rotations = countOfRotations % array.length;
    for (let index in array) {
        if (index >= rotations) {
            let element = array[index];
            arrayToFill.push(element);
        }
    }
    for (let index in array) {
        if (index < rotations) {
            let element = array[index];
            arrayToFill.push(element);
        } else {
            break;
        }
    }
    console.log(arrayToFill.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 8);