function solution(arrayOfNumbers) {
    let arrayToFill = [];
    let arrLength = arrayOfNumbers.sort((a, b) => a - b).length;
    for (let i = 0; i < arrLength; i++) {
        let firstNum = arrayOfNumbers.pop();
        let lastNum = arrayOfNumbers.shift();
        arrayToFill.push(firstNum, lastNum);
    }
    console.log(arrayToFill.join(" "));
}
solution([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])