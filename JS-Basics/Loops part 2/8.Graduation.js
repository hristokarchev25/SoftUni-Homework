function graduation(input) {
    let name = input.shift();
    let sum = 0;
    let years = 1;
    let grade = Number(input.shift());
    let average = 0;
    while (years <= 12) {
        if (grade < 4.00) {
            grade = Number(input.shift());
            continue;
        }
       sum += grade; 
        grade = Number(input.shift());
        years++;
        
    }
    average = sum / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);

}
graduation(["Pesho", "4", "5.5", "6", "5.43", "4.5", "6", "5.55", "5", "6", "6", "5.43", "5"])