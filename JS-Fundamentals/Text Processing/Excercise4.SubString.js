function solve(word, text) {
    text = text.toLowerCase();
    let lowerdCasedWord = word.toLowerCase();

    if (text.split(" ").includes(lowerdCasedWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
solve('javascript',
    'JavaScript is the best programming language'
);