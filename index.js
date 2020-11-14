//require imports the file that is named in the ()
//the ./ is because person is a file and not a module that was installed or a core module
const person = require('./person');

console.log(person);
console.log(person.name);
console.log(person.age);

