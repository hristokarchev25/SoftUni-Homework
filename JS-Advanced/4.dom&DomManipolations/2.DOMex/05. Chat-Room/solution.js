function solve() {

   //let sended = document.getElementsByClassName('message my-message');
   ////let chat = document.getElementById('chat_messages');

  // let btn = document.getElementById('send').addEventListener('click',chat.appendChild(sended));
  /// btn.textContent = '';

  let sendButton = document.querySelector('button#send');
  let sendTextArea = document.querySelector('textarea#chat_input');
  let chatMessages = document.getElementById('chat_messages');

  sendButton.addEventListener('click', (ev)=>{
     let message = sendTextArea.value;
     let myMessage = document.createElement('div');
     myMessage.classList.add('message');
     myMessage.classList.add('my-message');
     myMessage.textContent = message;
     chatMessages.appendChild(myMessage);
     sendTextArea.value = '';
  });
}

