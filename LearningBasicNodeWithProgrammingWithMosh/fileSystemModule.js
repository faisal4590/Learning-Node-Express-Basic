const fs = require('fs');

//const files = fs.readdirSync('./'); //asynchronous method

//console.log(files);

const files2 = fs.readdir('./', function (err, values) {
    //synchronous method e 1ta callback function thake. jokhn kaj sesh hoy tokhn func ta call hoy
    //function ta either error return korbe jodi kaj complete korte na pare or value return korbe kaj complete korle

    if (err)
    {
        console.log(`Error occurred and the error was ${err}`);
    }
    else
    {
        console.log(`Values are ${values}`);
    }
});