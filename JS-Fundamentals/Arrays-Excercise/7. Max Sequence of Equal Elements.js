function solve(array) {
    let arrayToFill = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        let currentSequence = [element];

        for (let i = index + 1; i < array.length; i++) {
            let nextElement = array[i];

            if (element === nextElement) {
                currentSequence.push(nextElement);
                index = i;
            } else {
                break;
            }
        }
        if (currentSequence.length > arrayToFill.length) {
            arrayToFill = currentSequence;
        }
    }
    console.log(arrayToFill.join(" "));
}
solve([]);