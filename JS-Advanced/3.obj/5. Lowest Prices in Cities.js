function name(array) {
    let products = {};
    array.forEach(line => {
        let [town, product, productPrice] = line.split(" | ");
        productPrice = Number(productPrice);

        if (!products[product] || products[product].productPrice > productPrice || products[product].town == town) {
            products[product] = {
                town: town,
                productPrice: productPrice,
            };
        }
    });
    Object.keys(products).forEach(product => {
        console.log(`${product} -> ${products[product].productPrice} (${products[product].town})`);
    })
}
name(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
function findLowestPricedProducts(input) {
    let products = new Map;
    for (let priceList of input) {
        let [town, product, price] = priceList.split(/\s+\|\s+/g);
        if (!products.has(product))
            products.set(product, new Map);
        products.get(product).set(town, Number(price));
    }

    for (let [product, towns] of products) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';
        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }

        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}