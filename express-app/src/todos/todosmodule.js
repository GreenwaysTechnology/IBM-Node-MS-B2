const express = require('express');
const TODOS = require('../mock-data/todos');

//create router : submodule
const todosModule = express.Router();

todosModule.use(function (req, res, next) {
    console.log('Welcome to TODO Module')
    next();
})

todosModule.use('/', function (req, res, next) {
    console.log('List Api')
    next();
})

//REST End Points :TODOS
//http://localhost:3000/api/todos/list
todosModule.get('/', function (req, res) {
    res.json(TODOS);
})

//http://localhost:3000/api/todos/list/:id
//http://localhost:3000/api/todos/list/2
todosModule.get('/:id', function (req, res) {
    //read Request parameter
    const id = parseInt(req.params.id)
    const filteredTo = TODOS.filter(todo => {
        return todo.id === id;
    });
    res.json(filteredTo);
})
todosModule.post('/', function (req, res) {
    const todo = req.body;
    console.log(todo);
    TODOS.push(todo)
    res.json(TODOS);
});


module.exports = todosModule;