function addAndSubtract(numOne, numTwo, numThree) {
    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    let add = sum(numOne, numTwo);
    let result = subtract(add, numThree);
    console.log(result);
    
}
addAndSubstract(23, 6, 10);