const userModel = firebase.auth();
const router = Sammy('#main', function () {

    this.use('Handlebars', 'hbs');


    this.get('#/home', function (context) {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            const { uid, emial } = JSON.parse(userInfo);
            context.loggedIn = true;
            context.email = email;
        }
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/home/home.hbs');
        });
    });

    this.get('#/login', function () {
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'loginForm': './templates/login/loginForm.hbs'
        }).then(function () {
            this.partial('./templates/login/loginPage.hbs');
        });
    });

    this.get('#/register', function () {
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'registerForm': './templates/register/registerForm.hbs'
        }).then(function () {
            this.partial('./templates/register/registerPage.hbs');
        });

    });

    this.get('#/about', function () {
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/about/about.hbs');
        });
    });

    this.get('#/logout', function(context) {
        
    })

    this.post('#/register', function (context) {
        const { email, password, repeatPassword } = context.params;
        if (password !== repeatPassword) {
            let err = document.querySelector('#errorBox');
            err.textContent = "Pls, make sure that the passwords are the same";
            err.style.display = 'block';
            setTimeout(() => {
                err.style.display = 'none';
            }, 3000);
            return;
        }
        userModel.createUserWithEmailAndPassword(email, password)
            .then(data => {
                console.log(data);
                this.redirect('#/login');

            })
            .catch(e => console.log(e))
    });
    this.post('#/login', function (context) {

        const { email, password } = context.params;

        userModel.signInWithEmailAndPassword(email, password)
            .then(({ user: { uid, email } }) => {
                localStorage.setItem('userInfo', JSON.stringify({ uid, email }));
                context.redirect('#/home');
            })
            .catch(e => console.log(e))
    })

});



(() => {
    router.run('#/home');
})();