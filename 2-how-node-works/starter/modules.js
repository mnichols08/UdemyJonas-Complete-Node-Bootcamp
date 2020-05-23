console.log(arguments)
console.log(require('module').wrapper)

// module.exports
const C = require('./test-module-1');
const calc1 = new C();

console.log(calc1.add(1,5));

// exports
// const calc2 = require('./test-module-2');
const { subtract } = require('./test-module-2');
console.log(subtract(100,84));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
