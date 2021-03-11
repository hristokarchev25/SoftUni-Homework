function solve (username , password) {
    let reverse = "";
    let attemps = 0;
    let lenght = 0;
    lenght = username.lenght-1;
    while (lenght>=0) {
        reverse = reverse + username[length];
        length--;
    }
    do {
        if (password != reverse) {
            console.log(`Incorrect password. Try again.`);
            password = "" ;
            attemps++;
            if (attemps == 3 && password != reverse) {
                console.log(`User ${username} blocked!`);
                break;
            }
        } else if (password == reverse) {
            console.log(`User ${username} logged in.`);
            break;
        }
    } while (attemps <= 4);
}
solve ('Acer','login','go','let me in','recA');