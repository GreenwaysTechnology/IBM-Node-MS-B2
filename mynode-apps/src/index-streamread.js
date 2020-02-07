const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'info.txt')

const config = {
    encoding: 'UTF-8'
};

//Readable stream
const stream = fs.createReadStream(fileName, config)

//Bind events
let data = '';
stream.on('data', function (chunk) {
    console.log(`Received ${chunk.length} bytes of data.`);
    data += chunk;
});

stream.on('error', function (err) {
    console.log(err);
});
stream.on('end', function () {
    console.log('end')
    console.log('Data is ready');
    console.log(data);
});
stream.on('close', function () {
    console.log('close ')
});