function market (input)
{
let whiskeyLeva = Number(input.shift());
let beerLiters = Number(input.shift());
let wineLiters = Number(input.shift());
let rakijosLiters = Number(input.shift());
let whiskeyLiters = Number(input.shift());

    let priceRakijosPerLiters = (whiskeyLeva/2) ;
    let priceWinePerLiters = priceRakijosPerLiters-(0.4*priceRakijosPerLiters);
    let priceBeerPerLiters = priceRakijosPerLiters-(0.8*priceRakijosPerLiters);

        let sumRakijos = (rakijosLiters*priceRakijosPerLiters);
        let sumWine = (wineLiters*priceWinePerLiters);
        let sumBeer = (beerLiters*priceBeerPerLiters);
        let sumWhiskey = (whiskeyLeva*whiskeyLiters);

    let finalsum = (sumRakijos+sumWine+sumBeer+sumWhiskey);

 console.log(finalsum.toFixed(2));

}
market ([63.44,
    3.57,
    6.35,
    8.15,
    2.5
    ]);