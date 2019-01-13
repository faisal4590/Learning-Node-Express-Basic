//const EventEmitter = require('events');

//event er sob method gule eventEmitter class er under e

//const emitter = new EventEmitter();

//real life e evabe emitter instance create kore kaj kora hoyna. 1ta class
//create korbo jeta event emitter er sob functionality extend korbe. then oi class niye kaj korbo

const EventEmitter = require('events');

//event er sob method gule eventEmitter class er under e

//listening the event from logger.js file

const Logger = require('./logger');
const loggerObj = new Logger();

//registering a listener
loggerObj.on('messageEmitted', (arg) =>{ //es6 arrow function

    console.log('callback function called with parameter',  arg);

});

loggerObj.log('message');