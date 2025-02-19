/*------------------------------------------------this keyword-----------------------------------------------------------------------*/
const student={
    name:"pooja",
    age:22,
    eng:90,
    phy:94,
    math:98,
    getAvg(){
        let avg=(eng+phy+math)/3;   //eng,phy,math not defined, hence this keyword is used to refer to the object that is executing the current code
        console.log(avg);
    }
}
student.getAvg();            //math, phy, eng unefined

const student1={
    name:"pooja",
    age:22,
    eng:90,
    phy:94,
    math:98,
    getAvg(){
        let avg=(this.eng+this.phy+this.math)/3;   
        console.log(avg);
    }
}
student1.getAvg();          //94

function getAvg(){
    console.log(this);        
}
getAvg(); //window object is given as output, default object is window object when object is not mentioned


/*----------------------------------------------------try catch-------------------------------------*/
try{
    console.log(a);
}catch(err){
    console.log("variable does not exist");
    console.log(err);
}

/*----------Arrow Function---------------*/

const sum =( a,b) => {console.log(a+b);}
sum(10,20);                 //30

const cube = n => {           //no need of paranthesis for single argument
    console.log(n*n*n);
}
cube(2)        //8

const hello =() => {            //paranthesis neccessary for 0 arguments
    console.log("Hello World");
}
hello();            //Hellow World

//implicit return in arrow function
const mul = (a,b) => (         //curly braces replaced with paranthesis for a single return statement in the entire function, also no need of return keyword
    a*b
);
console.log(mul(2,3));



/*------------------------------------------------------setTimeout function-----------------------------------------*/
//syntax  setTimeout(callback function, timeout )
console.log("Hi there");
setTimeout(()=>{
    console.log("Apna College");
},4000);
console.log("Welcome to");
/*
setTimeout()
callback function -> ()=>{     //no arguments in callback function
    console.log("Apna College");
},
timeout -> 400
*/


/*-----------------------------------------------------setInterval function----------------------------------------------*/
//to setInterval , callback function will be called again and again after the time that is given here 2000ms
const id=setInterval(()=>{
    console.log("Hi there");
},2000);

clearInterval(id);             // to stop the excecution of setInterval, else it will execute indefinitely 
 


/*-----------------------------------------------------this with arrow function--------------------------------------------*/
//this keyword withh arrow function has lexical scope . current object's parents scope
const stud={
    name:"pooja",
    marks:95,
    getName: function(){
        console.log(this);       //stud object printed {name: 'pooja', marks: 95, getName: ƒ, getMarks: ƒ}
        return this.name;        //pooja because here this has current object scope. i.e stud 
    },
    getMarks:()=>{
        console.log(this);       //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        return this.marks;       //undefined
    }  ,                          //since arrow function is used the scope is lexical i.e current objects parent scope so the object is window
    getInfo1:function(){
        setTimeout(function(){       
            console.log(this);     //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        },2000);                   //because here current object is window , window.setTimeout
    },
    getInfo2:function(){
        setTimeout(()=>{
            console.log(this);    //{name: 'pooja', marks: 95, getName: ƒ, getMarks: ƒ, getInfo1: ƒ, …}
        },2000);                  //because current object is setTimeout , but since arrow function used its parent stud object is the scope
    }
}


/*---------------------------------------Practice Questions--------------------------------------------------*/
//write a arrow function that returns square of a number
const square = n=>(n*n);
console.log(square(4));

//write a function that prints "Hello World" 5 times at intervals of 2s each
let id5 = setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id5);         //stops function after 10seconds that is after 5 executions
},10000)



/*---------------------------------------Assignment Questions ----------------------------------------*/
//arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
const arrayAverage =(arr) =>{
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    let avg=sum/arr.length;
    console.log(avg);
}
arrayAverage([10,20,30])        //20

//arrow function named isEven() that takes a single number as argument and returns if it is even or not
const isEven = (n)=>(n%2 == 0)
console.log(isEven(5));     //false

//what is the output of the code
let length =4;
function callback(){
    console.log(this.length);
}
const object ={
    length:5,
    method(callback){
        callback();
    },
};
object.method(callback,1,2);


