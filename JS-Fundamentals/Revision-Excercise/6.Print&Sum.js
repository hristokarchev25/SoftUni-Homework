function solve (start,end) {
    let sum = 0;
    let num = "";
    for (let i = start; i <= end; i++) {
        num += `${i} `;
        sum += i;
    }
    console.log(num);
    console.log(`Sum: ${sum}`);
}
solve (5,10);