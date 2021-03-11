function solve(arrayOfMovies) {
    let movies = [];
    arrayOfMovies.forEach(line => {
        const tokens = line.split(' ');
        const addIndex = tokens.indexOf('addMovie');
        const directIndex = tokens.indexOf('directedBy');
        const dataIndex = tokens.indexOf('onDate');

        if (addIndex > -1) {
            movies.push({name: tokens.slice(addIndex + 1).join(" ")})
        }
        if (directIndex > -1) {
            const name = tokens.slice(0, directIndex).join(" ");
            const director = tokens.slice(directIndex + 1).join(" ");

            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            })
        }

        if (dataIndex > -1) {
            const name = tokens.slice(0, dataIndex).join(" ");
            const date = tokens.slice(dataIndex + 1).join(" ");

            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }

    });
    movies.forEach(movie => {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    })
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);