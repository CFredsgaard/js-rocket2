// Explanations - Variables

// Variables are something (with a NAME) that refers to something else (a VALUE) 
var NAME = 'VALUE';

//What can be refered to/what can the value be?
var favColor = 'blue'; //text, often called a string
var myFavColors = ['blue', 'pink', 'purple'] //arrays, this is basically a list
var numOfFavColors = 3; //numbers, the quotes are left out to make it a number, this means it can be used for math
var hasGotFavColors = true; //boolean, this is a true/false statment, it is like numbers since true can be represented as 1 while false can be represented by 0

var cecilieObject = {
    firstName: 'Cecilie',
    lastName: 'Fredsgaard',
    favColors: ['blue', 'pink', 'purple']
    yearsLived: 23,
    isFemale: true
}; //it is like the array, but you can give every list item a name

//JS knows these things and they can be reached with . notation like this:
cecilieObject.lastName //This needs to be done in chrome console to see anything returned


//Explanations - Functions

//A function is something that can be reused, it is much like a variable and can actually be stored inside a variable or a variable can refer to a function 
function NAME () {} //these () are what makes it a function and the stuff that happens inside the function (called the method) is written between these {}

//Functions can be written in two ways: 
function whatIsMyFavColor () {}
var whatIsMyFavColor = function () {} //This way there are only variables, but the functions are different from the other variables since they have their ()

var doSomething = function () {
    console.log("Do Something!!!")
} //This doesn't return anything, it just deos something, it says undefined in the web browsers console

var whatIsMyFavColor = function () {
    return 'blue';
} //This one is defined and it returns blue

var whatIsMyFavColor = function () {
    return true;

    return 3;
    
    return 'blue';
} //Anything after return doesn't run, therefor in the above example the only information we get out is: true


var area = function (width, height) {
    return width*height
}

