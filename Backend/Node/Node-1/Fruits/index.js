//data tranfer in directories
//index.js is a special file(should always be named as index.js only) that acquires data from all the files that has to be exported,combines them then exports them

const apple = require("./apple");
const banana = require("./banana");
const mango = require("./mango");

let fruits = [apple,banana,mango];

module.exports = fruits;