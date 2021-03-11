function solve(distance , passenges,priceForDiesel) {
    let neededMoney = (distance/100)*7;
    neededMoney += passenges*0.100;
    let money = priceForDiesel*neededMoney;
    console.log(`Needed money for that trip is ${money} lv.`);
}
solve (260,9,2.49);