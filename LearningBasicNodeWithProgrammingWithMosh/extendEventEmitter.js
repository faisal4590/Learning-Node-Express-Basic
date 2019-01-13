const EventEmitter = require('events');

//event er sob method gule eventEmitter class er under e

const emitter2 = new EventEmitter();

emitter2.on('messageEmitted', (arg) =>{ //es6 arrow function

    console.log('callback function called with parameter',  arg);

});

//listening the event from logger.js file

const log = require('./logger');
log('message');