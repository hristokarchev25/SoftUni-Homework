function solve(input) {
    let putnici = Number(input.shift());
    let spirki = Number(input.shift());


    for (let i = 1; i <= spirki; i++) {
        let slizashti = Number(input.shift());
        let kachvashti = Number(input.shift());
       
        if (i % 2 === 1) {
            putnici = putnici + (kachvashti + 2) - slizashti;


        } else {
            putnici = putnici + ( kachvashti) - 2 - slizashti;

        }
    }
    
    console.log(`The final number of passengers is : ${putnici}`);

}
solve([25,
    5,
    14,
    15,
    9,
    11,
    10,
    9])