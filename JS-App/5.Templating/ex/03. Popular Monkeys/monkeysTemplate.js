import monkeys from './monkeys.js';

let allMonkeys = document.getElementById('monkeysDiv');

fetch('./monkeys.hbs')
    .then(res => res.text())
    .then(monkeysTemp => {
        let monkeysTempalte = Handlebars.compile(monkeysTemp);
        let resHtml = monkeysTempalte({ monkeys });

        allMonkeys.innerHTML = resHtml;

        attached();
    })
    .catch(err => console.error(err));

function attached() {
    allMonkeys.addEventListener('click', (e) => {
        const { target } = e;

        if (target.nodeName === "BUTTON" || target.className === "Info") {
            let divStatus = target.parentNode.querySelector('p');

            if (divStatus.style.display == 'block') {
                divStatus.style.display = 'none';
            } else {
                divStatus.style.display = 'block';
            }
        }
    });
}