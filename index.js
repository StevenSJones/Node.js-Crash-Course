const Person = require('./person');
//Above: This require is written in common js. require imports the file that is named in the ()
//the ./ is because person is a file and not a module that was installed or a core module

//first: I console.logged; using the dot operator, the person itself, as well as the name and age of the person.
// console.log(person);
// console.log(person.name);
// console.log(person.age);

//Second: I created a class constructor to create an object literal that contains a function and then after exporting said class and importing it to a new file, I then created an instance of the class. Then, with the dot operator, I ran the function created in conjunction with the instantiated class to produce an object that runs a the funciton, thus having a person say a greeting.'
const person1 = new Person('John Doe', 30);
person1.greeting();


