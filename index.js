const http = require("http");
const path = require("path");
const fs = require("fs");
//1 import core modules just above to create a server

//2 create the server and pass in the req and res
const server = http.createServer((req, res) => {
  //   if (req.url === "/") {//check for the home route to index.html
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" }); //write the headers
  //         res.end(content);
  //       }
  //     );
  //   }

  //   if (req.url === "/api/users") {//check for about route to about.html
  //     const users = [
  //         { name: 'Steven Jones', age: 34 },
  //         { name: 'Phillip Moreau', age: 44 }
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" }); //write the headers
  //     res.end(JSON.stringify(users));
  //   }

  //Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //extension of the file being sent
  let extname = path.extname(filePath);

  //initial content type
  let contentType = "text/html";

  //check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
});

//4 create the PORT setting it to what ever port is available on our client's server OR port 5000
const PORT = process.env.PORT || 5400;

//3 set the port to listen and tell us with a log to the console when it is running.
server.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

// const Logger = require('./logger');
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
