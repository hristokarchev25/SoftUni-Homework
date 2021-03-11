function trav(input) {
    let country = input.shift();


    while (country !== "End") {
        let minBudget = Number(input.shift());
        while (minBudget > 0) {
            let saved = Number(input.shift());
            minBudget -= saved;
        }
        console.log(`Going to ${country}!`);
        country = input.shift();
    }
}
trav(["Greece",
    1000,
    200,
    200,
    300,
    100,
    150,
    240,
    "Spain",
    1200,
    300,
    500,
    193,
    423,
    "End"
    ])