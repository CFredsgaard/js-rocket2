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
