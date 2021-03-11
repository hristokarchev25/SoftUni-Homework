function solve(array) {
    let calories = {};
    array.forEach((element, index) => {
        if (index % 2 === 0) {
            const product = array[index];
            const cal = Number(array[index + 1]);
            calories[product] = cal;
        }
    });
    console.log(calories);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);