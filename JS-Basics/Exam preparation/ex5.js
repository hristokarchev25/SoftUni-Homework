function solve(input) {
    let sumForSinger = Number(input.shift());
    let command = input.shift();
    let money = 0;
    let allguests = 0;
    let allmoney = 0;
    while (command !== "The restaurant is full") {
        let guestsGroups = Number(command);
        allguests += guestsGroups;
        
        if (guestsGroups >= 5) {
            money = guestsGroups * 70;
        } else {
            money = guestsGroups * 100;
        }
        allmoney += money;
        command = input.shift();
    }
    let income = Math.abs(allmoney - sumForSinger);
    if (allmoney >= sumForSinger) {
        console.log(`You have ${allguests} guests and ${income} leva left.`);
    }
    else {
        console.log(`You have ${allguests} guests and ${allmoney} leva income, but no singer.`);

    }
}
solve([2800,
    5,
    5,
    4,
    6,
    6,
    12,
    12,
    "The restaurant is full"])