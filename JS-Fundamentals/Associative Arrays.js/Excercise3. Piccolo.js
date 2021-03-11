function solve(input) {
    let arrayToFill = [];

    input.forEach(line => {
        let [command, number] = line.split(", ");

        if (command == "IN" && !arrayToFill.includes(number)) {
            arrayToFill.push(number);
        } else if (command == "OUT" && arrayToFill.includes(number)) {
            arrayToFill = arrayToFill.filter((x) => x !== number);
        }
    });
    if (arrayToFill.length > 0) {
        console.log(arrayToFill.sort((a,b)=> a.localeCompare(b)).join("\n"));
    } else {
        console.log(`Parking Lot is Empty`);
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)