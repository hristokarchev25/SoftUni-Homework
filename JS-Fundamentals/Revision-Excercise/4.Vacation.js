function solve(group, type, day) {
    let sum = 0;
    switch (day) {
        case "Friday":
            if (type === "Students") {
                if (group >= 30) {
                    sum = (group * 8.45) * 0.85;
                } else {
                    sum = group * 8.45;
                }
            } else if (type === "Business") {
                if (group >= 100) {
                    sum = (group - 10) * 10.90;
                } else {
                    sum = group * 10.90;
                }
            } else if (type === "Regular") {
                if (group >= 10 && group <= 20) {
                    sum = (group * 15) * 0.95;
                } else {
                    sum = group * 15;
                }
            }
            break;
        case "Saturday":
            if (type === "Students") {
                if (group >= 30) {
                    sum = (group * 9.80) * 0.85;
                } else {
                    sum = group * 9.80;
                }
            } else if (type === "Business") {
                if (group >= 100) {
                    sum = (group - 10) * 15.60;
                } else {
                    sum = group * 15.60;
                }
            } else if (type === "Regular") {
                if (group >= 10 && group <= 20) {
                    sum = (group * 20) * 0.95;
                } else {
                    sum = group * 20;
                }
            }
            break;
        case "Sunday":
            if (type === "Students") {
                if (group >= 30) {
                    sum = (group * 10.46) * 0.85;
                } else {
                    sum = group * 10.46;
                }
            } else if (type === "Business") {
                if (group >= 100) {
                    sum = (group - 10) * 16;
                } else {
                    sum = group * 16;
                }
            } else if (type === "Regular") {
                if (group >= 10 && group <= 20) {
                    sum = (group * 22.50) * 0.95;
                } else {
                    sum = group * 22.50;
                }
            }
            break;
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(40,"Regular","Saturday");