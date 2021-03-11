function name(matrix) {
    let pairs = 0;
    matrix.forEach((row, index) => {
        row.forEach((element, i) => {
            if (element === row[i + 1]) {
                pairs++;
            }
            if (matrix[index + 1] && element === matrix[index + 1][i]) {
                pairs++;
            }
        });
    });
    console.log(pairs);
}
name([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);