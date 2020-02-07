const http = require('http');

//env means enviroment, which is global variable
// process is object ,
//process.env , add new variable if not present, if present update 

const port = process.env.port || 8081;

//Create Server 
//here request is just variable, holding reference of ClientRequest Object, which is created by node
//here response is just variable, holding reference of ServerResponse object, which itself created by node
const handler = (request, response) => {

    response.write('Hello HTTP', function () {
        console.log('Http write operation is completed')
    });
    response.end();//close the connection

    response.on('finish', function () {
        console.log('Client Request has been finished')
    });
    response.on('close', function () {
        console.log('Client Request has been closed')
    });

}
const server = http.createServer(handler);

//server events
server.on('request', function (req, res) {
    console.log(`The Request is received`)
});

//Start the webserver
server.listen(port, function () {
    console.log(`Server is ready to accept incomming Request at ${port} `);
});