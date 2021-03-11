/* let add = (a, b) => a + b;
let multiply = (a, b) => a * b;

function calculate(operation,operantOne,operantTwo) {
    let result = operation(operantOne,operantTwo);

    return result;
}

let sum = calculate(add,10,5);
let sum2 = calculate(multiply,5,10);

console.log(`${sum}\n${sum2}`);
 */ ///FirstClassFun

/* let isValidName = function (name) {
    return name.split(" ").length == 2;
}
console.log(''); */
//predicat (false,true)
/* 
let isValid = name => name.split(' ').length == 2;

let nmaes = [
    'Pesho',
    'Pesho Petrov',
    'Gosho Gosho Gosho',
];
let filteredNames = nmaes.filter(isValid);
console.log(filteredNames); */

/* let curry  = function(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
} */
/* let curry2 = (a) => (b) => (c) => {
    let res = a + b + c;
    return res;
} */
/* let sum3b = curry(1);
let sum3c = sum3b(2);
let result = sum3c(3); */

//console.log(result);
//console.log(curry(1)(2)(3));

/* let pow = (y, x) => {
    return x ** y;
};
let sqr = pow.bind(null,2);
console.log(sqr(2));
console.log(sqr(3));
console.log(sqr(4));
 */

 //clouser
 function outerFunc() {
     let outerVar = 'Pesho';

    return function innerFunc() {
         console.log(outerVar);
     }
 }

 let returnedInnerFunc = outerFunc();
 console.log(returnedInnerFunc());
 

