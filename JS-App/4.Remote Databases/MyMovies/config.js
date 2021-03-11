var firebaseConfig = {
    apiKey: "AIzaSyDvPW38MlY5AXkroaFnkzdchrC_CdXhgbo",
    authDomain: "my-movies-7493e.firebaseapp.com",
    databaseURL: "https://my-movies-7493e.firebaseio.com",
    projectId: "my-movies-7493e",
    storageBucket: "my-movies-7493e.appspot.com",
    messagingSenderId: "244188850971",
    appId: "1:244188850971:web:2fae6ae3dc0446e24881be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

let loginBtn = document.getElementById('login-button');

loginBtn.addEventListener('click', onUserLogin);


function onUserLogin(e) {
    let usernameEl = document.getElementById('username');
    let passswordEl = document.getElementById('password');
    let subHeaderEl = document.getElementById('sub-header');
    let loginFormEl = document.getElementById('login-form');

    auth.signInWithEmailAndPassword(usernameEl.value, passswordEl.value)
        .then(res => {
            console.log(`Success`);
            console.log(res);
            subHeaderEl.innerText = `Hello, ${res.user.email}`;
            loginFormEl.style.display = 'none';
            divIdAddMovie.style.display = 'block';
            moviesListEl.style.display = 'block';
            movieDetailsEl.style.display = 'block';
            h2Element.style.display = 'block';
        })
        .catch(err => {
            console.log('err:', err);
        });
}
