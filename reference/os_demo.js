const os = require('os');
//above I imported the Operating System module. It is a core module so no need to include ./ (filepath) or run npm install path

// Platform 
console.log(os.platform());
// Produces darwin in the terminal as that is the operating system for Mac. It would be win32 for Windows and something else for linux