function attachEvents() {
    let url = `https://rest-messanger.firebaseio.com/messanger.json`;
    let refreshBtn = document.getElementById('refresh');
    let sendBtn = document.getElementById('submit');
    refreshBtn.addEventListener('click', () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let result = Object.values(data).reduce((messages, message) =>
                    (messages += `${message.author}: ${message.content}\n`), '');

                document.getElementById('messages').textContent = result;
            });
    });
    sendBtn.addEventListener('click', () => {
        let author = document.getElementById('author');
        let content = document.getElementById('content');

        fetch(url, {
            method: "POST",
            body: JSON.stringify({ author: author.value, content: content.value })
        });
        author.value = ' ';
        content.value = ' ';
    });

}
attachEvents();
/* function attachEvents() {
    const url = "https://phonebook-nakov.firebaseio.com/phonebook.json";
   
    let btnLoad = document.getElementById("btnLoad");
    let btnCreate = document.getElementById("btnCreate");
    let ul = document.getElementById("phonebook");
   
    btnLoad.addEventListener("click", () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          Object.keys(data).forEach((key) => {
            let li = document.createElement("li");
            li.textContent = `${data[key].person}: ${data[key].phone}`;
            let deleteBtn = document.createElement("button");
   
            deleteBtn.textContent = "DELETE";
            deleteBtn.addEventListener("click", () => {del(key)});
   
            li.appendChild(deleteBtn);
   
            ul.appendChild(li);
          });
        });
    });
   
    btnCreate.addEventListener("click", create);
   
    function del(key) {
      let deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;
      fetch(deleteUrl, { method: "DELETE" });
    }
   
    function create() {
      let person = document.getElementById("person");
      let phone = document.getElementById("phone");
   
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ person: person.value, phone: phone.value })
      });
    }
  }
   
  attachEvents(); */