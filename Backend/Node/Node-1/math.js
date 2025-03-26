module.exports.val=123;

//different ways to use module.exports
//1.
const sum=(a,b)=>a+b;
const mul=(a,b)=>a*b;
const g=9.8;
const PI=3.14;

let obj={
    sum:sum,
    mul:mul,
    g:g,
    PI:PI,
};

module.exports = obj;

//2.
const sum1=(a,b)=>a+b;
const mul1=(a,b)=>a*b;
const g1=9.8;
const PI1=3.14;

module.exports={
    sum:sum1,
    mul:mul1,
    g:g1,
    PI:PI1,
};

//3.
module.exports.sum =(a,b)=>a+b;
module.exports.mul=(a,b)=>a*b;
module.exports.g=9.8;
module.exports.PI=3.14;

//4.
exports.sum =(a,b)=>a+b;
exports.mul=(a,b)=>a*b;
exports.g=9.8;
exports.PI=3.14;

//but just exports=10 will not work, here js will start considering exports as another variable name

