function solve(count, numbers) {
    let arrayToFill = [];
    let emptyString = "";
    for (let i = 0; i < count; i++) {
       arrayToFill[i] = numbers[i];
   }
    for (let i = count - 1; i >= 0; i--) {
      emptyString += arrayToFill[i] + " ";
    }
    console.log(emptyString);
}
solve(4, [20, 30, 40, 50, 60]);