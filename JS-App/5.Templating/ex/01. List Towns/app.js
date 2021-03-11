const elements = {
    input: () => document.getElementById('towns'),
    button: () => document.getElementById('btnLoadTowns'),
    root: () => document.getElementById('root')
}


elements.button().addEventListener('click', getInfo);

function getInfo(e) {
    e.preventDefault();
    const { value } = elements.input();
    const towns = value.split(', ').map((t) => { return { name: t } });
    appendTowns(towns);
}

function appendTowns(towns) {
    getTemplate()
        .then(tempLateSource => {
            const template = Handlebars.compile(tempLateSource);
            const htmlResult = template({ towns });
            elements.root().innerHTML = htmlResult;
            elements.input().value = ' ';
        })
        .catch(err => console.log(err));
}

function getTemplate() {
    return fetch('./template.hbs')
        .then(res => res.text())
        .catch(err => console.log(err));
}