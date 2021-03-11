function solve(array) {
    let rooms = array.split("|");
    let health = 100;
    let bitcoins = 0;
    let bestRoom = 0;
    let madeIt = true;
    for (let room of rooms) {
        let splitRooms = room.split(" ");
        let command = splitRooms[0];
        let number = Number(splitRooms[1]);
        bestRoom++;

        if (command === "potion") {
            let healWith = number;
            if (health + number > 100) {
                healWith = 100 - health;
                health = 100;
            } else {
                health += number;
            }
            console.log(`You healed for ${healWith} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === "chest") {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            health -= number;
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                madeIt = false;
                break;
            }
            console.log(`You slayed ${command}.`);
        }
    }
    if (madeIt) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')