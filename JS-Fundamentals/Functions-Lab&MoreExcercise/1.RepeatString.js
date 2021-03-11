function solve (string,number) {
    let result = '';
    for (let i=0;i<number;i++) {
        result += string;
    }
    return result;
}
let result = solve(`abv`,3);
console.log(result);
