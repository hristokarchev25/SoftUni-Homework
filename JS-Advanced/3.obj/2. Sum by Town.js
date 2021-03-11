function name(input) {
    let obj = {};
    while (input.length != 0) {
        let town = input.shift();
        let num = Number(input.shift());

        if (obj.hasOwnProperty(town)) { //ob[town]
            obj[town] += num;
        } else {
            obj[town] = num;
        }
    }
    console.log(JSON.stringify(obj));
}
name(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])