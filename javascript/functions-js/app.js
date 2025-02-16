function printPoem(){
    console.log("twinkle twinkle little star");
}
printPoem();


function dice(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);
}
dice();


function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
    console.log(name,age);
}
printInfo("Pooja",22);  //pooja's age is 22
printInfo("pooja");  //pooja's age is undefined
printInfo(22);      //22's age is undefined


//return keyword
function sum(a,b){
return(a+b);
}
console.log(sum(10,20));
console.log(sum(sum(12,8),10));  //using function itself as a parameter


//function to return sum of numbers from 1 to n
function sum1(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(sum1(10));

//function to  return the concatenation of all strings in an array
let str=["hi","hello","bye","!"];
function concat(str){
    let result="";
    for(let i=0;i< str.length;i++){
        result+=str[i];
    }
    return result;
}
console.log(concat(str));


// /*------------------scope------------------*/
// //function
// function demo(){
//     let x=10;
// }
// demo();
// console.log(x);   //x not accesible outside the function

// //block
// {
//     let x=10;
// }
// console.log(x);    //undefined - x not accesible outside the block

// //lexical - nested functions - inner function can access variables of outer function
// function outerFun(){
//     let x=5, y=10;
//     function innerFun(){
//         console.log(x);     //accesible
//     }
//     innerFun();
// }
// outerFun();

// function outerFun1(){
//     function innerFun1(){
//         console.log(x);     //accesible - because of hoisting 
//     }
//     let x=5, y=10;
//     innerFun1();
// }
// outerFun1();



// /*------function expression----------*/
// let sums=function(a,b){        //no need of function name, function stores in a variable
//     return a+b;
// }
// sums(1,2);               //function called using variable name




// /*--------------Higher order functions--------------*/
// function MultipleGreet(func,n){         //one or more functions passed as arguments
//     for (let i=0;i<n;i++){
//         func();
//     }
// }

// let greet=function(){
//     console.log("hello");
// }

// MultipleGreet(greet,2);
// MultipleGreet(greet(),2);     //error here greet is geting called instead of behaving as an argument
// MultipleGreet(function(){console.log("Namaste")}, 20);    //again passing function expression as an argument.


// function oddEvenFactoryFunction(request){       //returning a function 
//     if(request=="odd"){
//         return function(n){
//             console.log(!(n%2 ==0));
//         }
//     }else if(request=="even"){
//         return function(n){
//             console.log(n%2 ==0);
//         }
//     }else{
//         console.log("wrong request");
//     }
// }

// let request = "odd";    //odd function will be executed by the factory function
// request = "even";   //even function will be executed the factory function

// let func = oddEvenFactoryFunction(request);
// func(3)    //false since even is passed as argument so even function called



// /*-----------Methods---------------*/
// //Actions performed on an object (functions for objects)
// const calculator={
//     num:55,
//     add:function(a,b){      //add is the variable name in which function is stored (function name)
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// }
// console.log(calculator.num);  //55
// calculator.add(1,2);  //3
// calculator.sub(2,1);   //1
// calculator.mul(2,3);   //6

// //Method shorthand - no need to use the function keyword
// const calculator1={
//     num:55,
//     add(a,b){      //add is the variable name in which function is stored (function name)
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     }
// }
// calculator1.num;  //55
// calculator1.add(1,2);  //3
// calculator1.sub(2,1);   //1
// calculator1.mul(2,3);