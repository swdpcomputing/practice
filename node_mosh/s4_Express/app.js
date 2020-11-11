// Installed Packages
const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const config = require('config');

// Setting debug
const startupDebug = require('debug')('debug:startup')
const debug = require('debug')('debug:main')

// Other files
const logger = require('./logger');
const authenticator = require('./authenticator');

// Express
const app = express();
app.use(express.json()); // populates req.body
app.use(express.urlencoded({ extended: true})); // See urlencoded in Postman key=value&key=value
app.use(express.static('public')); // static file test

// Environment & Config
startupDebug(`NODE_ENV: ${process.env.NODE_ENV}`)
startupDebug(`app: ${app.get('env')}`);
startupDebug('Application Name: ' + config.get('name'));
startupDebug('Mail Server: ' + config.get('mail.host'));
// console.log('Mail Password: ' + config.get('mail.password'));

// Only works in bash: NODE_ENV=production nodemon app.js
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebug('Morgan enabled...');
}

// app.use(logger);
// app.use(authenticator);

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

// get base
app.get('/', (req, res) => {
    res.send('Hello World');
})

// get courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
})

// get course
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found')
    res.send(course);
})

// post course
app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body); // gets result error
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    
    courses.push(course);
    res.send(course);
})

//  put course
app.put("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found')

    const { error } = validateCourse(req.body); // gets result error
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course)
});

// delete course
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found')

    const index = courses.indexOf(course);
    courses.splice(index, 1) // delete

    res.send(course);
});


//////

const validateCourse = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    
    return schema.validate(course);
}

//////

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
    console.log(`Listening on port ${port}...`);
});
