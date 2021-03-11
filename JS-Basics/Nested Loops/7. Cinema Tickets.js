function solve(input) {
    let movie = input.shift();
    let totalTickets = 0;
    let standardCount = 0;
    let studentCount = 0;
    let kidCount = 0;
    while (movie !== "Finish") {
        let seats = Number(input.shift());
        let people = 0;
        let tickets = input.shift();
        while (tickets !== "End") {
            people++;
            totalTickets++;
            switch (tickets) {
                case "standard":
                    standardCount++;
                    break;
                case "student":
                    studentCount++;
                    break;
                case "kid":
                    kidCount++;
                    break;
            }
            if (seats === people) {
                break;
            }
            tickets = input.shift();
        }
        let p1 = (people / seats) * 100;
        console.log(`${movie} - ${p1.toFixed(2)}% full.`);

        movie = input.shift();
    }
    let standardP = (standardCount / totalTickets) * 100;
    let studentP = (studentCount / totalTickets) * 100;
    let kidP = (kidCount / totalTickets) * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentP.toFixed(2)}% student tickets.`);
    console.log(`${standardP.toFixed(2)}% standard tickets.`);
    console.log(`${kidP.toFixed(2)}% kids tickets.`);
}
solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    6,
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])