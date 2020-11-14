const path = require('path');
//Above: path is a core module so no need to include ./ (filepath or run npm install path

//file name
console.log(__filename);
//produces:
// /Users/stevenjones/Practice-post-BC/Node.js-Crash-Course/reference/path_demo.js

/*---------------------------------------------------------*/

//using path.basename() and passing in the filename method provided by the module wrapper function to return the dir and file names
console.log(path.basename(__filename));
//produces:
// /Users/stevenjones/Practice-post-BC/Node.js-Crash-Course/reference/path_demo.js
// path_demo.js

/*---------------------------------------------------------*/

//Using path.dirname() and passing in the filename method provided by the module wrapper function to return the dir name
console.log(path.dirname(__filename));
//produces:
// /Users/stevenjones/Practice-post-BC/Node.js-Crash-Course/reference/path_demo.js
// path_demo.js
// /Users/stevenjones/Practice-post-BC/Node.js-Crash-Course/reference

