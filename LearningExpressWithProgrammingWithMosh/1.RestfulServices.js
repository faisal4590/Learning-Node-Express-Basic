/*
*   REST = REpresentational State Transfer.
* HTTP method use kore front end and backend er moddhe communication kora hoy.
* some HTTP methods are : GET(for getting data), POST(for creating data),
* PUT(for updating data), DELETE(for deleting data).
*
*
* */

const http = require('http');


const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        //home e gele user ke 1ta response dibo
        res.write('Hello you are in home directory');
        res.end();
    }

    if (req.url === '/api/courses'){
        //suppose ami course gular list ei page e dekhate chacci

        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
        //now localhost:3000/api/courses e gele json object gula pabo
    }
});

//server obj ta eventEmitter. so it has all the capabilities of an event emitter.

//event listener
server.on('connection', (socket)=>{
    console.log('New connection');
});

//raising an event
server.listen(3000);
console.log('Listening to port 3000');