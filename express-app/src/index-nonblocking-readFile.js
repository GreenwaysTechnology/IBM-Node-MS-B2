const fs = require('fs');

const fileName = './src/info.txt';
const config = {
    encoding: 'UTF-8'
};

console.log('start')
fs.readFile(fileName, config, function (err, data) {
    //handle error
    if (err) throw err;
    console.log(data);
});
//readFile---stack---will communicate--libuv---readFile api(c)---os kernal--assigns thread-->
//start reading file---once file read operation is completd---emits signal-->libvu stores
//handler function inside queue---event loop--->checks whether v8 stack empty--->push handler
//function -- to print data, which was already read.
console.log('end');