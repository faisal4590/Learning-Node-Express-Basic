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

app.listen(3000, ()=>{
    console.log('Listening at port 3000.....');
});