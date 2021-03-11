function solve(n) {
    for (let rows = 1; rows <= n; rows++) {
        let output = "";
        for (let num = 1; num <= rows; num++) {
            output += `${rows} `
        }
        console.log(output);
    }
}
solve(9);