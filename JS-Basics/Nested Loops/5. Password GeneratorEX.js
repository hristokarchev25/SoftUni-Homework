function ico(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let result = "";
    for (let num1 = 1; num1 < n; num1++) {
        for (let num2 = 1; num2 < n; num2++) {
            for (let lett1 = 97; lett1 < 97 + l; lett1++) {
                for (let lett2 = 97; lett2 < 97 + l; lett2++) {
                    for (let num3 = 1; num3 <= n; num3++) {
                        if (num3 > num1 && num3 > num2) {
                            result += `${num1}${num2}${String.fromCharCode(lett1)}${String.fromCharCode(lett2)}${num3} `;
                        }
                    }
                }
            }
        }
    }
    console.log(result);

}
ico([2, 4])