const os = require('os');
//above I imported the Operating System module. It is a core module so no need to include ./ (filepath) or run npm install path


// Platform 
console.log(os.platform());
// Produces darwin in the terminal as that is the operating system for Mac. It would be win32 for Windows and something else for linux


// CPU Arch
console.log(os.arch());
// os.arch() method is an inbuilt application programming interface of the os module which is used to get CPU architecture of the computer for which the current node.js is compiled
// produces x64. Meaning 64-bit


// CPU Core info
console.log(os.cpus());
// produces an object with information for every core of the cpu.
// I have 4 cores on this macbook pro according to the return in the terminal that I received: [
//   {
//     model: 'Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 1707280, nice: 0, sys: 856410, idle: 5084460, irq: 0 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 566010, nice: 0, sys: 277560, idle: 6803900, irq: 0 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 1741240, nice: 0, sys: 652530, idle: 5253690, irq: 0 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 486090, nice: 0, sys: 227690, idle: 6933690, irq: 0 }
//   }
// ]

//Free memory
 console.log(os.freemem());
 // produces: 190124032

//Total memory
console.log(os.totalmem());
// produces: 
