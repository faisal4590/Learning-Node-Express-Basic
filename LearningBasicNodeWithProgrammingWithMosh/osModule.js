const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total memory = ' + totalMemory + " Free memory = " + freeMemory);

console.log(`Total memory =  ${totalMemory} \nFree memory = ${freeMemory}`);//es6 template string syntax

