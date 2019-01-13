
var url = 'http://faisal.io/logs';

function log(message) {
    console.log(message);
}

//console.log(module) run korar por cmd te dekhteci exports{} name e 1ta
//object create hocce. ei module theke ja ja export korte chai segulake define kore dibo..

module.exports.logObject = log;//log function ta export korlam.


module.exports.dummyVarName = url;// url var ta export korlam//

// ja ja export korlam ogula onno jekono module e now access korte parbo but sei module e age CreateModuleExample ta import kore newa lagbe

// -------- exporting a single function(not as object)

//age log object create korcilam. but 1ta function er jonno object create na kore direct function pathate pari

module.exports = log;// now log function hishebe pass hbe, not as object