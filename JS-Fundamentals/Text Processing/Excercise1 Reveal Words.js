function solve(word, text) {
    let splited = word.split(", ");
    for (let word of splited) {
        let wantedWord = "*".repeat(word.length);
        text = text.replace(wantedWord, word);
    }
    console.log(text);
}
solve('great',
    'softuni is ***** place for learning new programming languages'
)