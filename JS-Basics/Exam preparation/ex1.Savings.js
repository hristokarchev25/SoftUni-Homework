function solve (input)
{
    let Dessie = Number(input.shift());
    let months = Number(input.shift());
    let debth = Number(input.shift());
    let razhod = 0;
    let sum = 0;
    let formonths = 0;
    let result = 0;
    razhod = Dessie*0.30;
    sum = Dessie - (debth+razhod);
    formonths = months*sum;
    result = (sum/Dessie)*100;
    console.log(`She can save ${result.toFixed(2)}%`);
    console.log(`${formonths.toFixed(2)}`);
}
solve ([1500,3,800])