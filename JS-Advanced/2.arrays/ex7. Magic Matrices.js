function solve(input) {
    let sums = [];
    for (let i = 0; i < input.length; i++) {
        let columnSum = 0;
        sums.push(input[i].reduce((accumulator, value) => accumulator + value));
        for (let j = 0; j < input.length; j++) {
            columnSum += input[j][i];
        }
        sums.push(columnSum);
    }
    let isEqual = Math.max(...sums) === Math.min(...sums);
    console.log(isEqual);
}
solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);
solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);
solve(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);
