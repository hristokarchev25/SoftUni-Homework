function ico(input) {
    let shirina = Number(input.shift());
    let visochina = Number(input.shift());
    let dulbochina = Number(input.shift());
    let priority = input.shift();
    let v = shirina * visochina * dulbochina;
    let tax = 0;

    if (v <= 50) {
        tax = 0;
    } else {
        switch (priority) {
            case "true":
                if (v >= 50 && v <= 100) {
                    tax = 0;
                } else if (v > 100 && v <= 200) {
                    tax = 10;
                } else if (v > 200 && v <= 300) {
                    tax = 20;
                }
                break;
            case "false":
                if (v >= 50 && v <= 100) {
                    tax = 25;
                } else if (v > 100 && v <= 200) {
                    tax = 50;
                } else if (v > 200 && v <= 300) {
                    tax = 100;
                }
                break;
        }
    }
    console.log(`Luggage tax: ${tax.toFixed(2)}`);
}
ico([4,5,6,"true"])