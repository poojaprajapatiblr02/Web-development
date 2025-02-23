// square and sum the array elements using the arrow function and then find the average of the array
let ar =[1,2,3,4,5,6];
let ans = ar.reduce((sum,ele)=>sum+(ele*ele));
console.log(`The result is ${ans}`);
let avg1 = ans/ar.length;
console.log(avg1);

//return new array whose whose each element is equal to original element +5
let plus5 = ar.map((ele)=>ele+5);
console.log(plus5);

//return new array whose elements are in uppercase of the words present in the original array
let ar1 = ["apple","ball"];
let upper = ar1.map((ele)=>ele.toUpperCase());
console.log(upper);

//function accepts an array and variable number of arguments. this function returns a new array with original values and all the additional argumens doubled
const doubleAndReturnArg = (arr,...args)=> [
    ...arr,
    ...args.map((v)=>v*2),
];

console.log(doubleAndReturnArg([1,2,3],4,4));
console.log(doubleAndReturnArg([2],10,4));

//function accepts 2 objects and returns a new object which contains all the key and values of 1st and 2nd object
const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));
