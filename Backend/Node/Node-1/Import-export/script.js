//Importing files data 
//import allows to import only selective data and not everything eg. here we are importing only sum and mul (g and PI)
import {sum,mul} from "./math.js";  //here in import extension also has to be mentioned math.js
console.log(sum(10,20));


//importing package 
//1st install package in this directory then import 
//here we are installing random-words package, this package generates random words - more details in npm (https://www.npmjs.com/package/random-words)
import { generate, count } from "random-words";
console.log(generate());
console.log(generate(5));  //generates 5 random words