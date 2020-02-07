const express = require('express');
const todosModule = require('./todos/todosmodule');
const usersModule = require('./users/usersmodule');
const bodyParser = require('body-parser')

const port = process.env.port || 3000;

const app = express();


//Global custom middleware:
// 1.I want middleware , should be executed for the whole application(collection of modules)
//for any request (get,post,delete)

app.use(function (req, res, next) {
    console.log(` ${req.url}  ${req.method}  ${new Date()}`)
    next(); // moving the middle ware to next middleware
});



//Body-parser middleware registeration.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//bind todos moudle with app
app.use('/api/todos/list', todosModule)
app.use('/api/users/list', usersModule)

//start the server
app.listen(port, function () {
    console.log(`Express Server is running at ${port}`)
});