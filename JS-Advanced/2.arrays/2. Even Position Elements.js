function name(array) {
    let output = [];
    for (let el in array) {
        if (el % 2 === 0) {
            output.push(array[el]);
        }
   }
   console.log(output.join(" "));
}
name(['20', '30', '40']);