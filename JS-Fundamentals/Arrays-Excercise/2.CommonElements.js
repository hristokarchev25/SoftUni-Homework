function commonEl(arrayOne, arrayTwo) {
    let arrayThree = [];
    for (let elements of arrayOne) {
        for (let nextElement of arrayTwo) {
            if (elements === nextElement) {
                arrayThree.push(nextElement);
            }
        }
    }
    console.log(arrayThree.join("\n"));
}
commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);