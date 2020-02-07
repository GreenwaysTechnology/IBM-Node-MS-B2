
const fs = require('fs');
const path = require('path');

//const fileName = __dirname + 'info.txt'; //'./src/info.txt';

const fileName = path.join(__dirname, 'info.txt')

const config = {
    encoding: 'UTF-8'
};

fs.readFile(fileName, config, function (err, data) {
    //handle error
    if (err) throw err;
    console.log(data);
});
