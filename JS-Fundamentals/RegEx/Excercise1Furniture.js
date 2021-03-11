function solve(input) {
    let totalSpend = 0;
    let arrayOfFurniture = [];
    for (let data of input) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/g.exec(data);
        //console.log(pattern);
        if (pattern) {
            //console.log(pattern.groups);
            arrayOfFurniture.push(pattern.groups.name);
            totalSpend += Number(pattern.groups.price) * Number(pattern.groups.quantity);
        }
    }
    console.log(`Bought furniture:`);
    if (arrayOfFurniture.length > 0) {
        console.log(arrayOfFurniture.join("\n"));
    }
    console.log(`Total money spend: ${totalSpend.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);