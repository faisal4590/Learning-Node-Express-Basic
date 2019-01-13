
const express = require('express');

const app = express();

const courses = [
    {id:1 , name: "HTML"},
    {id:2 , name: "Node js"},
    {id:3 , name: "Python"},
];

//Course route
app.get('/api/courses/',(req, res)=>{
    res.send(courses); //getting list of courses
});

// route with multiple vars
app.get('/api/courses/:courseID', (req, res)=> {

    const courseWithID = courses.find(c => c.id === parseInt(req.params.courseID));

    if (!courseWithID)
    {
        res.status(404).send("No courses available with that id");
    }
    else
    {
        res.send(courseWithID);
    }

});


//PORT

const portAddress = process.env.PORT || 3000; //either hosting er dewa port nibe or default hishebe 3000 port nibe

app.listen(portAddress, ()=>{
    console.log(`Listening at port ${portAddress}.... `);
});