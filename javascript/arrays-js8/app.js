/*----------------------------------Array Methods----------------------------*/
//1.forEach
 let arr =[10,20,30 ,40,50];
  function print(e){
    console.log(e);
  }
  arr.forEach(print);
  //or
  arr.forEach(function(e){
    console.log(e);
  })
  //forEach for objects
  let student = [
    {
        name:"pooja",
        marks:94
    },
    {
        name:"goshu",
        marks:91
    }
  ]
  student.forEach((el)=>{
    console.log(el.marks);
  })


//2.Map function -> same as forEach but creates a new array with the same size as original array
    let num =[1,2,3,4];
    let double = num.map((ele)=>{
     return ele*2;
    })


//3.Filter function ->only if result of callback is true, element added into new array 
    let nums=[1,3,2,4];
    let even = nums.filter((ele)=>(ele%2==0));
    console.log(even);


//4.Every function -> returns true if every element of array gives true for some function.else returns false
    let arr1=[1,2,3,4];
    let check = arr1.every((ele)=>(ele%2==0));
    console.log(check);

    console.log([2,4].every((ele)=>(ele%2==0)));


//5.Some function -> returns true if atleast one  element of array gives true for some function.else returns false
    console.log([1,2,4].some((ele)=>(ele%2==0)));
    console.log([1,3].some((ele)=>(ele%2==0)));


//6. Reduce function -> reduces the array to a single value, takes 2 paramters accumulater and element
    console.log([1,2,3,4].reduce((res, ele)=>(res+ele)));

    //find maximum in a array using reduce method
    let arr2 =[1,452,42,63,13,56,2,11,2,9];
    let max = arr2.reduce((res,ele)=>{
      if (ele>res){
        return ele;
      }else {
        return res;
      }
    });
    console.log(max);


/*---------------------------------Practice Question ------------------------------------------------------*/

//check if all numbers in our array are multiples of 10 or not 
let array10 = [10,20,40,30,10];
let res = array10.every((ele)=>(ele%10==0));
console.log(res);

//create a fucntion to find the min number in an array
function getMin(array){
let min = array.reduce((res,ele)=>{
  if (ele<res){
    return ele;
  }else{
    return res;
  }
});
return min;
}
console.log(getMin(array10));



/*-----------------------------------Default Parameter--------------------------------------------*/

//Givind default value to an argument
function sum(a,b=10){
  return a+b;
}
console.log(sum(1,3));   //4
console.log(sum(1));     //11

function sum1(a=10,b){
  return a+b;
}
console.log(sum1(1,3));   //4
console.log(sum1(1));     //NaN ,here a=1, b=undefined so this is a wrong way of using default parameters


/*------------------------------------Spread-----------------------------------------------------------------------------------*/

//expands the iterable into multiple values

let sArr=[1,2,3,4,5,6,7,0];
console.log(Math.min(...sArr));     //0
console.log(sArr);    //8 [1,2,3,4,5,6,7,0]
console.log(...sArr);  //1 2 3 4 5 6 7 0
console.log(sArr[0],sArr[1],sArr[2],sArr[3],sArr[4],sArr[5],sArr[6],sArr[7]);  //1 2 3 4 5 6 7 0
console.log("pooja")    //'pooja'
console.log(..."pooja")     // p o o j a

//spread with array literals
let arrX =[1,2,3,4,5];
let newArrX = arrX;      
console.log(arrX);    //[1,2,3,4,5]
console.log(newArrX); //[1,2,3,4,5]
newArrX.push(6);
console.log(arrX);    //[1,2,3,4,5,6]
console.log(newArrX); //[1,2,3,4,5,6]


let newArrY = [...arrX];
console.log(arrX);    //[1,2,3,4,5,6]
console.log(newArrY); //[1,2,3,4,5,6]
newArrY.push(7);
console.log(arrX);    //[1,2,3,4,5,6]  any changes in the new array will not affect the original array
console.log(newArrY); //[1,2,3,4,5,6,7]

let chars=[..."hello"];
console.log(chars);

let odd=[1,3,5,7,9];
let even1 = [2,4,6,8,10];
let num1 = [...odd,...even1];
console.log(num1);

//sread with object literals
let data ={
  email:"pooja@gmail.com",
  password:"abcd"
};

let copy = {...data};    //{email: 'pooja@gmail.com', password: 'abcd'}
let copy1 ={...data,id:123};     //{email: 'pooja@gmail.com', password: 'abcd', id: 123}

//instead of just spreading objects in object literals , we can even spread arrays and strings
let copy2={...num1};
console.log(copy2);  //{0: 1, 1: 3, 2: 5, 3: 7, 4: 9, 5: 2, 6: 4, 7: 6, 8: 8, 9: 10}
                     // here array index is stored as key for the vslues in the object

let copy3={...data.email};
console.log(copy3)     //{0: 'p', 1: 'o', 2: 'o', 3: 'j', 4: 'a', 5: '@', 6: 'g', 7: 'm', 8: 'a', 9: 'i', 10: 'l', 11: '.', 12: 'c', 13: 'o', 14: 'm'}


/*-------------------------------------------Rest--------------------------------------------------------------------*/
//rest allows a function to take an idefinite number of arguments and bundle them in an array

function eg (...args){
  for(let i=0;i<args.length;i++){
    console.log(args[i]);
  }
}

eg(1);    //1
eg(1,2);   //1 2
eg(1,2,3); //1 2 3

//all functions in js by default has arguments collection which stores all the arguments of the function
function min(){
  console.log(arguments);
}

min(1,2,3)  //Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// //But array methods (eg push,pop,reduce) will not work on this collection hence rest is used so that array methods can be performed on the arguments
// function sum(){
//   return arguments.reduce((sum,ele)=>sum+ele);
// }
// console.log(sum(1,2,3));   //app.js:184 Uncaught TypeError: arguments.reduce is not a function

function sum1(...args){
  return args.reduce((sum,ele)=>sum+ele);
}
console.log(sum1(1,2,3));   //6

//we can include exclusive arguments apart from ...args
function sum2(msg,...args){
  console.log(msg);
  return args.reduce((sum,ele)=>sum+ele);
}
console.log(sum2("hey",1,2,3));  //hey 6



/*---------------------------------------Destructuring-----------------------------------------------------------------------------------*/
//storing values of arrays into multiple variables
let names =["tony","bruce","steve","peter"];
let [winner,runnerup,...others]=names;
console.log(winner);
console.log(runnerup);
console.log(others);

//destructuring objects
const stud12 = {
  name:"karan",
  class:9,
  age:14,
  username:"karan123",
  password:123,
};

let {username:user,password:pass} =stud12;   //user and pass are the new variables in which we want to store the information
console.log(user, pass);

//can assign default values also
let {username:user1,password:pass1,location1="Mumbai"} =stud12;
console.log(location1); 


