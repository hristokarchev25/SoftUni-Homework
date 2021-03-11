function solve(arrayOfNames) {
    let info = {};
    arrayOfNames.forEach(name => {
        info[name] = name.length;
    });
    for (let employee in info) {
        console.log(`Name: ${employee} -- Personal Number: ${info[employee]}`);
    }
}
solve(['Silas Bulter', 'Gosho']);