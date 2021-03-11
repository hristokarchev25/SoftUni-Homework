function graduation(input) {
    let name = input.shift();
    let sum = 0;
    let years = 1;
    let grade = Number(input.shift());
    let average = 0;
    while (years <= 12) {
        if (grade < 4.00) {
            //console.log(`${name} has been excluded at ${years} grade`);
            grade = Number(input.shift());
            break;
        }
        else {
            sum += grade;
            grade = Number(input.shift());
            years++;
        }
    }
    average = sum / 12;
  if (years < 12)  { console.log(`${name} has been excluded at ${years} grade`);}
  else {console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);}

}
graduation(["Gosho",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"
])