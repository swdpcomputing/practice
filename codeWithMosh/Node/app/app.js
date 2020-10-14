// Node Path Object
const path = require("path");
var pathObj = path.parse("./logger.js");

//Node OS Object
const os = require("os");
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log("Total Memory " + totalMemory);
console.log(`Free Memory: ${freeMemory}`);

//File System 
const fs = require('fs');

