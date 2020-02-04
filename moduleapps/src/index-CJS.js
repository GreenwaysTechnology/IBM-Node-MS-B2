//const result = require('./greeter')
const { message, name, sayGreet } = require('./greeter')
const Customer = require('./Customer');

//console.log(`${result.message} ${result.name} ${result.sayGreet()}`);
console.log(`${message} ${name} ${sayGreet()}`);
new Customer()