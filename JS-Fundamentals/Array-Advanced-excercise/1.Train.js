function solve(array) {
    let copy = array.slice();
    let train = copy[0].split(" ").map(x => Number(x));
    let maxCapacity = Number(copy[1]);
    let commands = copy.slice(2);
    for (let command of commands) {
        let commandInfo = command.split(" ");

        if (commandInfo.length === 2) {
            let wagon = Number(commandInfo[1]);
            train.push(wagon);
        } else {
            let otherCommand = Number(commandInfo[0]);

            for (let index in train) {
                let passengers = train[index];
                if ((otherCommand + passengers) <= maxCapacity) {
                    train[index] += otherCommand;
                    break;
                }
            }
        }
    }
    console.log(train.join(" "));
}
solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);