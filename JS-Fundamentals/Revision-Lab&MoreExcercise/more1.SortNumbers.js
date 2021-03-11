function solve(numberOne,numberTwo,numberThree) {
    const sorted = [numberOne,numberTwo,numberThree].sort((a,b)=>b-a);
    console.log(sorted.join("\n"));  
}
solve(2, 1, 3);