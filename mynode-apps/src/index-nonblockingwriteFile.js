const fs = require('fs');
//
//write file
const writeFilepath = './src/info-copy.txt';

const data = 'This is node IO file!';

const config = {
    encoding: 'UTF-8'
};

console.log('start')

fs.writeFile(writeFilepath, data, config, function (err) {
    if (err) throw err;
    console.info(`The file ${writeFilepath} has been written!`)
});
console.log('end')