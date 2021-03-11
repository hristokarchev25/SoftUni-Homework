function password(input) {
    let username = input.shift();
    let password = input.shift();
    let yourpass = input.shift();

    while (yourpass !== password) {
        yourpass = input.shift();
    }
    console.log(`Welcome ${username}!`);

}
password(["Ico", "vel", "vel"])