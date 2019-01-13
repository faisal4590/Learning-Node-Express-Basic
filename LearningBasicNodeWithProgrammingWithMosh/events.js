const EventEmitter = require('events');

//event er sob method gule eventEmitter class er under e

const emitter = new EventEmitter();

//register a listener when messageEmitted event will be raised

emitter.on('messageEmitted', function () {
    
    console.log('callback function called');
    
});

//raise an event
emitter.emit('messageEmitted');

