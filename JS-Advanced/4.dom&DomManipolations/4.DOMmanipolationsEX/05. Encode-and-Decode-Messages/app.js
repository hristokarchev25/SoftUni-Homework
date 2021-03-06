function encodeAndDecodeMessages() {
    let divs = document.querySelectorAll('main div textarea');
    let btns = document.querySelectorAll('button');

    let encodeTextArea = divs[0];
    let decodeTextArea = divs[1];

    let encodeBtn = btns[0];
    let decodesBtn = btns[1];

    encodeBtn.addEventListener('click', () => {
        let text = encodeTextArea.value;
        let encodeText = encodeAndDecode(text, 1);
        decodeTextArea.value = encodeText;
        encodeTextArea.value = '';
    });

    decodesBtn.addEventListener('click', () => {
        let text = decodeTextArea.value;
        let decodedText = encodeAndDecode(text, -1);
        decodeTextArea.value = decodedText;
    });

    function encodeAndDecode(text, coeficient) {
        return [...text].map(x => String.fromCharCode(x.charCodeAt(0) + coeficient)).join('');
    }
}
/* function encodeAndDecodeMessages() {
    const divs = document.querySelectorAll('main div textarea');
    const buttons = document.querySelectorAll('button');

    const encodeTextArea = divs[0];
    const decodeTextArea = divs[1];

    const encodeButton =  buttons[0];
    const decodeButton =  buttons[1];

    encodeButton.addEventListener('click', encodeText);
    decodeButton.addEventListener('click', decodeText);

    function encodeText(){
        let text = encodeTextArea.value;
        let encodedText = encodeAndDecode(text, 1);
        decodeTextArea.value = encodedText;
        encodeTextArea.value = '';
    }

    function decodeText(){
        let text = decodeTextArea.value;
        let decodedText = encodeAndDecode(text, -1);
        decodeTextArea.value = decodedText;
    }

    function encodeAndDecode(text, coeficient) {
        return [...text]
            .map(x => String.fromCharCode(x.charCodeAt(0) + coeficient))
            .join('');
    }
  } */