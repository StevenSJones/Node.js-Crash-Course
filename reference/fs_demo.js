const fs = require("fs");
// above I imported the File System module. It is a core module so no need to include ./ (filepath) or run npm install path
const path = require("path");

//create folder, BUT THERE IS A SYCRONOUS VERSION. This version, the asyncronous verion, takes a callback.
//Below is the mkdir function with the standard function syntax.
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//     if(err) throw err;
//     console.log('Folder created...');
// });

//below is the mkdir function with an arrow function. With the arrow function, if there is only one parameter then we do not need the parentheses around err. If there were multiple parameters then we would.
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder Created...");
// });
//this produces a new folder (dir) called test.

/*---------------------------------------------------------*/

//to create a file there is a method called open(). BUT to 
//create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log("File written to...");
//   });
  //this produces a new file inside of test called hello.txt AND added the text 'Hello World' to it simultaneously.

/*---------------------------------------------------------*/

//append a file adds to a file
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log("File written to...");
//   });
  //this produces a new file inside of test called hello.txt AND added the text 'Hello World' to it simultaneously.

  /*-------------------------------------------------------*/

  // Read file
  // fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data ) => {
  //   if (err) throw err;
  //   console.log(data);
  // });
  // this produces the text inside of test that reads: hello.txt.

/*-------------------------------------------------------*/

  fs.rename(
    path.join(__dirname, '/test', 'helloyall.txt'), 
    path.join(__dirname, '/test', 'helloworld.txt'), 
    (err) => {
      if (err) throw err;
      console.log('File renamed...');
    });

    // produces a renamed file that was hello.txt and is now helloworld.txt. Because I told the console.log to say file renamed if successful, that is the message that I received in the log message.