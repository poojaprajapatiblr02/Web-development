/*----------------------creating and running  node files using terminal-------------------------*/

//command to run node files ->node script.js
//here file name is script.js

let n = 5

for (let i = 0; i < n; i++) {
    console.log("Hello " + i);
}

console.log("bye!");

/*-------------------------------------Process object-----------------------------------------------*/
//node by default has a object called process
//this object provides information about, and control over, the current node.js process
//Eg. process, process.version, process.release, process.cwd(),process.argv     //cwd stands for current working directory
//process.argv returns an array containing the command-line arguments passed when the node.js process is launched
console.log(process.argv);        //[
// 'C:\\Program Files\\nodejs\\node.exe',
// 'E:\\abc\\Backend\\script.js'
// ]
//by default process.argv array has two elements one is the node process launch, second is the path of the current file that we are trying to run

//when arguments are passed 
//eg node script.js hello   -> the output is
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'E:\\abc\\Backend\\script.js',
//     'hello'
//   ]

//using the arguments passed in the code 
let args = process.argv;
for (let i = 2; i < args.length; i++) {
    console.log("Hello " + args[i]);
}
//node script.js pooja dog cat
// output Hello pooja
//Hello dog
//Hello cat


/*------------------------------------------module.exports and require------------------------------------------------------------*/
//1.in files
//module.exports -> it is a special object used to send properties and methods to other files in the same directory
//require()  -> a built-in function to include external modules that exist in separate files.
const val = require("./math");   //module.exports defined in math.js file
console.log(val);                //123

const math = require("./math")
console.log(math);   //{ sum: [Function: sum], mul: [Function: mul], g: 9.8, PI: 3.14 }
console.log(math.sum(10,20));  //30
console.log(math.g);           //9.8

//2.module.exports between directories
const info=require("./Fruits");    // requires entire directory(here Fruits directory), this will first look for file named index.js then get the data from there
console.log(info);                 //index.js is the entry point for that diretory
/*output
[
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'mango', color: 'green' }
]
*/
console.log(info[1]);       //{ name: 'banana', color: 'yellow' }