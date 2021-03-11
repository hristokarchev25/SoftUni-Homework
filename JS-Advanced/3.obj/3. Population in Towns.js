function name(array) {
    let town = array.map(x => x.split(' <-> '))
        .reduce(
            (a, x) => {
                let currenTown = x[0];
                let currentPopulation = Number(x[1]);

                if (!a.hasOwnProperty(currenTown)) {
                    a[currenTown] = 0;
                }
                a[currenTown] += currentPopulation;
                return a;
            }, {}
        );
    Object.keys(town).forEach(key => {
        console.log(`${key} : ${town[key]}`);
    })
}
name(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)