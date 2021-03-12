function addEventListeners() {
    let navigationTemplate = Handlebars.compile(document.getElementById('nav-template').innerHTML);
    let movieCardTemplate = Handlebars.compile(document.getElementById('movie-card-template').innerHTML);

    Handlebars.registerPartial('nav-template', navigationTemplate);
    Handlebars.registerPartial('movie-card', movieCardTemplate);
    
    navigate(location.pathname == '/' ? 'home' : location.pathname.slice(1));

}

///functions

//f1
function navigateHandler(e) {

    e.preventDefault();

    //if (!e.target.classList.contains('nav-link')) {
    if (e.target.tagName != 'A') {
        return;
    }

    let url = new URL(e.target.href);

    navigate(url.pathname.slice(1));
}
//f2 out of dom tree
function onLoginSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.forms['login-form']);

    let email = formData.get('email');
    let password = formData.get('password');

    authService.login(email, password)
        .then(data => {
            navigate('home');
        });
}
//f for add movie
function onAddMovieSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.forms['add-movie-form']);

    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');

    movieService.add({
        title,
        description,
        imageUrl
    }).then(r => {
        navigate('home');
    });
}
addEventListeners();
