const config = require('config');
const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const logger = require('./logger');
const authenticator = require('./authenticator');
const app = express();

app.use(express.json()); // populates req.body
app.use(express.urlencoded({ extended: true})); // See urlencoded in Postman key=value&key=value
app.use(express.static('public')); // static file test

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`app: ${app.get('env')}`);

console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));

// Only works in bash: NODE_ENV=production nodemon app.js
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}

app.use(morgan('tiny'));
app.use(logger);
app.use(authenticator);

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
