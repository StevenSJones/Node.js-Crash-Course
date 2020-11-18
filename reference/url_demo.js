const url = require('url');
// I imported the url module and then below I instantiated a new URL object. This must be done for the import to work. 
const myURL = new URL ('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL using the href property NOT A METHOD
console.log(myURL.href);
//using the toString method produces the same return
console.log(myURL.toString());
//produces: http://mywebsite.com/hello.html?id=100&status=active
//produces: http://mywebsite.com/hello.html?id=100&status=active

// HOST (root domain)
console.log(myURL.host);
// produces: mywebsite.com:8000 (8000 is the port)

//Hostname
console.log(myURL.hostname);
// produces: mywebsite.com WITHOUT the port

//pathname
console.log(myURL.pathname);
//produces just the path: /hello.html

//==========================================================
//Serialized query
console.log(myURL.search);
//produces ?id=100&status=active

//params object
console.log(myURL.searchParams);
//produces an object with the same information provided when we ran search: URLSearchParams { 'id' => '100', 'status' => 'active' }
//==========================================================

//add params
myURL.searchParams.append('abc', '123');
console.log(myURL.searchParams);
//produces an object with the same information provided when we ran URLSearchParams BUT with the new params that we added:
// URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }