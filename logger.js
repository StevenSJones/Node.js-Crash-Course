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
 module.exports = Logger;
