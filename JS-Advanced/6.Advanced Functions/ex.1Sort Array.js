function name(arrayToSort, order) {
    let sortFunction = {
        asc: function (arr) {
            return arr.sort((a, b) => a - b);
        },
        desc: function (arr) {
            return arr.sort((a, b) => b - a);
        }
    }
    let func = sortFunction[order];
    return func(arrayToSort);
}
name([14, 7, 17, 6, 8], 'asc')