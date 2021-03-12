const userModel = firebase.auth();
const db = firebase.firestore();

const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs')

    //home routes
    this.get('/home', function (context) {
        db.collection('offers')
            .get()
            .then(res => {
                context.offers = res.docs.map(offer => { return { id: offer.id, ...offer.data() } })
                extendContext(context)
                    .then(function () {
                        this.partial(`./templates/home.hbs`);
                    })
            })
            .catch(errorHandler);
    });

    //user routes
    this.get('/register', function (context) {

        extendContext(context)
            .then(function () {
                this.partial('./templates/register.hbs');
            });
    });

    this.get('/login', function (context) {

        extendContext(context)
            .then(function () {
                this.partial('./templates/login.hbs');
            });
    });

    this.get('/logout', function (context) {
        userModel.signOut()
            .then(res => {
                clearUserData();
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    this.post('/register', function (context) {
        const { email, password, rePassword } = context.params;

        if (password !== rePassword) {
            return;
        }

        userModel.createUserWithEmailAndPassword(email, password)
            .then(userData => {
                this.redirect('#/login');
            })
            .catch(errorHandler);
    });

    this.post('/login', function (context) {
        const { email, password } = context.params;

        userModel.signInWithEmailAndPassword(email, password)
            .then(userData => {
                saveUserData(userData);
                this.redirect('#/home');
            })
            .catch(errorHandler);
    })
    //offers routes
    this.get('/create-offer', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/createOffer.hbs');
            });
    });

    this.get('/edit-offer/:id', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/editOffer.hbs');
            });
    });

    this.post('/create-offer', function (context) {
        const { productName, price, imageUrl, description, brand } = context.params;
        db.collection('offers').add({
            productName,
            price,
            imageUrl,
            description,
            brand,
            salesman: getUserData().uid
        })
            .then((createdProduct) => {
                console.log(createdProduct);
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    this.get('/details/:offerId', function (context) {
        const { offerId } = context.params;
        db.collection('offers')
            .doc(offerId)
            .get()
            .then(res => {
                const { uid } = getUserData();

                const actualOfferData = res.data();
                const imTheSalesman = actualOfferData.salesman === uid;

                const userIndex = actualOfferData.clients.indexOf(uid);
                const imInTheClientsList = userIndex > -1;

                context.offer = { ...actualOfferData, imTheSalesman, id: offerId, imInTheClientsList };
                extendContext(context)
                    .then(function () {
                        this.partial('./templates/details.hbs');
                    })
                    .catch(errorHandler);
            })
    })
    //delete
    this.get('/delete/:offerId', function (context) {
        const { offerId } = context.params;

        db.collection('offers')
            .doc(offerId)
            .delete()
            .then(() => {
                this.redirect('#/home')
            })
            .catch(errorHandler);
    });

    //edit get and post
    this.get('/edit/:offerId', function (context) {
        const { offerId } = context.params;

        db.collection('offers')
            .doc(offerId)
            .get()
            .then(res => {
                context.offer = { id: offerId, ...res.data() };
                extendContext(context)
                    .then(function () {
                        this.partial('./templates/editOffer.hbs');
                    })
            })
    });

    this.post('/edit/:offerId', function (context) {
        const { offerId, productName, price, brand, description, imageUrl } = context.params;

        db.collection('offers')
            .doc(offerId)
            .get()
            .then(r => {

                return db.collection('offers')
                    .doc(offerId)
                    .set({
                        ...r.data(),
                        productName,
                        price,
                        brand,
                        description,
                        imageUrl
                    })
            })
            .then(r => {
                this.redirect(`#/details/${offerId}`)
            })
            .catch(errorHandler);
    });

    //buy
    this.get('/buy/:offerId', function (context) {
        const { offerId } = context.params;
        const { uid } = getUserData();

        db.collection('offers')
            .doc(offerId)
            .get()
            .then(r => {
                const offerData = { ...r.data() };
                offerData.clients.push(uid);

                return db.collection('offers')
                    .doc(offerId)
                    .set(offerData)
            })
            .then(() => {
                this.redirect(`#/details/${offerId}`);
            })
            .catch(errorHandler);
    });
});


(() => {
    app.run('/home');
})();

function extendContext(context) {
    const user = getUserData();
    context.isLoggedIn = Boolean(user);
    context.userEmail = user ? user.email : '';

    return context.loadPartials({
        'header': './partials/header.hbs',
        'footer': './partials/footer.hbs'
    });
}

function errorHandler(err) {
    console.log(err);
}

function saveUserData(data) {
    const { user: { email, uid } } = data;
    localStorage.setItem('user', JSON.stringify({ email, uid }));
}

function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function clearUserData() {
    this.localStorage.removeItem('user');
}