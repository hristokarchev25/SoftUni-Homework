function solve(input) {
    let destinations = input.shift();

    let line = input.shift();
    while (line !== "Travel") {
        let [command, firstArg, secondArg] = line.split(":");

        switch (command) {
            case "Add Stop":
                let index = Number(firstArg);
                let theString = secondArg;
                // if (!destinations.indexOf("::") && !destinations.indexOf("-")) {
                //}
                destinations = destinations.substr(0, index) + theString + destinations.substr(index);
                console.log(destinations);

                break;
            case "Remove Stop":
                let startIndex = Number(firstArg);
                let endIndex = Number(secondArg);

                toRemove = destinations.substring(startIndex, endIndex + 1);
                destinations = destinations.replace(toRemove, "");
                console.log(destinations);

                break;
            case "Switch":
                let oldString = firstArg;
                let newString = secondArg;
                destinations = destinations.replace(oldString, newString);
                console.log(destinations);
                break;
        }
        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`);

}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);