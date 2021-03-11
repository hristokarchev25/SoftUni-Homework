let signBtn = document.getElementById('signUp');
let signForm = document.getElementById('registerForm');

let loginBtn = document.getElementById('loginBtn');
let loginForm = document.getElementById('loginForm');

let verifyLink = document.getElementById('verified');

signBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let emailInput = document.getElementById('emailInput');
    let passwordInput = document.getElementById('passwordInput');

    if (emailInput.value != "" && passwordInput.value.length >= 6) {
        firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
            .then(data => {
                console.log(data);
                signForm.style.display = 'none';
                loginForm.style.display = 'block';
            })
            .catch(err => {
                console.log(err);
            });
    }
});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let loginEmail = document.getElementById('emailLoginInput');
    let loginPassword = document.getElementById('passwordLoginInput');

    firebase.auth().signInWithEmailAndPassword(loginEmail.value, loginPassword.value)
        .then(verifyLink.style.display = 'block')
        .catch(err => {
            console.log(err);
        });
});