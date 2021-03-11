function solve(array) {
    let count = 0;
    let username = array.shift();
    let password = username.split("").reverse().join("");
    let pass = array.shift();
    while (pass !== password) {
        count++;
        if (count >= 4) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
        pass = array.shift();
    }
    if (pass === password) {
        console.log(`User ${username} logged in.`);
    }
}
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);