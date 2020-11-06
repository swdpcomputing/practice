const Joi = require('joi');
const express = require('express');

const app = express();
app.use(express.json()) // adding middleware

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found')
    res.send(course);
})

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    
    const result = Joi.validate(req.body, schema);
    console.log(result)

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

app.get('/api/posts/:year/:month', (req, res) => {
    // multiple parameters
    res.send({"year": req.params.year, "month": req.params.month})
})

app.get('/api/posts/:year?sortyear', (req, res) => {
    // multiple parameters
    res.send({"year": req.params.year, "sortyear": req.query.sortyear})
})

//////

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
    console.log(`Listening on port ${port}...`);
});
