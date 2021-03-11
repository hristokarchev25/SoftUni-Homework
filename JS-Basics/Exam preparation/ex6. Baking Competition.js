function ico (input)
{
    let chefs = Number(input.shift());
    let sum =0;
    let allSweetsCount=0;
    for (let i=1;i<=chefs;i++)
    {
        let countCookies=0;
        let countCakes =0;
        let countWaffles =0;
        let name = input.shift();
        let sweets = input.shift();
        
        while (sweets !== "Stop baking!")
        {
            let countOfSweets = Number(input.shift());
            allSweetsCount += countOfSweets;
            switch (sweets){
                case "cookies":
                    countCookies+= countOfSweets;
                    sum += countOfSweets*1.50;
                break;
                case "cakes":
                    countCakes += countOfSweets;
                    sum += countOfSweets*7.80;
                break;
                case "waffles":
                    countWaffles += countOfSweets;
                    sum += countOfSweets*2.30;
                break;
            }
            sweets = input.shift();
        }
        console.log(`${name} baked ${countCookies} cookies, ${countCakes} cakes and ${countWaffles} waffles.`);  
    }
    console.log(`All bakery sold: ${allSweetsCount}`);
    console.log(`Total sum for charity: ${sum.toFixed(2)} lv.`);
}
ico ([])