/* let promise = new Promise((resolve, reject) => {
    console.log('Entering Draft');

    setTimeout(function () {
        //resolve('Just Drafted');
        reject("Not Drafted :(")
    }, 2000);
}); */
function drafted() {
    //return Promise.resolve('Just Drafted');
    return Promise.reject('Not Drafted');
}
let promise = drafted();
promise
    .then(function(res) {
        console.log(res);
        console.log('Feeling happy, Congrats!');
    })
    .catch(function(err) {
        console.log(err);
        console.log("Leave!");
    })
    .finally(()=>{
        console.log('End of story');
    });