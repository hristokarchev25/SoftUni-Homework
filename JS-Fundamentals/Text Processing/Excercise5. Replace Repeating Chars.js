function solve(text) {
    let output = "";
    for (let chars of text.split('')) {
        if (!output.endsWith(chars)) {
            output += chars;
        }
    }
    console.log(output);
}
solve('aaaaabbbbbcdddeeeedssaa')