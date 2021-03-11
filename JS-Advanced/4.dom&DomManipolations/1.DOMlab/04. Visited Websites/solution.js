function solve() {
  //let linkElements = document.getElementsByClassName('link-1');
  let linkElements = document.querySelectorAll('.link-1 a');
  for (let linkEl of linkElements) {
    linkEl.addEventListener('click', onClickElement)
  }

  function onClickElement(e){
    let paragraphEl = e.currentTarget.nextElementSibling;
    let visitedCount = Number(paragraphEl.innerText.split(' ')[1]);
    visitedCount++;
    paragraphEl.innerText = `visited ${visitedCount} times`
  }
}