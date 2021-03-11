function solve(input) {
    let message = input.shift();

    let line = input.shift();
    while (line !== "Reveal") {
        let [command, firstArg, secondArg] = line.split(":|:");
        let hasErrir = false;
        switch (command) {
            case "InsertSpace":
                let index = Number(firstArg);
                message = message.substring(0, index) + " " + message.substring(index);
                break;
            case "Reverse":
                if (message.includes(firstArg)) {
                    //slice
                    message = message.replace(firstArg, '');
                    //reverse
                    //let reversed = message.split('').reverse().join('');
                    let reversedString = '';
                    for (const char of firstArg) {
                        reversedString = char + reversedString;
                    }
                    //add to end
                    message += reversedString;
                } else {
                    console.log(`error`);
                    hasErrir = true;
                }
                break;
            case "ChangeAll":
                while (message.includes(firstArg)) {
                    message = message.replace(firstArg, secondArg);
                }
                break;
        }
        if (!hasErrir) {
            console.log(message);
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);