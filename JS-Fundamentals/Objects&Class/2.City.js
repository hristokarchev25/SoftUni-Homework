function solve(name, area, population, country, postCode) {
    let city = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postCode
    };
    for (let key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}
solve("Sofia", "492", "123455", 'BG', '1000');