function solve(input) {
    let countnum = Number(input.shift());
    let leftsum = 0;
    let rightsum = 0;
    let diff = 0;

    for (let index = 1; index <= countnum; index++) {
        leftsum = leftsum + Number(input.shift());
        rightsum = rightsum + Number(input.pop());
        
    }
   
    if (leftsum === rightsum) { console.log(`Yes, sum = ${leftsum}`); }
    else {
        diff = Math.abs(rightsum - leftsum);
        console.log(`No, diff = ${diff}`);
    }

}
solve([2, 9, 90, 60, 40
])