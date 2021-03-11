function loadCommits() {
    let usernames = document.getElementById('username').value;
    let repos = document.getElementById('repo').value;
    let ulElements = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${usernames}/${repos}/commits`)
        .then(rep => rep.json())
        .then((commitsData) => {
            let commits = commitsData.map(x => `<li>${x.commit.author.name}: ${x.commit.message}</li>`).join('');
            ulElements.innerHTML = commits;
        })
        .catch(err => {
            ulElements.innerHTML = `<li>${err.status} (${err.statusText})</li>`
        });
}