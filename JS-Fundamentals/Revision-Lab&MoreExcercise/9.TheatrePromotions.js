function solve(day, age) {
    let sum = 0;
    if (age >= 0 && age <= 18) {
        switch (day) {
            case "Weekday":
                sum = 12;
                break;
            case "Weekend":
                sum = 15;
                break;
            case "Holiday":
                sum = 5;
                break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case "Weekday":
                sum = 18;
                break;
            case "Weekend":
                sum = 20;
                break;
            case "Holiday":
                sum = 12;
                break;
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case "Weekday":
                sum = 12;
                break;
            case "Weekend":
                sum = 15;
                break;
            case "Holiday":
                sum = 10;
                break;
        }
    } else if (age < 0 || age > 122 ) {
        console.log("Error!");
    }
    if (sum > 0) {
        console.log(`${sum}$`);
    }

}
solve("Weekday", -10);