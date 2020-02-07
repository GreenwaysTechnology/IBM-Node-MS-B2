const express = require('express');
const TODOS = require('./mock-data/todos')
const USERS = require('./mock-data/users')

const port = process.env.port || 3000;
//Create Application Object
const app = express();


//REST End Points :TODOS

//http://localhost:3000/api/todos/list

app.get('/api/todos/list', function (req, res) {
    res.json(TODOS);
})
//http://localhost:3000/api/todos/list/:id
//http://localhost:3000/api/todos/list/2

app.get('/api/todos/list/:id', function (req, res) {
    //read request parameter
    const id = parseInt(req.params.id)
    const filteredTo = TODOS.filter(todo => {
        return todo.id === id;
    });
    res.json(filteredTo);
})

//REST End Points :USERS

app.get('/api/users/list', function (req, res) {
    res.json(USERS);
})
app.get('/api/users/list/:id', function (req, res) {
    //read request parameter
    const id = parseInt(req.params.id)
    const filteredUsers = USERS.filter(user => {
        return user.id === id;
    });
    res.json(filteredUsers);
})
//start the server
app.listen(port, function () {
    console.log(`Express Server is running at ${port}`)
});