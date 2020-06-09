//This is an invisble comment

/* This is also an invisible comment, 
but on multiple...
...lines
*/

//Makes the button that is pressed change color
var buttonChangeColor =function(){
    var currentClassName = document.getElementById('colorButton').className
    //changing class name
    if (currentClassName == 'coolButton'){
        document.getElementById('colorButton').className = 'coolButton purple'; 
    } else {
        document.getElementById('colorButton').className = 'coolButton';
    }  
}

//For the button that makes a div change color
var doCoolStuff = function(){
    var currentClassName = document.getElementById('id_cool').className
    //changing class name
    if (currentClassName == 'cool'){
        document.getElementById('id_cool').className = 'cool red';
    } else {
        document.getElementById('id_cool').className = 'cool';
    }  
}

//Box pops up with name
var sayMyName = function (name){
    alert('My name is: '+name)
}

//Name shows up in console
var consoleName = function (){
    console.log('Cecilie Fredsgaard')
}
//Variable car with properties
var car = {
    //Proporties and proportie values:
    make: 'Tesla',
    model: 'Model 3',
    color: 'Black',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat 1',
        'seat 2',
        'seat 3',
        'seat 4',
        'seat 5'
    ],

    //Methods/functions:
    turnOn: function(){
        this.isTurnedOn = true;
    },

    turnOff: function (){
        this.isTurnedOn = false;
    },
    
    fly: function(){
        alert('fly');
    }, 

    switchCar: function (isOn){
        console.log('turn car '+isOn)
        if (isOn == true) {
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
    },

};