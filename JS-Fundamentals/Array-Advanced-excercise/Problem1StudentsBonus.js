function solve(array) {
    let countOfStudents = Number(array.shift());
    let countOfLectures = Number(array.shift());
    let initialBonus = Number(array.shift());
    let maxAttendance = 0;
    let totalBonus = 0;
    if (countOfLectures > 0) {
        maxAttendance = Math.max(...array);
        totalBonus = (maxAttendance / countOfLectures) * (5 + initialBonus);
    }
    console.log(`Max Bonus: ${Math.round(totalBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}
solve([
    '5', '0', '30',
    '12', '19', '24',
    '16', '20'
]
)