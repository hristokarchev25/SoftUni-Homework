function solution(arrayOfNumbers, arrayOfActions) {
    let mustTake = arrayOfActions[0];
    let mustDelete = arrayOfActions[1];
    let mustSearch = arrayOfActions[2];

    arrayOfNumbers.splice(mustTake);
    let secondAction = arrayOfNumbers.splice(mustDelete);
    let result = searching(secondAction,mustSearch);
    function searching(arr,must) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == must) {
                count++;
            }
        }
        return count;
    }
    console.log(`Number ${mustSearch} occurs ${result} times.`);
}
solution([5, 2, 3, 4, 1, 6], [5, 2, 3]);