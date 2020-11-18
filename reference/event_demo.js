const EventEmitter = require('events');
//importing the events module
// then creating a class constructor that extends the import above
class MyEmitter extends EventEmitter { }

//create an init object using the constructor
const myEmitter = new MyEmitter();

// then create an event listener on the new object that says (in the console) 'Event Fired' upon the firing of the event.
myEmitter.on('event', () => console.log('Event Fired!'))

//init event that will trigger the listener that is listening for this exact event.
myEmitter.emit('event');