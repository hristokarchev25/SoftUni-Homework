function solve (arrayOne,arrayTwo) {
    let arrayThree = [];
    let result;
    for (let index in arrayOne) {
        if (index % 2 === 0) {
            result = Number(arrayOne[index])+Number(arrayTwo[index]);
        } else {
            result = arrayOne[index]+arrayTwo[index];
        }
        arrayThree.push(result);
    }
    console.log(arrayThree.join(" - "));
}
solve (['5','15','23','56','35'],
    ['17','22','87','36','11']);