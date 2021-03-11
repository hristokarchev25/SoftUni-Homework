function solve() {
  let inputText = document.getElementById('input').innerHTML;
  let outputText = document.getElementById('output');

  inputText.match(/(?:\s*)([^.!?]+[.!?]+)/g)
    .map(sentence => sentence.trim())
    .reduce((acc, sentence, index) => {
      if (index % 3 === 0) {
        acc.push([sentence]);
      } else {
        acc[acc.length - 1].push(sentence);
      }
      return acc;
    }, []).forEach(paragraph => {
      let pElement = document.createElement('p');
      pElement.textContent = paragraph;
      outputText.appendChild(pElement);
    });
}

function solve() {
  let text = document.getElementById('input').innerHTML;
  let outputText = document.getElementById('output');


  let sentences = text.split(".");
  while (sentences.length > 0) {
    let currentPar = sentences.splice(0, 3).join('.') + '.';

    let parElement = document.createElement('p');
    parElement.innerText = currentPar;
    outputText.appendChild(parElement);
  }
}