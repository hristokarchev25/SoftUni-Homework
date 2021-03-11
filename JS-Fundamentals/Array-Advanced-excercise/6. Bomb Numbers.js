function solve(arrayOfNumbers, bombInfo) {
    let bomb = bombInfo[0];
    let range = bombInfo[1];
    let index = arrayOfNumbers.indexOf(bomb);
    while (index > -1) {
        arrayOfNumbers.splice(Math.max((index-range),0), Math.min(range,index));
        index = arrayOfNumbers.indexOf(bomb);
        arrayOfNumbers.splice(index,(range + 1));
        index = arrayOfNumbers.indexOf(bomb);
    }
    function sumOfElements (arr) {
        let sum = 0;
        for(let elements of arr) {
            sum += elements;
        }
        return sum;
    }
    console.log(sumOfElements(arrayOfNumbers));
}
solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);