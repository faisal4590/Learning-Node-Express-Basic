const EventEmitter = require('events');

//event er sob method gule eventEmitter class er under e

const emitter = new EventEmitter();

//register a listener when messageEmitted event will be raised

/*emitter.on('messageEmitted', function (arg) {

    console.log('callback function called with parameter',  arg);

});*/

emitter.on('messageEmitted', (arg) =>{ //es6 arrow function

    console.log('callback function called with parameter',  arg);

});

//raise an event with event arguments
emitter.emit('messageEmitted' , {id: 1, url: 'https://www.argumentPassing.com'}); //argument gulao pathay dicci

