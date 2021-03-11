function solve(input) {
    let text = input.shift();
    let coolEmojies = [];
    let notCoolCounter = 0;
    let coolThreshold = calculation(text.match(/[0-9]/g));

    let matches = Array.from(text.matchAll(/(::|\*\*)(?<emoji>[A-Z]{1}[a-z]{2,})\1/g));
    for (let match of matches) {

        let emoji = match.groups.emoji;
        let coolness = calculateCoolness(emoji);
        if (coolness >= coolThreshold) {
            coolEmojies.push(match[0])
        } else {
            notCoolCounter++;
        }


    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${coolEmojies.length + notCoolCounter} emojis found in the text. The cool ones are:`);
    console.log(coolEmojies.join('\n'));

    function calculation(arr) {
        result = 1;
        for (let digit of arr) {
            result *= Number(digit);
        }
        return result;
    }
    function calculateCoolness(emoji) {
        let result = 0;
        for (let letter of emoji.split('')) {
            result += letter.charCodeAt(0);
        }
        return result;
    }
}
solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
])