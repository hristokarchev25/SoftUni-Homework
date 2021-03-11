function solve(input) {
    let students = new Map();
    for (let line of input) {
        let lineArr = line.split(" ");
        let name = lineArr.shift();
        let grades = lineArr.map(x => Number(x)); //.map(Number);

        if (students.has(name)) {
            let oldGrades = students.get(name);
            students.set(name, oldGrades.concat(grades));
        } else {
            students.set(name, grades);
        }
    }
    let studentEntries = Array.from(students.entries());
    let sorted = studentEntries.sort((a, b) => {
        return avg(a[1]) - avg(b[1]);
    });

    function avg(grades) {
        let sum = 0;
        for (let grade of grades) {
            sum += grade;
        }
        return sum / grades.length;
    }
    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].join(", ")}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);