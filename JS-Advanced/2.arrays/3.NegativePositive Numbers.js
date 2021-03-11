function name(array) {
    let emptyArray = [];
    for (let elements of array) {
        if (elements < 0) {
            emptyArray.unshift(elements);
        } else {
            emptyArray.push(elements)
        }
    }
    console.log(emptyArray.join("\n"));
}
name([7, -2, 8, 9]);
name([3, -2, 0, -1]);