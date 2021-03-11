function solve(arrayOfStrings) {
    let result = arrayOfStrings.sort(firstCriteria);
    console.log(result.join("\n"));
    function firstCriteria(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }
}
solve(['alpha', 'beta', 'gamma']);