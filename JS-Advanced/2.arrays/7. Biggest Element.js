function name(matrix) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    matrix.forEach(row => {
        let currentMax = Number.MIN_SAFE_INTEGER;
        row.forEach(el => {
            if (currentMax < el) {
                currentMax = el;
            }
        })
        if (maxNumber < currentMax) {
            maxNumber = currentMax;
        }
    });
    console.log(maxNumber);
}
name([[20, 50, 10],
[8, 33, 145]]
);
function name(matrix) {
    let maxNums = matrix
    .map(row => Math.max(...row));
    console.log(Math.max(...maxNums));
}