function name(fruit,weight,price) {
    weight = weight/1000;
    let money = weight*price;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
name('orange',2500,1.8);
name('apple', 1563, 2.35);