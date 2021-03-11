function solve (numbers) {
    let firstElement = Number(numbers[0]);
    //let lastElement = Number(numbers[numbers.length-1]);
    let lastElement = Number(numbers.pop());
    console.log(firstElement+lastElement);
    
}
solve ([`20`,`30`,`40`,`80`]);