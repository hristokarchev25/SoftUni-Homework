
const UserModel = firebase.auth();

const DB = firebase.firestore();

const app = Sammy("#root", function () {

  this.use("Handlebars", "hbs");

  this.get("/home", function (context) {

    DB.collection("offers")
      .get()
      .then((response) => {

        context.offers = [];
        response.forEach((offer) => {

          context.offers.push({
            id: offer.id,
            ...offer.data(),
          });
        });

        extendContext(context)

          .then(function () {
            this.partial("./templates/home.hbs");
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.get("/register", function (context) {

    extendContext(context)
      .then(function () {
        this.partial("./templates/register.hbs");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.get("/login", function (context) {

    extendContext(context)
      .then(function () {
        this.partial("./templates/login.hbs");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.get("/logout", function () {

    UserModel.signOut()

      .then(() => {
        clearUserData();
        this.redirect("/home");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.get("/create-offer", function (context) {

    extendContext(context)
      .then(function () {
        this.partial("./templates/createOffer.hbs");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.get("/edit-offer/:id", function (context) {

    extendContext(context)
      .then(function () {
        this.partial("./templates/editOffer.hbs");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.get("/details/:id", function (context) {

    const { id } = context.params;
    DB.collection("offers")
      .doc(id)
      .get()

      .then((response) => {

        const { uid } = getUserData();

        const actualOfferData = response.data();

        const actualSeller = actualOfferData.salesman === uid;

        const userIndex = actualOfferData.clients.indexOf(uid);

        const inClientList = userIndex > -1;

        context.offer = {
          ...actualOfferData,
          actualSeller,

          id: id,

          inClientList,
        };

        extendContext(context).then(function () {
          this.partial("./templates/details.hbs");
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.post("/register", function (context) {

    const { email, password, rePassword } = context.params;

    if (password !== rePassword) {
      return;
    }

    UserModel.createUserWithEmailAndPassword(email, password)
      .then(() => {

        this.redirect("/login");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.post("/login", function (context) {

    const { email, password } = context.params;

    UserModel.signInWithEmailAndPassword(email, password)
      .then((userData) => {

        saveUserData(userData);

        this.redirect("/home");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.post("/create-offer", function (context) {

    const {
      productName,
      productPrice,
      imageUrl,
      productDescription,
      productBrand,
    } = context.params;

    DB.collection("offers")
      .add({
        productName,
        productPrice,
        imageUrl,
        productDescription,
        productBrand,

        salesman: getUserData().uid,

        clients: [],
      })
      .then(() => {

        this.redirect("/home");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.get("/delete/:id", function (context) {

    const { id } = context.params;

    DB.collection("offers")
      .doc(id)
      .delete()
      .then(() => {

        this.redirect("/home");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.get("/edit/:id", function (context) {

    const { id } = context.params;

    DB.collection("offers")
      .doc(id)
      .get()
      .then((response) => {

        context.offer = {
          id: id,
          ...response.data(),
        };

        extendContext(context)

          .then(function () {
            this.partial("./templates/editOffer.hbs");
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.post("/edit/:id", function (context) {

    const {
      id,
      productName,
      productPrice,
      imageUrl,
      productDescription,
      productBrand,
    } = context.params;

    DB.collection("offers")

      .doc(id)

      .get()

      .then((response) => {

        return (
          DB.collection("offers")

            .doc(id)

            .set({
              ...response.data(),
              productName,
              productPrice,
              imageUrl,
              productDescription,
              productBrand,
            })
        );
      })
      .then(() => {

        this.redirect(`/details/${id}`);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });

  this.get("/buy/:id", function (context) {

    console.log(context.params.id);
    console.log(getUserData().uid);

    const { id } = context.params;

    const { uid } = getUserData();

    DB.collection("offers")
      .doc(id)
      .get()
      .then((response) => {

        const offerData = {
          ...response.data(),
        };

        offerData.clients.push(uid);
        return DB.collection("offers").doc(id).set(offerData);
      })
      .then(() => {

        this.redirect(`/details/${id}`);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });
});

(() => {

  app.run("/home");
})();

function extendContext(context) {

  const user = getUserData();
  context.isLoggedIn = Boolean(user);

  context.loggedUserEmail = user ? user.email : "";


  return context.loadPartials({

    header: "./partials/header.hbs",
    footer: "./partials/footer.hbs",
  });
}

function saveUserData(data) {

  const {
    user: { email, uid },
  } = data;

  localStorage.setItem(
    "user",
    JSON.stringify({
      email,
      uid,
    })
  );
}

function getUserData() {

  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
}

function clearUserData() {

  this.localStorage.removeItem("user");
}
