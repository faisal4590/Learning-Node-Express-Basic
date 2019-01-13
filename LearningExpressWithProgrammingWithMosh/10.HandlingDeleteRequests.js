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

    //as we only want the result.error method(only error method result object er),
    //so we can use object destructuring method to get that

    const {error} = validateCourse(req.body); //accessing result.error

    if (error) {
        res.status(400).send(error.details[0].message);
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

///Updating data using PUT method

app.put('/api/courses/:courseID', (req, res) => {

    //look for the course first before updating. If not exists, return 404
    const courseWithID = courses.find(c => c.id === parseInt(req.params.courseID));

    if (!courseWithID) {
        res.status(404).send("No courses available with that id");
    }

    //validate
    //if invalid, return 404

    //const result = validateCourse(req.body);

    //as we only want the result.error method(only error method result object er),
    //so we can use object destructuring method to get that

    const {error} = validateCourse(req.body); //accessing result.error

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    //update the course using PUT
    courseWithID.name = req.body.name;// update the name of the course
    res.send(courseWithID);

});

app.delete('/api/courses/:courseID', (req, res) => {
    //look for the course first before updating. If not exists, return 404
    const courseWithID = courses.find(c => c.id === parseInt(req.params.courseID));

    if (!courseWithID) {
        res.status(404).send("No courses available with that id");
    }

    //delete the course with desired id
    const index = courses.indexOf(courseWithID);
    courses.splice(index, 1);//desired index e gie 1ta object delete korlam

    //returning the response to the client
    res.send(courseWithID);

});

app.listen(3000, () => {
    console.log('Listening at port 3000.....');
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()// bole dilam name ta string and 3 char hote hbe min
    };
    return Joi.validate(course, schema);


}