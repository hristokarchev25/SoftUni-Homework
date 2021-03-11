function deleteByEmail() {
    let resultField = document.getElementById('result');
    let customerEmails = document.querySelectorAll('#customers td:nth-of-type(2)');
    let input = document.querySelector('input[name="email"]');
    let enteredEmail = input.value;
    let isDel = false;
    for (let customer of customerEmails) {
        if (customer.textContent == enteredEmail) {
            customer.parentElement.remove();
            isDel = true;
        }
    }
    if (!isDel) {
        resultField.textContent = 'Not found.';
    }
}