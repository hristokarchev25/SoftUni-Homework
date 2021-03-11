function getFibonator() {
    let curretnNum = 0;
    let nextNum = 1;

    function fibonacii() { //return() => {}
        let fibNum = curretnNum+nextNum;
        curretnNum = nextNum;
        nextNum = fibNum;

        return curretnNum;
    }
    return fibonacii;
}

function name() {
    let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

}
name();