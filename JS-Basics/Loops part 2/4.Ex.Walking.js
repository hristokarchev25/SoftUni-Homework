function ico(input) {
    let command = input.shift();
    let goal = 10000;
    let lastvalue = 0;
    while (command !== goal) {
        let steps = Number(command);

        if (command === "Going home") {
            lastvalue = steps;
            break;
        }

        goal -= steps;
        command = input.shift();
    }
    if (goal <= 0) { console.log("Goal reached! Good job!"); }
    else { console.log(`${Math.abs(goal)} more steps to reach goal.`) }
}
ico(["1000",
    "1500",
    "2000",
    "6500",
])