function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listElements = document.getElementById('items');
    let liElememt = document.createElement('li');
    liElememt.innerHTML = inputElement.value;
    inputElement.value = '';
    listElements.appendChild(liElememt);
}
function mouseonEl(e) {
    e.target.style.backgroundColor = 'gray';
    e.target.style.color = 'white';
}
//function mouseout(e) {
 //   e.target.style.backgroundColor = 'white';
//}