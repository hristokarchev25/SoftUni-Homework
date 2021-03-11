function ico(input) {
    let number = Number(input.shift());
    let count = 1;
    let flag = false;
    for (let rows = 1; rows <= number; rows++) {
        let line = "";
        for (let cols = 1; cols <= rows; cols++) {
            line += count + " ";
            count++;

            if (count > number) {
                flag = true;
                break;
            }
        }
        console.log(line);
        if (flag) { break; }
    }
}
ico([7])