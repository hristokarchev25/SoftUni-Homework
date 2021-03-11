function ico(input) {
    let favbook = input.shift();
    let booksNum = Number(input.shift());

    let counter = 0;
    let bookIsFound = false;

    let nextbook = input.shift();

    while (counter < booksNum) {
        if (nextbook === favbook) {
            bookIsFound = true;
            break;
        }
        counter++;
        nextbook = input.shift();
    }
    if (bookIsFound == false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksNum} books.`);
    }
    else {
        console.log(`You checked ${counter} books and found it.`);
    }
}
ico(["Java","4","fas","safasf","Java","adasfaf"])