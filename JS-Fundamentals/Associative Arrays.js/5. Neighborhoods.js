function solve(input) {
    let map = new Map();
    let neighborhoods = input
        .shift()
        .split(", ");
    for (let neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }

    for (let line of input) {
        let [street, person] = line.split(" - ");
        if (neighborhoods.includes(street)) {
            map.get(street).push(person);
        }
    }
    //console.log(map);
    let sorted = Array.from(map)
        .sort((a, b) => b[1].length - a[1].length);

    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        for (const person of kvp[1]) {
            console.log(`--${person}`);
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)



//function solve(ipnut) {
    //let neighborhoodNames = input
        //.shift()
       // .split(', ');
   // let neighborhoods = {};

   // for(const name of neighborhoodNames) {
       // neighborhoods[name]  = [];
    //}

   // for(const line of input) {
       // let[neighbourhood,person] = line.split(" - ");

       // if(neighborhoods[neighbourhood]) {
        //neighborhoods[neighbourhood].push(person);
        //}
   // }

   // let sortedHoodsEntries = Object
    //    .entries(neighborhoods)
       // .sort((a,b)=> b[1].length-a[1].length);
    //for (let kvp of sortedHoodsEntries) {
       // console.log(`${kvp[0]}: ${kvp[1].length}`);
      //  for (const person of kvp[1]) {
      //      console.log(`--${person}`);
      //  }
    //}
//}
//solve();