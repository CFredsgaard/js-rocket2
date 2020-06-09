//Makes the button that is pressed change color
var buttonChangeColor =function(){
    document.getElementById('id_cool2').className = 'cool red';
}

//For the button that makes a div change color
var doCoolStuff = function(){
    document.getElementById('id_cool').className = 'cool red';
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