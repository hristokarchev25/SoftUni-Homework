function small (numOne,numTwo,numThree) {
        let output;
        if (numOne < numTwo && numOne < numThree) {
            output = numOne;
        } else if (numTwo < numOne && numTwo < numThree) {
            output = numTwo;
        } else {
            output = numThree;
        }
        return output;
}