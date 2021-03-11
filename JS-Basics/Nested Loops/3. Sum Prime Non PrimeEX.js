function ico(input) {
    let toDo = input.shift();
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (toDo !== "stop") {
        let number = Number(toDo);
        if (number < 0) {
            console.log("Number is negative.");
        } else {
            let count = 0;
            for (let j = 1; j <= number; j++) {
                if (number % j == 0) {
                    count++;
                }
            }
            if (count === 2) {
                primeSum += number;
            }
            else {
                nonPrimeSum += number;
            }
        }
        toDo = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
ico([0,
    -9,
    0,
  
    "stop"
])