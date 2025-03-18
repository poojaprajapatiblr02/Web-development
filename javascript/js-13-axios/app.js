/*----------------------------------------------------axios to call api in js----------------------------------------------------------------------------*/
let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res);              //{data: {…}, status: 200, statusText: 'OK', headers: r, config: {…}, …}
        console.log(res.data.fact);   //no need to parse the data, can get direct response
    }catch(err){
        console.log(err);
    }
}

getFacts();           //Milk can give some cats diarrhea.

/*--------------------------------adding it in html code*--------------------------------------------------------------------*/

let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact= await getFact();
    let p=document.querySelector("#result");
    p.innerText=fact;
})

async function getFact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(err){
        console.log(err);
        return "No fact found";
    }
}

//using dog api
let url2 = "https://dog.ceo/api/breeds/image/random";

let button = document.querySelector("#dog");

button.addEventListener("click",async()=>{
    let link = await getImage();
    let img = document.querySelector("#dogF");
    img.setAttribute("src",link);
})

async function getImage(){
    try{
        let res= await axios.get(url2);
        return res.data.message;
    }catch(err){
        return "/";

    }
}


/*------------------------------------------sending headers with api---------------------------------------------------------------------------*/
const url3 = "https://icanhazdadjoke.com/"

async function getJokes(){
    try{                                          //header to get response in json format instead of default html in this api
        const config = { headers: {Accept:"application/json"}};   //the header is passed as an object(key value pairs), 1st key is headers.
        let res = await axios.get(url3, config);   //the header is passed as the 2nd argument
        console.log(res.data);
    }catch(Err){
        console.log(Err);
    }
}


/*-------------------------------updating query strings in axios--------------------------------------------------------------------------------------*/
//query string is updated using  concatenation , the url contains the key part of the query string and the value for key is appended while calling the api
// eg here query string is search?name=nepal , here key is search?name= , and value is country name that is appended by getting the value from the user
let url4 = "https://universities.hipolabs.com/search?name=";

let bt = document.querySelector("#search");
bt.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;   //accessing the value entered in input
    console.log(country);
    let colleges = await getColleges(country);     //passing the input value as a parameter
    show(colleges);                    //function to display list of colleges in ul instead of array
})

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText="";  //to get only the current country list and not append all the country list
    for (col of colleges){
        //console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
async function getColleges(){
    try{
        let res = await axios.get(url4+country);    //query string is appended.
        return res.data;
    }catch(Err){
        console.log(Err);
        return [];
    }
    
}