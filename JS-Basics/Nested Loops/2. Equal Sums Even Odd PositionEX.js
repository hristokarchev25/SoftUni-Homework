function ico(input) {
    let numOne = Number(input.shift());
    let numTwo = Number(input.shift());
    let print = "";
    for (let i = numOne; i <= numTwo; i++) {
        let evensum = 0;
        let oddsum = 0;

        let numToText = i.toString();
        for (let j = 0; j < numToText.length; j++) {
            let back = Number(numToText.charAt(j));

            if (j % 2 === 0) {
                evensum += back;
            } else {
                oddsum += back;
            }
        }
        if (evensum === oddsum) {
            print += numToText + " ";
        }
    }
    console.log(print);
}
ico([100000,100050])