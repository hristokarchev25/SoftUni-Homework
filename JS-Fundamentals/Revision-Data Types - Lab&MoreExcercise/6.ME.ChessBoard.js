function solve(number) {
    let currentColor = 'black';
    let prevColor = "";
    console.log('<div class="chessboard">');

    for (let rows = 1; rows<=number;rows++) {
        console.log('  <div>');

        for (let colomns = 1; colomns<=number;colomns++) {
            console.log(`    <span class="${currentColor}"></span>`);

            prevColor = currentColor;
            currentColor = prevColor === 'black' ? 'white' : 'black';
        }
        console.log('  </div>')
        if (number % 2 === 0) {
            prevColor = currentColor;
            currentColor = prevColor === 'black' ? 'white' : 'black';
        }
    }
    console.log('</div>');
}
solve(1);