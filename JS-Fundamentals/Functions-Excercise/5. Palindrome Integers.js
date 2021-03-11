function palindrome(array) {

    for (let numbers of array) {
        let reversedVar = toReverse(numbers);
        console.log(numbers === reversedVar);
    }
    function toReverse(number) {
        reversedString = '';

        while (number > 0) {
            let lastDigit = number % 10;
            reversedString += lastDigit;
            number = Math.floor((number / 10));
        }
        return Number(reversedString);
    }
}
palindrome([123, 323, 421, 121]);