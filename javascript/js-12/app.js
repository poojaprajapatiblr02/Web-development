/*---------------------------------------------async functions---------------------------------------------------*/
//1.async keyword
async function greet(){
    return "hello";            
}
greet()     //Promise {<fulfilled>: 'hello'}

async function greet1(){
    throw "some random error"
    return "hello";           
}
greet1()   //Promise {<rejected>: 'some random error'}

greet()
.then((result)=>{
    console.log("Promise was resolved");
    console.log("result was : " , result);
})
.catch((result)=>{
    console.log("promise was rejected with error: ",result);
})

let demo = async()=>{     //making the function async returns a promise 
    return 5;
}


//2.await keyword
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo1(){
    await getNum();
    await getNum();
    await getNum();
}

demo1();

//using await for color change function
let h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}!`)
           resolve("color changed");
        }, delay);
    })
}

async function calling(){
    await changecolor("red",1000);
    await changecolor("orange",1000);
    await changecolor("green",1000);
    await changecolor("blue",1000);
    await changecolor("pink",1000);
    await changecolor("purple",1000);
}



//3. handling rejections in promise
let h2=document.querySelector("h2");

function changecolor1(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected")
            }
            h2.style.color = color;
            console.log(`color changed to ${color}!`)
           resolve("color changed");
        }, delay);
    })
}

async function callingA(){
    try{
        await changecolor1("red",1000);
        await changecolor1("orange",1000);
        await changecolor1("green",1000);
        await changecolor1("blue",1000);
        await changecolor1("pink",1000);
        await changecolor1("purple",1000);
    }catch(err){
        console.log(err);
        let a=3;                                  //without habdlind exceptions this normal flow of code will not be exected once the promise is rejected, tough they are independent of the promise
        console.log(a);
        console.log("new num = ",a+2)
    }
 
}
