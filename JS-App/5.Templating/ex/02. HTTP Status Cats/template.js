let allCatsElement = document.getElementById('allCats');

Promise.all([
    getTemplate('./template.hbs'),
    getTemplate('./cat.hbs')
])
    .then(([tSource, catSrc]) => {

        Handlebars.registerPartial('cat', catSrc);

        let template = Handlebars.compile(tSource);
        let resultHtml = template({ cats });
        allCatsElement.innerHTML = resultHtml;
        attached();
    })
    .catch(err => console.error(err));


function getTemplate(templateLocation) {
    return fetch(templateLocation)
        .then(res => res.text());
}
function attached() {
    allCatsElement.addEventListener('click', (e) => {
        const { target } = e;

        if (target.nodeName === "BUTTON" && target.className === "showBtn") {
            let divStatus = target.parentNode.querySelector('div.status');

            if (divStatus.style.display == 'none') {
                divStatus.style.display = 'block';
            } else {
                divStatus.style.display = 'none';
            }
        }
    });
}