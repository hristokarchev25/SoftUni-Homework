function addItem() {
    let text = document.getElementById('newItemText');
    let data = document.getElementById('newItemValue');

    let select = document.getElementById('menu');

    let option = document.createElement('option');
    option.value = data.value;
    option.innerText = text.value;
    select.appendChild(option);
    //  let option = `<option value='${data.value}'>${text.value}</option>`
    //  section.innerHTML += option;
    text.value = '';
    data.value = '';
}