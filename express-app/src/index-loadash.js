
const lodash = require('lodash')

let array = [1];

let other = lodash.concat(array, 2, [3], [
      [4]
]);
console.log(other);