function ex(input) {
    let badGradeNum = Number(input.shift());
    let command = input.shift();
    let negCounter = 0;
    let lastTask = "";
    let count = 0;
    let solevecounter = 0;
    let isNeededBreak = false;
    let totalgrade = 0;
    while (command != "Enough") {
        let task = command;
        let grade = Number(input.shift());
        lastTask = task;
        count++;
        if (grade <= 4.00) {
            negCounter++;
        }
        solevecounter++;
        totalgrade += grade;
        if (negCounter === badGradeNum) {
            isNeededBreak = true;
            break;
        }
        command = input.shift();
    }
    if (isNeededBreak) { console.log(`You need a break, ${negCounter} poor grades.`); }
    else {
    console.log(`Average score: ${(totalgrade / solevecounter).toFixed(2)}`);
    console.log(`Number of problems: ${solevecounter}`);
    console.log(`Last problem: ${lastTask}`);
    }
}
ex(['6', 'Story',
    '4', 'Spring Time',
    '5', 'Bus',
    '6', 'Enough',
    ''])