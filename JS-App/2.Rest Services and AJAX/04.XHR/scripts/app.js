function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';
   const httpRequest = new XMLHttpRequest();
   const resEl = document.getElementById('res');

   httpRequest.addEventListener('loadend', function () {
      let repos = JSON.parse(this.responseText);

      resEl.innerHTML = repos.map(x => `<p><a href="${x.html_url}" target="_blank">${x.name}</a></p >`).join('');
   });
   httpRequest.open('GET', url);
   httpRequest.send();
}