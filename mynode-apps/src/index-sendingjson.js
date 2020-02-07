const { createServer } = require('http');
const CUSTOMERS =  require('./mock-data/customers');

//env means enviroment, which is global variable
// process is object ,
//process.env.port , add new variable if not present, if present update 

const port = process.env.port || 8081;

//Create Server 
const server = createServer((request, response) => {

    //setting response headers
    response.setHeader('Content-Type', 'application/json');     

    response.write(JSON.stringify(CUSTOMERS), () => {
        console.log('Http write operation is completed')
    });
    response.end();//close the connection
    response.on('finish', () => {
        console.log('Client Request has been finished')
    });
    response.on('close', () => {
        console.log('Client Request has been closed')
    });

});

//server events
server.on('request', (req, res) => {
    console.log(`The Request is received`)
});

//Start the webserver
server.listen(port, () => {
    console.log(`Server is ready to accept incomming Request at ${port} `);
});