//first install joi using npm for validation

const Joi = require('joi');

const express = require('express');

const app = express();


app.use(express.json());

const courses = [
    {id: 1, name: "HTML"},
    {id: 2, name: "Node js"},
    {id: 3, name: "Python"},
];

//Course route
app.get('/api/courses/', (req, res) => {
    res.send(courses); //getting list of courses
});

// route with multiple vars
app.get('/api/courses/:courseID', (req, res) => {

    const courseWithID = courses.find(c => c.id === parseInt(req.params.courseID));

    if (!courseWithID) {
        res.status(404).send("No courses available with that id");
    } else {
        res.send(courseWithID);
    }

});


//POST

app.post('/api/courses/', (req, res) => {
    //1st kaj of joi is to define a SCHEMA
    //schema te object er type, length eishob thake

    const schema = {
        name: Joi.string().min(3).required()// bole dilam name ta string and 3 char hote hbe min
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const addNewCourse = {
        id: courses.length + 1,
        name: req.body.name
        //ei new course ta course array te insert korbo using post method
    };

    courses.push(addNewCourse);
    res.send(addNewCourse);
});


app.listen(3000, () => {
    console.log('Listening at port 3000.....');
});