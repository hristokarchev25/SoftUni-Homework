function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', (e) => {
        let currentValue = e.currentTarget.value;
        let pattern = /[a-z]+@[a-z]+.[a-z]+/;
        let tested = pattern.test(currentValue);
        if (!tested) {
            e.currentTarget.classList.add('error');
        } else {
            e.currentTarget.classList.remove('error');
        }
    });
}