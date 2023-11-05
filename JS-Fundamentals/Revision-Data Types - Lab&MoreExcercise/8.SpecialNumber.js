function solve(num) {
    let sum = 0;
    let result = '';
    for (let i = 1; i <= num; i++) {
        i = i.toString();
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        result =
            sum === 5 ||
            sum === 7 ||
            sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }
}
solve(15);


function solve(rangeNumber) {

    for (let index = 1; index <= rangeNumber; index++) {
        let sum = 0;
        index.toString().split('').map((t) => sum += Number(t));
        console.log(`${index} -> ${checkIfNumSpecial(sum)}`);
    }

    function checkIfNumSpecial(numToCheck) {
        if (numToCheck === 5 || numToCheck === 7 || numToCheck === 11) {
            return "True";
        } else {
            return "False";
        }
    }
}
