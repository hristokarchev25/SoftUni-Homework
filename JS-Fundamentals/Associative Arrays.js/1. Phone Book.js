function solve(input) {
    let contacts = {};
    for (const line of input) {
        let [name, phone] = line.split(" ");
        contacts[name] = phone;
    }

    Object.keys(contacts).forEach(key => {
        console.log(`${key} -> ${contacts[key]}`);
    });
}
solve(['Tim 08228434',
    'Peter 0990329434',
    'Bill 5435403636',
    'Tim 09823324434']);