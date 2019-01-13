const EventEmitter = require('events');

//event er sob method gule eventEmitter class er under e


var url = 'http://faisal.io/logs';

class Logger extends EventEmitter{ //Logger class now inherits all the functionalities of EventEmitter class
     log(message) {
        console.log(message);

        //raise an event with event arguments
        this.emit('messageEmitted', {id: 1, url: 'https://www.argumentPassing.com'}); //argument gulao pathay dicci
    }
}
module.exports = Logger; //pura class ke export kore dicci