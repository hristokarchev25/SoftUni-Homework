function solve(list) {
    let arrayOfGuests = [];
    for (let information of list) {
        let info = information.split(' ');
        let name = info[0];

        if (!info.includes("not")) {
            if (!arrayOfGuests.includes(name)) {
                arrayOfGuests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (arrayOfGuests.includes(name)) {
                arrayOfGuests = arrayOfGuests.filter((x) => x !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(arrayOfGuests.join("\n"));
}
solve([]);