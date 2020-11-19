const EventEmitter = require('events');
//importing the events module
const uuid = require('uuid');
// console.log(uuid.v4());
//produces 1ccb9b24-39d9-4aff-9b17-dc3b3eba6b84. This is a unique identifier

// then creating a class constructor that extends the import above
//this will show a new id with the message that is sent everytime we call logger
class Logger extends EventEmitter {
    log(msg) {
        //Call event
        this.emit('message', { id: uuid.v4(), msg:msg });
    }
}

//export the logger class
// module.exports = Logger;

 //logger is a class so we need to instantiate it with a new object called logger. It is a new object FROM the Logger class constructor
const logger = new Logger();

// then create an event listener on the new object. The listener then does something upon the firing of the event.
logger.on('message', (data) => console.log('Called listener', data));

//call the log method on our logger and pass in the message Hello World (in string form), this will trigger the listener that is listening for this exact event
logger.log('Hello World!');
//produces: Called listener { id: '9d11dbfe-a0bc-4f6a-bd72-81452af64e63', msg: 'Hello World!' }
logger.log('Hello');
logger.log('Hey, there...');
logger.log('Bonjour!');
logger.log('Salut!');
//produces a unique id with each message that I pass in:
// Called listener { id: '6a2da6e6-3cc8-4214-9a83-c11d887f4873', msg: 'Hello World!' }Called listener { id: '3d6c091f-5103-4132-a6dc-0f6e5ddf16dc', msg: 'Hello' }Called listener { id: '822031b8-e9ba-4ffd-82c3-e520414f85bc', msg: 'Hey, there...' }Called listener { id: 'e2e4f783-2733-4617-a3fd-0bfbf830a970', msg: 'Bonjour!' }Called listener { id: '81867c34-b799-4512-991f-aae6055595f5', msg: 'Salut!' }

