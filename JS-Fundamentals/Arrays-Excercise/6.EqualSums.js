function equalSums(array) {
    let output = 'no';
    for (let index = 0; index < array.length; index++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < index; i++) { //SUM FOR LEFT SIDE
            let leftNum = array[i];
            leftSum += leftNum;
        }
        for (let j = index + 1; j < array.length; j++) {
            let rightNum = array[j];
            rightSum += rightNum;
        }
        if (rightSum === leftSum) {
            output = index;
            break;
        }
    }
    console.log(output);
}
equalSums([1]);