const baseUrl = `https://blog-apps-c12bf.firebaseio.com`
function attachEvents() {
    let postsElement = document.getElementById('posts');
    let loadPosts = document.getElementById('btnLoadPosts');
    let h1Element = document.getElementById('post-title').innerHTML;
    let contentElement = document.getElementById('post-body').innerHTML;
    let ulElement = document.getElementById('post-comments').innerHTML;
    let viewBtn = document.getElementById('btnViewPost');
    loadPosts.addEventListener('click', () => {
        fetch(`https://blog-apps-c12bf.firebaseio.com/posts.json`)
            .then(res => res.json())
            .then(data => {
                let options = Object.keys(data).map(key => `<option value=${key}>${data[key].title}</option>`).join('');
                postsElement.innerHTML = options;
            });
    });

    viewBtn.addEventListener('click', (e) => {
        console.log(e.postsElement.currentTarget.value);
        fetch(`https://blog-apps-c12bf.firebaseio.com/posts/${key}`)
            .then(res => res.json())
            .then(data => {

            });
    });
}

attachEvents();