function solve(array) {
    let number = Number(array.shift());
    for (let i = 0; i <= array.length; i++) {
        switch (array[i]) {
            case "chop":
                number /= 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number++;
                console.log(number);
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            case "fillet":
                number = number - 0.20 * number;
                console.log(number);
                break;
        }
    }
}
//solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);