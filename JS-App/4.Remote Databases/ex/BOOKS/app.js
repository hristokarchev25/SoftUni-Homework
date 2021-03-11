//load form
let loadBooks = document.getElementById('loadBooks');
let createBtn = document.getElementById('createFormBtn');
let createTitleInput = document.getElementById('create-title');
let createAuthorInput = document.getElementById('create-author');
let createIsbnInput = document.getElementById('create-isbn');
let booksContainer = document.querySelector('table > tbody');
//edit form
let editForm = document.getElementById('edit-form');
let editBtn = document.getElementById('editFormBtn');
let editTitle = document.getElementById('edit-title');
let editAuthor = document.getElementById('edit-author');
let editIsbn = document.getElementById('edit-isbn');


loadBooks.addEventListener('click', fetchBooks);
createBtn.addEventListener('click', postBooks);
editBtn.addEventListener('click', patchBooks);


function fetchBooks() {
    fetch(`https://books-7777e.firebaseio.com/Books/.json`)
        .then(res => res.json())
        .then(renderBooksFunction)
        .catch((err) => {
            let errorDiv = document.getElementById('error');
            errorDiv.style.display = 'block';
            errorDiv.textContent = err.message;

            setTimeout(() => {
                errorDiv.style.display = 'none';
            }, 3000);
        });
}

function renderBooksFunction(booksData) {

    if (booksContainer.innerHTML != '') {
        booksContainer.innerHTML = '';
    }

    Object
        .keys(booksData)
        .forEach(id => {
            const { title, author, isbn } = booksData[id];

            const tableRow = createElement('tr', '', {}, {},
                createElement('td', title, {}, {}),
                createElement('td', author, {}, {}),
                createElement('td', isbn, {}, {}),
                createElement('td', '', {}, {},
                    createElement('button', 'Edit', { 'data-key': id }, { click: loadBookId }),
                    createElement('button', 'Delete', {'data-key': id}, {click: deleteId})));

            booksContainer.appendChild(tableRow);
        })
}

function postBooks(e) {
    e.preventDefault();
    let obj = {
        title: createTitleInput.value,
        author: createAuthorInput.value,
        isbn: createIsbnInput.value
    }
    fetch(`https://books-7777e.firebaseio.com/Books/.json`, {
        method: "POST",
        body: JSON.stringify(obj)
    }).then(fetchBooks);

    createTitleInput.value = ' ';
    createAuthorInput.value = ' ';
    createIsbnInput.value = ' ';
}

function patchBooks(e) {
    e.preventDefault();

    const id = this.getAttribute('data-key');
    const obj = {
        method: 'PATCH',
        body: JSON.stringify({ title: editTitle.value, author: editAuthor.value, isbn: editIsbn.value })
    }
    editForm.style.display = 'none';
    fetch(`https://books-7777e.firebaseio.com/Books/${id}.json`, obj)
        .then(fetchBooks)
        .catch(err => console.log(err));
}

function loadBookId() {
    const id = this.getAttribute('data-key');
    fetch(`https://books-7777e.firebaseio.com/Books/${id}.json`)
        .then(res => res.json())
        .then(({ title, author, isbn }) => {
            editTitle.value = title;
            editAuthor.value = author;
            editIsbn.value = isbn;

            editForm.style.display = 'block';

            editBtn.setAttribute('data-key', id);
        })
        .catch(err => console.log(err));
}
function deleteId() {
    const id = this.getAttribute('data-key');
    fetch(`https://books-7777e.firebaseio.com/Books/${id}.json`, {
        method: "DELETE"
    })
        .then(fetchBooks)
        .catch(err=>console.log(err));
}

function createElement(type, text, attributes, events, ...children) {
    const domEl = document.createElement(type);

    if (text !== '') {
        domEl.textContent = text;
    }

    Object.entries(attributes)
        .forEach(([eKey, eValue]) => {
            domEl.setAttribute(eKey, eValue);
        });

    Object.entries(events)
        .forEach(([eName, eHandler]) => {
            domEl.addEventListener(eName, eHandler);
        });

    children.forEach(e => {
        domEl.appendChild(e);
    });
    return domEl;
}