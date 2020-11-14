const path = require('path');
//Above: path is a core module so no need to include ./ (filepath or run npm install path

//file name
console.log(__filename);
//produces:
// /Users/stevenjones/Practice-post-BC/Node.js-Crash-Course/reference/path_demo.js

/*---------------------------------------------------------*/

//using path.basename and passing in the filename method provided by the module wrapper function.
console.log(path.basename(__filename));
//produces the:
// /Users/stevenjones/Practice-post-BC/Node.js-Crash-Course/reference/path_demo.js
path_demo.js

/*---------------------------------------------------------*/