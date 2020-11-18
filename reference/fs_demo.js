const fs = require("fs");
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

//create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log("File written to...");
//   });
  //this produces a new file inside of test called hello.txt AND added the text 'Hello World' to it simultaneously.
