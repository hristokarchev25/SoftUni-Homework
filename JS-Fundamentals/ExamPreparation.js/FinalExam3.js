function solve(input) {
    let objPlants = {};
    let plantsCount = input.shift();
    for (let i = 0; i < plantsCount; i++) {
        let [plant, rarity] = input.shift().split("<->");
        rarity = Number(rarity);
        objPlants[plant] = { rarity, ratings: 0, totalRatings : 0 };
    }
    //console.log(objPlants);
    // console.log(input);
 
    let line = input.shift();
    while (line !== "Exhibition") {
        let index = line.split(": ");
        let command = index[0];
        let [plantName, arg] = index[1].split(" - ");
 
        switch (command) {
            case "Rate":
                let addRating = Number(arg);
 
                objPlants[plantName].ratings += addRating;
                objPlants[plantName].totalRatings += 1;
                break;
            case "Update":
                let newRarity = Number(arg);
                objPlants[plantName].rarity = newRarity;
                break;
 
            case "Reset":
                objPlants[plantName].ratings = 0;
                break;
            default:
                console.log("error");
                break;
        }
 
        line = input.shift();
    }
 
    //console.log(objPlants);
    let plantEntries = Object.entries(objPlants);
    let sorted = plantEntries.sort((a, b) => {
        if (a[1].rarity == b[1].rarity) {
            return b[1].ratings - a[1].ratings;
        } else {
            return b[1].rarity - a[1].rarity;
        }
    });
 
    console.log(`Plants for the exhibition:`);
    for (let kvp of sorted) {
        console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${(kvp[1].ratings / kvp[1].totalRatings).toFixed(2)}`);
    }
 
}
solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);