function solve(input) {
    let country = input.shift();
    let ured = input.shift();
    let result = 0
    switch (country) {
        case "Russia":
            if (ured === "ribbon") {
                result = 9.100 + 9.400;
            } else if (ured === "hoop") {
                result = 9.300 + 9.800;
            } else if (ured === "rope") {
                result = 9.600 + 9.000;
            }
            break;
        case "Bulgaria":
            if (ured === "ribbon") {
                result = 9.600 + 9.400;
            } else if (ured === "hoop") {
                result = 9.550 + 9.750;
            } else if (ured === "rope") {
                result = 9.500 + 9.400;
            }
            break;
        case "Italy":
            if (ured === "ribbon") {
                result = 9.200 + 9.500;
            } else if (ured === "hoop") {
                result = 9.450 + 9.350;
            } else if (ured === "rope") {
                result = 9.700 + 9.150;
            }
            break;
    }
    let diff = 20 - result;
    let p = (diff / 20) * 100;
    console.log(`The team of ${country} get ${result.toFixed(3)} on ${ured}.`);
    console.log(`${p.toFixed(2)}%`);


}
solve(["Bulgaria", "ribbon"])