

const Logger = require('./logger');
//import the Logger class from the logger file that exports it

//logger is a class so we need to instantiate it with a new object called logger. It is a new object FROM the Logger class constructor
// const logger = new Logger();

// then create an event listener on the new object. The listener then does something upon the firing of the event.
// logger.on('message', (data) => console.log('Called listener', data));

//call the log method on our logger and pass in the message Hello World (in string form), this will trigger the listener that is listening for this exact event
// logger.log('Hello World!');
//produces: Called listener { id: '9d11dbfe-a0bc-4f6a-bd72-81452af64e63', msg: 'Hello World!' }
// logger.log('Hello');
// logger.log('Hey, there...');
// logger.log('Bonjour!');
// logger.log('Salut!');
//produces a unique id with each message that I pass in:
// Called listener { id: '6a2da6e6-3cc8-4214-9a83-c11d887f4873', msg: 'Hello World!' }Called listener { id: '3d6c091f-5103-4132-a6dc-0f6e5ddf16dc', msg: 'Hello' }Called listener { id: '822031b8-e9ba-4ffd-82c3-e520414f85bc', msg: 'Hey, there...' }Called listener { id: 'e2e4f783-2733-4617-a3fd-0bfbf830a970', msg: 'Bonjour!' }Called listener { id: '81867c34-b799-4512-991f-aae6055595f5', msg: 'Salut!' }

/*---------------------------------------------------------------*/

// const Person = require('./person');
//Above: This require is written in common js. require imports the file that is named in the ()
//the ./ is because person is a file and not a module that was installed or a core module

//first: I console.logged; using the dot operator, the person itself, as well as the name and age of the person.
// console.log(person);
// console.log(person.name);
// console.log(person.age);

//Second: I created a class constructor to create an object literal that contains a function and then after exporting said class and importing it to a new file, I then created an instance of the class. Then, with the dot operator, I ran the function created in conjunction with the instantiated class to produce an object that runs a the funciton, thus having a person say a greeting.'
// const person1 = new Person('John Doe', 30);
// person1.greeting();


