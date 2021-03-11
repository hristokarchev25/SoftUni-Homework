function solve(num) {
    let firstLetter = "";
    let secondLetter = "";
    let thirdLetter = "";

    for (let i = 0; i < num; i++) {
        firstLetter = String.fromCharCode(i + 97);
        for (let j = 0; j < num; j++) {
            secondLetter = String.fromCharCode(j + 97);
            for (let k = 0; k < num; k++) {
                thirdLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
                
            }
        }
    }
}
solve(1);