function solution(input) {
    let result = new Map();
    for (let line of input) {
        let [country,town,price] = line.split(" > ");
        price = Number(price);

        result.set(country,town,Number(price));
    }

    for (let kvp of result.entries()) {
        console.log(`${kvp[0]} -> ${kvp[1]} -> ${kvp[2]}`);
    }
    

}
solution([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )