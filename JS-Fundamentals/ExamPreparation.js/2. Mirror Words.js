function solve(input) {
    let text = input.shift();
    let pattern = /([@#])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(text);
    let mirrorWords = [];
    let wordPiarCount = 0;
    while (match) {
        wordPiarCount++;
        let { firstWord, secondWord } = match.groups;
        let reversedFirstWord = firstWord.split("").reverse().join("");
        if (reversedFirstWord === secondWord) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }
        match = pattern.exec(text);
    }
    if (wordPiarCount < 1) {
        console.log('No word pairs found!');
    } else {
        console.log(`${wordPiarCount} word pairs found!`);
    }
    if (mirrorWords.length < 1) {
        console.log("No mirror words!");
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(", "));
    }
}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);