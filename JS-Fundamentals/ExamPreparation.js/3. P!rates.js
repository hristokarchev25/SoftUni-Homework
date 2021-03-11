function solution(input) {
    let text = input.shift();
    let map = {};
    while (text !== "Sail") {
        let [townName, population, gold] = text.split("||");
        text = input.shift();
        if (!map[townName]) {
            map[townName] = {
                population: 0,
                gold: 0,
                isVisiable: true,
            };
        }
        map[townName].population += Number(population);
        map[townName].gold += Number(gold);
    }
    //console.log(map);


    let line = input.shift();
    while (line !== "End") {
        let [command, town, firstArg, secondArg] = line.split("=>");
        switch (command) {
            case "Plunder":
                let killedPeople = Number(firstArg);
                let stolenGold = Number(secondArg);
                if (map[town]) {
                    map[town].population -= killedPeople;
                    map[town].gold -= stolenGold;
                    console.log(`${town} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`);

                    if (map[town].population <= 0 || map[town].gold <= 0) {
                        map[town].isVisiable = false;
                        console.log(`${town} has been wiped off the map!`);
                    }
                }
                break;
            case "Prosper":
                let incresedGold = Number(firstArg);

                if (incresedGold > 0) {
                    console.log(`${incresedGold} gold added to the city treasury. ${town} now has ${map[town].gold} gold.`);
                } else {
                    console.log('Gold added cannot be a negative number!" and ignore the command.');
                }
                break;
        }
        line = input.shift();
    }

    let visibleCitiesOnTheMap = Object.keys(map)
        .filter((townName) => map[townName].isVisiable === true);
    if (visibleCitiesOnTheMap.length > 0) {
        console.log(`Ahoy, Captain! There are ${visibleCitiesOnTheMap.length} wealthy settlements to go to:`);
        let sorted = visibleCitiesOnTheMap.sort((a, b) => (map[b].gold - map[a].gold) || (a.localeCompare(b)));
        for (let town of sorted) {
            let population = map[town].population;
            let gold = map[town].gold;
            console.log(`${town} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }

    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
solution([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]);