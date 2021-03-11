function solve() {
    let inputElement = document.getElementById('input');
    let resultElement = document.getElementById('result');
    let selectMenu = document.getElementById('selectMenuTo');

    let binary = document.createElement('option');
    let hexadecimal = document.createElement('option');
    binary.value = 'binary';
    binary.textContent = 'Binary';

    hexadecimal.value = 'hexadecimal';
    hexadecimal.textContent = 'Hexadecimal';

    selectMenu.appendChild(binary);
    selectMenu.appendChild(hexadecimal);

    let btn = document.getElementsByTagName('button')[0];

    btn.addEventListener('click', function () {
        if (selectMenu.value == 'binary') {
            let result = convertToBinary(Number(inputElement.value));
            resultElement.value = result;
        } else if (selectMenu.value == 'hexadecimal') {
            let resultTwo = convertToHex(Number(inputElement.value));
            resultElement.value = resultTwo;
        }
    })

    function convertToBinary(num) {
        return num.toString(2);
    }
    function convertToHex(num) {
        return num.toString(16).toUpperCase();
    }
}