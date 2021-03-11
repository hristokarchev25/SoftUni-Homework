function name(matrix) {
    let primarySum = 0;
    let secondarySum = 0;

    let elIndex = 0;

    matrix.forEach(row => {
        primarySum += row[elIndex];
        secondarySum += row[row.length - 1 - elIndex];
        elIndex++;
    });
    console.log(primarySum + ' ' + secondarySum);
}
name([[20, 40],
[10, 60]]
)