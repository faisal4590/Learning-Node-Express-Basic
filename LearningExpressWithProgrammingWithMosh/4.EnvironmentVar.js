//In real life, port 3000/5000 manually keu set kore deyna.. Hosting company gula 1ta port dey ota amake get kore kaj korte hoy.
//ejonno node js er environment var use kora hoy. 1ta environment var holo PORT

const express = require('express');

const app = express();

//get request
//Home route
app.get('/', (req, res)=> {
    //route handler(Callback function)
    res.send('This is home directory');
});

//Course route
app.get('/api/courses/',(req, res)=>{
    res.send([1,2,3]); //list of courses
});

//PORT

const portAddress = process.env.PORT || 3000; //either hosting er dewa port nibe or default hishebe 3000 port nibe

app.listen(portAddress, ()=>{
    console.log(`Listening at port ${portAddress}.... `);
});