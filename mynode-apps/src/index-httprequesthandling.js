const { createServer } = require('http');

const port = process.env.port || 8081;

const requestHandler = (request, response) => {
    //setting response headers
    response.setHeader('Content-Type', 'application/json');
    //request and response processing
    let data = ''
    request.on('data', function (chunk) {
        data += chunk;
    });
    request.on('end', function () {
        console.log(data);
        response.write(JSON.stringify({
            message: 'Data has been submitted'
        }));
        response.end() //close  stream
    });
};
const server = createServer(requestHandler);


//start the server
server.listen(port, () => {
    console.log(`Server is Up at ${port}! `);
});