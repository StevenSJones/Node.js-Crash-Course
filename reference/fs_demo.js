const fs = require('fs');
const path = require('path');

//create folder, BUT THERE IS A SYCRONOUS VERSION. This version, the asyncronous verion, takes a callback. 
//Below is the mkdir function with the standard function syntax.
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//     if(err) throw err;
//     console.log('Folder created...');
// });
