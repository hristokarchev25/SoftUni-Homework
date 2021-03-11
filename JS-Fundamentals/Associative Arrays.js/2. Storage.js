function solve(input) {
    let products = new Map();

    for (let line of input) { //input.forEach(line => {...})
        let [item, count] = line.split(' ');
        count = Number(count);

        if (products.has(item)) {
            let oldCount = products.get(item);
            products.set(item, oldCount + count);
        } else {
            products.set(item, count);
        }
    }

   // for (const key of products.keys()) {
   //     console.log(`${key} -> ${products.get(key)}`);
    //}
    for (let kvp of products.entries()) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])