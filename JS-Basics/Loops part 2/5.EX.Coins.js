function coins(input) {
    let money = Number(input.shift());
    let count = 0;
    let nickles = Math.floor(money * 100);

    while (nickles > 0) {
        if (nickles - 200 >= 0) {
            nickles -= 200;
            count++;
        } else if (nickles - 100 >= 0) {
            nickles -= 100;
            count++;
        } else if (nickles - 50 >= 0) {
            nickles -= 50;
            count++;
        } else if (nickles - 20 >= 0) {
            nickles -= 20;
            count++;
        }
        else if (nickles - 10 >= 0) {
            nickles -= 10;
            count++;
        } else if (nickles - 5 >= 0) {
            nickles -= 5;
            count++;
        } else if (nickles - 2 >= 0) {
            nickles -= 2;
            count++;
        } else if (nickles - 1 >= 0) {
            nickles -= 1;
            count++;
        }
    }
    console.log(count);

}
coins(["0.59"])