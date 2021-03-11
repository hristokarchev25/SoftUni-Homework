function solve(text) {
    let word = text.split(" ");
    let wordsWithHasTag = word.filter((x) => x.startsWith("#") && x.length > 1);
    let validWord = wordsWithHasTag.filter((x) => {
        let chars = x.split('').slice(1)
        return (chars.every((x) => isLower(x) || isUpper(x)));
    }).map((x) => x.substring(1));

    console.log(validWord.join("\n"));
    function isLower(string) {
        let asciiValue = string.charCodeAt(0);
        return asciiValue >= 97 && asciiValue <= 122;
    }
    function isUpper(string) {
        let asciiValue = string.charCodeAt(0);
        return asciiValue >= 65 && asciiValue <= 90;
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')