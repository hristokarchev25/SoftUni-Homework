function solve(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    for (let info in person) {
        console.log(`${info}: ${person[info]}`);
    }
}
solve("Peter", 'Pan', '20');