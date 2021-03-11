function solve(input) {
    let result = {};
    input.forEach((line) => {
        let [name, price] = line.split(" : ");
        price = Number(price);
        let letter = name[0];

        if (!result[letter]) {
            result[letter] = [];
        }

        let product = { name, price };
        result[letter].push(product);
    });
    let sorted = Object.entries(result).sort((curr, next) => curr[0].localeCompare(next[0]));
    for (let i = 0; i < sorted.length; i++) {
        console.log(sorted[i][0]);

        let sortByName = sorted[i][1].sort((a, b) => a.name.localeCompare(b.name));
        sortByName.forEach((product) => {
            console.log(` ${product.name}: ${product.price}`);
        });
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)