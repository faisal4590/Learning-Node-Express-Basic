/*
*  1. Node module system (OS, File systems, events, HTTP)
* */

//Global objects
console.log('Faisal');//ekhane console global object caz jekono jayga theke use korte pari
// js e WINDOW object clo.. (window.console.log()).. Node js e window object nai..
//caz node js run time environement dey.. not the browser side environment.
//tai node js e WINDOW use na hoye GLOBAL use hoy..
//examples:
global.console.log("Faisal Aziz");
//variabla and function jegula define korbo ogula global object e jabena.

var message  = "bal";
console.log(global.message);//undefined output dekhacce

/*
* 2. Node Modules
* */

//program ke choto choto module e vag kore nibo jate 2 var/functions with same name dont overlap with one another

//every file in a node application is considered as a module
//every node js program has atleast one module/main module. here app.js is the main module

console.log(module);

/*
*   3. Creating a module
* */

//CreateModuleExample.js name e 1ta module create korlam. Now otake load korbo
const loadModule = require('./CreateModuleExample');

console.log(loadModule);
//run korar por dekhte parteci ja ja exports korcilam ogula ei file e now use korte parteci

//now import kora method ta ekhane use korte parbo

//loadModule.log("Hola baby");

//keno var loadModule  = require('./CreateModuleExample'); na likhe const dilam?
//amra chabona amader import kora data accidently jeno change na hye jay..
//code er majhe vule loadModule = 1; diye dite pari tahole error dekhabe tai jokhni kono kisu import korbo
//either const/let use korbo

// ---------- Importing functions (Not as objects)

//const logFunction = require('./CreateModuleExample');
//logFunction('Holllla Babbby');//now 1ta function akare use korte parteci


/*
*  4. Modular wrapper function
* */

console.log(__filename);
console.log(__dirname);

/*
*  5. Path module
* */

//see path module.js file

/*
*  6. OS module
* */

//see os module.js file

/*
*  7. File system module
* */

//see fileSystemModule.js file

/*
*  8. Events
* */

//see events.js file

/*
*  8. Events Arguments
* */

//see eventsArguments.js file

/*
*  9. Extending event emitter
*
*   // raising an event in the logger.js file and listen that event from extendEventEmitter.js file
* */

//see extendingEventEmitter.js file

/*
*  9. HTTP modules
*
* */

// see httpModule.js file