/*------------------------API's------------------------------------------------*/
//Accessing data from json  - 2 methods
let JSONResponse = '{"fact":"Sir Isaac Newton is credited with creating the concept for the pet door that many cats use today to travel outdoors.","length":116}';
console.log(JSONResponse);  //{"fact":"Sir Isaac Newton is credited with creating the concept for the pet door that many cats use today to travel outdoors.","length":116}
console.log(JSONResponse.fact);  //undefined
// because the entire response has come as one string and not as javascript object
//to be able to access it as js object parse() method is used

//1. parse() method
let ValidResponse = JSON.parse(JSONResponse);
console.log(ValidResponse);   /*{fact: 'Sir Isaac Newton is credited with creating the con…door that many cats use today to travel outdoors.', length: 116}
                                fact: "Sir Isaac Newton is credited with creating the concept for the pet door that many cats use today to travel outdoors."
                                length: 116
                                [[Prototype]]: Object */
console.log(ValidResponse.fact);  //Sir Isaac Newton is credited with creating the concept for the pet door that many cats use today to travel outdoors.

//2.stringify method (used while making our own API's)
//converts js object data to JSON 
let student = {
    name:"pooja",
    marks:95,
}
console.log(student);            //{name: 'pooja', marks: 95}
console.log(JSON.stringify(student));   //'{"name":"pooja","marks":95}'


/*----------------------------------my 1st api---------------------------------------------*/
let url ="https://catfact.ninja/fact";
fetch(url)      //this gives the response under response section in network tab and by default fetch(url) returns a promise hence .then and catch is used to get the response
.then((res)=>{
    console.log(res);   //this aslo doenst give the actual response but returns a readable stream, to get the actual response json() method is used. this method again returns a promise 
})
.catch((err)=>{
    console.log(err);
})

//using json() method to get the response 
fetch(url)
.then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(data);
    })
})
.catch((err)=>{
    console.log(err);
})

//making it more compact and readable
fetch(url)
.then((res)=>{
    console.log(res);
   return res.json();
})
.then((data)=>{
    console.log(data);
    console.log(data.fact);
})
.catch((err)=>{
    console.log(err);
})

//using chaining to make api call again after 1st response
fetch(url)
.then((res)=>{
    return res.json();
})
.then((data1)=>{
    console.log("Fact1 = ", data1.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("Fact2 = ", data2.fact);
})
.catch((err)=>{
    console.log(err);
})

//using fetch with async and await
async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2= await res2.json();
        console.log(data2.fact);
    }
    catch(err){
        console.log(err);
    }
}

getFacts();