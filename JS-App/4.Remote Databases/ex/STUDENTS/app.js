let addBtn = document.getElementById('add-button');
let table = document.getElementsByTagName('tbody')[0];

loadData()
addBtn.addEventListener('click', addStudent);

async function addStudent(e) {
    e.preventDefault();
    let newStudent = JSON.stringify(await getFormInformation());
    console.log(newStudent)
    await sendRequest(`https://students-e6332.firebaseio.com/Students/.json`, 'POST', newStudent);
    loadData();
}

async function loadData() {
    table.innerHTML = '';
    let data = await sendRequest(`https://students-e6332.firebaseio.com/Students/.json`, 'GET');
    for (const key in data) {
        genarateStudentHTML(data[key]);
    }
}

async function checkId() {
    let data = await sendRequest(`https://students-e6332.firebaseio.com/Students/.json`, 'GET');
    let last = 0;
    for (const key in data) {
        last = data[key].ID;
    }
    return last;
}

async function getFormInformation() {
    //Checker for empty fields can be added
    let id = await checkId();
    id === undefined ? id = 1 : id++;
    return {
        ID: id,
        FirstName: document.getElementById('firstname').value,
        LastName: document.getElementById('lastname').value,
        FacultyNumber: document.getElementById('faculty-number').value,
        Grade: document.getElementById('grade').value
    }
}

function genarateStudentHTML(studentObj) {
    let newStudent =
        `<tr>` +
        `<td>${studentObj.ID}</td>` +
        `<td>${studentObj.FirstName}</td>` +
        `<td>${studentObj.LastName}</td>` +
        `<td>${studentObj.FacultyNumber}</td>` +
        `<td>${studentObj.Grade}</td>` +
        `</tr>`;
    table.innerHTML += newStudent;
}

async function sendRequest(url, method, body) {
    let requestObj = {
        method,
        body
    }
    if (body === undefined) {
        delete requestObj.body;
    }
    try {
        let response = await fetch(url, requestObj);
        if (response.status !== 200) {
            throw new Error('Something went wrong');
        }
        let data = await response.json();
        return data;
    } catch (error) {
        //Handle errors
    }
}