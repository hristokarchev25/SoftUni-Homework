function solve(text, wordToCensore) {
    //while (text.indexOf(wordToCensore) > -1) {
    while (text.includes(wordToCensore)) {
        text = text.replace(wordToCensore, "*".repeat(wordToCensore.length))
    }
    console.log(text);
}
solve("A small sentence with some words", 'small');