function solve(input) {
    let money = Number(input.shift());
    let gender = input.shift();
    let age = Number(input.shift());
    let sport = input.shift();
    let price = 0;
    switch (gender) {
        case "m":
            if (sport === "Gym") {
                price = 42;
            }
            else if (sport === "Boxing") {
                price = 41;
            }
            else if (sport === "Yoga") {
                price = 45;
            }
            else if (sport === "Zumba") {
                price = 34;
            }
            else if (sport === "Dances") {
                price = 51;
            }
            else if (sport === "Pilates") {
                price = 39;
            }
            break;
        case "f":
            if (sport === "Gym") {
                price = 35;
            }
            else if (sport === "Boxing") {
                price = 37;
            }
            else if (sport === "Yoga") {
                price = 42;
            }
            else if (sport === "Zumba") {
                price = 31;
            }
            else if (sport === "Dances") {
                price = 53;
            }
            else if (sport === "Pilates") {
                price = 37;
            }
            break;
    }
    if (age <= 19) {
        price *= 0.80;
    }
    if (money >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }
    else {
        let diff = Math.abs(price - money);
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }
}
solve([20,"f",15,"Yoga"])