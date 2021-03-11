function ico(input) {
    let neededmoney = Number(input.shift());
    let JessMoney = Number(input.shift());

    let dayscounter = 0;
    let spendcounter = 0;
    while (neededmoney > JessMoney) {
        dayscounter++;
        let command = input.shift();
        let money = Number(input.shift());

        if (command === "spend") {
            JessMoney -= money;
            if (JessMoney < 0)
            {
                JessMoney = 0;
            }
            spendcounter++;
        }
        else {
            JessMoney += money;
            spendcounter = 0;
        }
        if (spendcounter == 5)
        {
            break;
        }
        
    }
    if (JessMoney >= neededmoney) {
        console.log(`You saved the money for ${dayscounter} days.`);
    }
    else  {
        console.log(`You can't save the money.`);
        console.log(`${dayscounter}`);
    }
}
ico(["2000",
   "1000",
   "spend",
   "1200",
   "save",
   "2000"
    ])