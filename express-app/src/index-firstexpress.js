
//express is just variable , hold a function called createApplication
const express = require('express');

const port = process.env.port || 3000;

//console.log(express);
//express() function call returns an Object reference which is called Application object
//app is just variable holding application object reference.
const app = express();

//REST End Points
//http://localhost:3000/api/list
//get,post,delete,put,....

app.get('/api/list', function (req, res) {
    res.end('GET method')
});

app.post('/api/list', function (req, res) {
    res.end('POST method')
});

app.delete('/api/list', function (req, res) {
    res.end('DELETE method')
});

app.put('/api/list', function (req, res) {
    res.end('PUT method')
});


//start the server
app.listen(port, function () {
    console.log(`Express Server is running at ${port}`)
});