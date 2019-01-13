//passing parameters for updating/some operations on a certain id,
//for example, we want to update  the 1st course.
//so url e http://localhost:3000/api/courses/1 evabe pathale 1st course ta get korte parbo

const express = require('express');

const app = express();


//Course route
app.get('/api/courses/:courseID',(req, res)=>{
    res.send(req.params.courseID); //list of courses
});

// route with multiple vars
app.get('/api/posts/:year/:month', (req, res)=> {
    //res.send(req.params);

    //reading query parameters
    res.send(req.query); // url e http://localhost:3000/api/posts/2018/january?monthName=Faisal likhle query string hishebe monthName: "Faisal" pabo.


});


//PORT

const portAddress = process.env.PORT || 3000; //either hosting er dewa port nibe or default hishebe 3000 port nibe

app.listen(portAddress, ()=>{
    console.log(`Listening at port ${portAddress}.... `);
});