function grades (number) {
    if (number >= 2.00 && number <= 2.99) {
        return `Fail`;
    } else if (number >= 3.00 && number <= 3.49) {
        return `Poor`;
    } else if (number >= 3.50 && number <= 4.49) {
        return `Good`;
    } else if (number >= 4.50 && number <= 5.49) {
        return `Very good`;
    } else if (number >= 5.50 && number <= 6.00) {
        return `Excellent`;
    }
}
let result = grades (4.20);
console.log(result);

