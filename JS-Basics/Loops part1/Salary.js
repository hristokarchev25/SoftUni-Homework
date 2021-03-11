function ico(input) {
    let tabs = Number(input.shift());
    let salary = Number(input.shift());

    for (let nums = 1; nums <= tabs; nums++) {
        let apps = input.shift();
        if (apps === "Facebook") { salary -= 150; }
        if (apps === "Instagram") { salary -= 100; }
        if (apps === "Reddit") { salary -= 50; }
    }
    if (salary <= 0) { console.log("You have lost your salary."); }
    else console.log(salary);

}

ico([3,500,"Facebook","Softuni","Instagram"])