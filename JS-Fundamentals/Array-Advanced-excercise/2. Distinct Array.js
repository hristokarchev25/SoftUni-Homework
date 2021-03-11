function solution(array) {
    let noRepeating = removeRepeatingElements(array);
    console.log(noRepeating.join(" "));

    function removeRepeatingElements(arr) {
        let arrayToFill = [];
        for (let elements of arr) {
            if (!arrayToFill.includes(elements)) {
                arrayToFill.push(elements)
            }
        }
        return arrayToFill;
    }
}
solution([1, 1, 3, 2, 3, 4]);