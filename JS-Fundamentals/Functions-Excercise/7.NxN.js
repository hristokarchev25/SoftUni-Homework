function matrix(num) {
    let output = '';
    for (let i = 1; i <= num; i++) {
        output += num + " ";
    }
    for (let i = 1; i <= num; i++) {
        console.log(`${output}`);
    }
}
matrix(3);