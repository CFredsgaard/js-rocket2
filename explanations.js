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

var fullName = function (firstName, secondName){
    return firstName + ' ' + secondName;
}//This ' ' is added between firstName and secondName so that the browser returns the two names with a space between them

    //When calling names in the browser it can be done in two ways: 

    //This way it returns the two strings inside the function as they ar written, it is important to remember these '' , or else the browser will think it is a variable and not a string and a variable needs to be defined first
    fullName ('Cecilie', 'Fredsgaard')

    //This way it is done by calling variables, so these must first be defined. Since we are calling variables and not strings the '' are omitted
    var myFirstName = 'Cecilie'
    var myLastName = 'Fredsgaard'

    fullName (myFirstName, myLastName)


//If statements, these can be true or false and something happens depending on wether or not 1 or 0 is returned (true or false)
if (true){
    alert('female')
}; //if this "thing" is true the program will alert female

if ('male' == 'male')//the double use of equal signs is necessary when comparing something, if there is only one equal sign it means that string gets assigned a value (string, number etc.)

//We can ask things like the examples below and either true or false will be returned

if (2 == 2){
    alert('true')
};

if (12 > 1){
    alert ('true')
}; //Program alerts 'true'

if (1 > 12){
    alert('true')
}; //Program returns nothing since it has not been specified what it should do in case the if statement isn't true

//This can also be done with variables: 
var numOne = 56
var numTwo = 23

if (numOne > numTwo){
    alert('true')
}; //This will return true, since numTwo is indeed smaller than numOne

//In order to get a return when a if statement isn't true, else is added:
if (12 > 34){
    alert('true')
} else {
    alert('false')
} //In this instance false will be returned since 12 isn't bigger than 34 and the statement therefor is false

//It is also possible to get the program to respond with true if one of two (or more) instances is true 

var name1 = 'Bob'
var name2 = 'Ole'

if (name1 == 'Ole'){
    alert('true')
} else if (name2 == 'Ole'){
    alert('true!')
} else{
    alert('false')
}; 


//This is the OR symbol: ||, the shortcut is: option + i 
//The variables are remembered and doesn't need to be defined again

if (name1 == 'Ole' || name2 == 'Ole'){
    alert('True')
} else{
    alert('False')
};


