function solve(stockArray, orderedArray) {
    let products = {};
    stockArray.forEach((el, index) => {
        if (index % 2 === 0) {
            const product = stockArray[index];
            const quantity = Number(stockArray[index + 1]);
            products[product] = quantity;
        }
    });
    for (let i = 0; i < orderedArray.length; i += 2) {
        const product = orderedArray[i];
        const quantity = Number(orderedArray[i + 1]);
        if (products[product] === undefined) {
            products[product] = 0;
        }
        products[product] += quantity;
    }
    for (let product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]);