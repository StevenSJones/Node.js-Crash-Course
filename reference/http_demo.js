const http = require('http');
//require http core module

//create server object
http.createServer((req, res) => {
    //write response
    res.write('Hello World');
    res.end();//end the call
}).listen(5000, () => console.log('Server running...'));
//set port 5000 to listen just above