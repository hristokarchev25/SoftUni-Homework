function name(input) {
    let result = {};
    let juiceInOrder = {};
    input.forEach(line => {
        let [juice, num] = line.split(" => ");
        num = Number(num);
        if (!result.hasOwnProperty(juice)) {
            result[juice] = num;
        } else {
            result[juice] += num;
        }

        if (result[juice] >= 1000) {
            juiceInOrder[juice] = 0;
        }
    });
    Object.keys(result).forEach(j => {
        if (juiceInOrder[j] !== undefined) {
            juiceInOrder[j] += parseInt(result[j] / 1000);
        }
    })
    Object.keys(juiceInOrder).forEach(element => {
        console.log(`${element} => ${juiceInOrder[element]}`);
    })
}
name(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
function solve(input) {
    const obj = {};
    const juices = [];
 
    input.forEach(element => {
        let [juice, quantity] = element.split(' => ');
        obj[juice] ? obj[juice].quantity += Number(quantity) : obj[juice] = {
            quantity: Number(quantity)
        };
 
        if (obj[juice].quantity >= 1000) {
            if (!juices.includes(juice)) {
                juices.push(juice);
            }
        }
    });
    for (const key of juices) {
        console.log(`${key} => ${parseInt(obj[key].quantity/1000)}`);
    }
}