/*------------------------------------call stack --------------------------------------------------------------*/
//call stack - stack data structure that stores currently which datastructure is getting called
function hello() {
    console.log("Inside hello function");
    console.log("Hello");
}

function demo() {
    console.log("calling hello function");
    hello();
}

console.log("calling demo function");
demo();
console.log("done, bye");

//visualizing call stack
function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    let ans = two() + one();
    console.log(ans);
}
three();

/*--------------------------------------------------------------JS is single threaded------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//js is single threaded
let a = 10;
console.log(a);
let b = 20;
console.log(b);
console.log(a + b);   //at one time only one thing is executed- synchronous in nature

setTimeout(function () {   //according to synchronous nature of js, js should wait for this function to execute and not be ablw to perform the next tasks because waiting itself is a task
    console.log("world"); // but this task of waiting is done by browser instead of js itself, therefore js can continue executing next tasks and browser being multithreaded will execute the callback in settimeout after timeout.
}, 2000);
console.log("hello")


/*------------------------------------------------------------Callback hell-------------------------------------------------------*/
//multipe callback nesting ->call back hell
//normal prgm
let h1 = document.querySelector("h1");
setTimeout(() => {
    h1.style.color = "red";
}, 1000);

setTimeout(() => {
    h1.style.color = "orange";
}, 2000);

setTimeout(() => {
    h1.style.color = "green";
}, 3000);

setTimeout(() => {
    h1.style.color = "yellow";
}, 4000);

//using callback hell
let h2 = document.querySelector("h2");
function changeColor(color, delay, nextColorchange) {
    setTimeout(() => {
        h2.style.color = color;
        if (nextColorchange) nextColorchange();
    }, delay);
}

changeColor("red", 1000, () => {         //callback hell
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000);
        })
    })
})

//using promises - promises concept below
let h3=document.querySelector("h3");

function cc(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h3.style.color = color;
           resolve("color changed");
        }, delay);
    })
}

cc("red",1000)
.then(()=>{
    console.log("Red completed");
    return cc("orange",1000);
})
.then(()=>{
    console.log("orange completed");
    return cc("green",1000);
})
.then(()=>{
    console.log("green completed");
    return cc("yellow",1000);
})
.then(()=>{
    console.log("yellow completed");
})
.catch(()=>{
    console.log("error occured");
})


/*----------------------------------Promises--------------------------------------------------------*/
function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb("Hello World",                        //callback hell
    () => {
        console.log("success: your data was saved");
        savetoDb("Hello World Again",
            () => {
                console.log("success2: your data was saved");
                savetoDb("Hello World Third time",
                    () => {
                        console.log("success3: your data was saved");
                    },
                    () => {
                        console.log("Failure3: Weak connection. data not saved");
                    }
                )
            },
            () => {
                console.log("Failure2: Weak connection. data not saved");
            }
        )
    },
    () => {
        console.log("Failure: Weak connection. data not saved");
    }
)

//savetoDb function using promise
function savetoDb2(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved ");
        } else {
            reject("failure: weak connection");
        }
    });
}

let request = savetoDb2("hello");
request
    .then(() => {
        console.log("Promise was resolved");
        console.log(request);
    })
    .catch(() => {
        console.log("Promise was rejected");
        console.log(request);
    })

//for calling function savetodb again and again we can give multiple .then() and just one .catch() for a failure. this .catch() will catch the failure for any of the .thens just like try catch does not need catch for every try , just one catch is enough
//savetoDb function using promise improvised
function savetoDb3(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved ");
        } else {
            reject("failure: weak connection");
        }
    });
}

savetoDb3("hi")
    .then(() => {
        console.log("data1 saved");
        return savetoDb3("hey");
    })
    .then(() => {
        console.log("data 2 saved");
        return savetoDb3("hello");
    })
    .then(()=>{
        console.log("data3 saved")
    })
    .catch(() => {
        console.log("promise was rejected here");
    })

//printing result also with the saved/rejected msg
function savetoDb4(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved ");
        } else {
            reject("failure: weak connection");
        }
    });
}

savetoDb4("hi")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise: ",result);
        return savetoDb3("hey");
    })
    .then((result) => {
        console.log("data 2 saved");
        console.log("result of promise: ",result);
        return savetoDb3("hello");
    })
    .then((result)=>{
        console.log("data3 saved")
        console.log("result of promise: ",result);
    })
    .catch((error) => {
        console.log("promise was rejected here");
        console.log("result of promise: ",error);
    })



