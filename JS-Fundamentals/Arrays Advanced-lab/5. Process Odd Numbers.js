function solve(array) {
    let oddPosition = filtering(array);
    let doubbled = oddPosition.map(y => y * 2);
    let rev = doubbled.reverse();
    console.log(rev.join(" "));

    function filtering(arr) {
        let arrayToFill = [];
        for (let index in arr) {
            let oddNums = arr[index];
            if (index % 2 !== 0) {
                arrayToFill.push(oddNums);
            }
        }
        return arrayToFill;
    }
}
solve([3, 0, 10, 4, 7, 3]);