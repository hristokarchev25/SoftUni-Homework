const routes = {
    'home': document.getElementById('home-section'),
    'create': document.getElementById('create-section'),
    'details': document.getElementById('details-section'),
    'profile': document.getElementById('profile-section'),
};

const router = (pathname) => {
    let [path, id] = pathname.split('/').filter(x => x);

    // Hide all sections
    Object.values(routes).forEach(section => section.style.display = 'none');

    // Show specific section
    routes[path].style.display = 'block';

    switch (path) {
        case 'home':
            renderHomePage();
            break;
        case 'details':
            renderDetailspage(id);
            break;
    }
};

function redirect(path) {
    history.pushState({}, '', path);

    router(path)
}

function renderDetailspage(id) {
    fetch(`https://my-movies-7493e.firebaseio.com//furnitures/${id}.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let detailsViewElement = document.getElementById('details-view');
            detailsViewElement.innerHTML = `
                <p>Make: ${data.make}</p>
                <p>Model: ${data.model}</p>
                <p>Year: ${data.year}</p>
                <p>Description: ${data.description}</p>
                <p>Price: ${data.price}</p>
                <p>Material: ${data.material}</p>
            `;
        });
}

function renderHomePage() {
    let furnitureListElement = document.getElementById('furniture-list');

    // GET all furnitures
    fetch('https://my-movies-7493e.firebaseio.com//furnitures.json')
        .then(res => res.json())
        .then(data => {
            // use template to render
            let dataHtml = Object.keys(data).map(x => furnitureItemTemplate(x, data[x])).join('');

            // append to dom
            furnitureListElement.innerHTML = dataHtml;
        });
}

function onRouteChange(e) {
    if (e.target.tagName != 'A') {
        return;
    }

    e.preventDefault();

    let url = new URL(e.target.href);

    redirect(url.pathname)
}

function onCreateSubmit(e) {
    e.preventDefault();

    let make = formElement.querySelector('#new-make').value;
    let price = formElement.querySelector('#new-price').value;
    let model = formElement.querySelector('#new-model').value;
    let image = formElement.querySelector('#new-image').value;
    let year = formElement.querySelector('#new-year').value;
    let material = formElement.querySelector('#new-material').value;
    let description = formElement.querySelector('#new-description').value;

    let newFurniture = {
        make,
        price,
        model,
        image,
        year,
        material,
        description,
    };

    fetch('https://my-movies-7493e.firebaseio.com//furnitures.json', {
        method: 'POST',
        headers: {
            'content-type': 'applicatoin/json'
        },
        body: JSON.stringify(newFurniture)
    })
        .then(res => res.json())
        .then(data => redirect('home'));
}

document.querySelector('nav').addEventListener('click', onRouteChange);

let formElement = document.getElementById('create-form');
formElement.addEventListener('submit', onCreateSubmit);

router(location.pathname);