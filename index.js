//require imports the file that is named in the ()
//the ./ is because person is a file and not a module that was installed or a core module
const Person = require('./person');

//first I did this:
// console.log(person);
// console.log(person.name);
// console.log(person.age);

//next I did this
const person1 = new Person('John Doe', 30);
person1.greeting();
