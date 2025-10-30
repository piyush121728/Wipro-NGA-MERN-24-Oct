// here we can delclare external js and link it to the html file

//declare your fav movies

console.log("External Js");
const favMovies = ["Titanic", "Fight Club", "Openheimer", "American Psycho"];

function displayFavMovies(){
    console.log("List of fav movies : ");
    favMovies.forEach(favMovie=>{
        console.log("->"+favMovie);
    });
};

for (let i = 1; i < 6; i++) {
    console.log(i + ". Piyush");
}


//var

var r = 10;
var r = 11;
r = 11;

//let

let x = 10;
// let x = 11;//redeclaration not allowed
x = 11;

//const

const y = 10;
// const y = 10;//redeclaration not allowed
// y = 12; //reassignment not allowed


displayFavMovies();

