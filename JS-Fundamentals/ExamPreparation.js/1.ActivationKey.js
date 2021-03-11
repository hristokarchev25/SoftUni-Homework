function solve(input) {
    let rawKey = input.shift();
    let line = input.shift();
    while (line !== "Generate") {
        let [command, firstArg, secondArg, thirdArg] = line.split(">>>");
        switch (command) {
            case 'Contains':
                if (rawKey.includes(firstArg)) {
                    console.log(`${rawKey} contains ${firstArg}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                let subString = rawKey.substring(Number(secondArg), Number(thirdArg));
                let flippedString = '';
                if (firstArg === 'Lower') {
                    flippedString = subString.toLowerCase();
                } else {
                    flippedString = subString.toUpperCase();
                }
                rawKey = rawKey.replace(subString, flippedString);
                console.log(rawKey);
                break;
            case 'Slice':
                rawKey = rawKey.substring(0, Number(firstArg)).concat(rawKey.substring(Number(secondArg)));
                console.log(rawKey);
                break;
        }
        line = input.shift();
    }
    console.log(`Your activation key is: ${rawKey}`);
}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
])