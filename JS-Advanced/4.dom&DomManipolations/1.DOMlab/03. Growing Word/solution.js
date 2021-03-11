function growingWord() {
  let parentElement = document.getElementById('exercise');
  let growingElement = parentElement.lastElementChild;
  let colorEl = document.getElementById('colors');

  if (!growingElement.style.fontSize) {
    growingElement.style.fontSize = '2px';
  } else {
    growingElement.style.fontSize = parseInt(growingElement.style.fontSize) * 2 + 'px';
  }
  let firstColorEl = colorEl.firstElementChild;
  let color = firstColorEl.innerHTML.toLowerCase();
  growingElement.style.color = color;
  colorEl.appendChild(firstColorEl); 
}