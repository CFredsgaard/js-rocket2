//I want to create my own object: the car is my object and everything inside these {} are the obejct's proporties and their values 
var car = {
    make: 'Ford',
    type: 'Fiesta',
    color: 'Red',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat 1', 
        'seat 2', 
        'seat 3', 
        'seat 4'
    ],

    //creat a method: 
    turnOn: function (){
        this.isTurnedOn = true;

    },
    turnOff: function (){
        this.isTurnedOn = false;
    }
};

console.log('Hello friends!');