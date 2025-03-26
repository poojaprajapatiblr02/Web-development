//running fist project using express 
//steps
    //1.create empty directory
    //2.npm init
    //3.npm install express
    //4.created file index.js

//the following code is present in npm website under express documentation getting started


const express = require('express');    //requiring express, the express that we have required is a function that we can exectue
//express();
const app = express();   //the express() function returns a value that we are storing in a variable app, which is a object. This helps us create our server side apps
//console.dir(app);   //printing the object

let port =8000;    //initializing a variable port that will go as paramter in the listen function
                   //ports are logical endpoints of a network connection that is used to exchange info between web server and a web client

//listen is one of the most important functions of express, has 2 arguments
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})


//run the file using node index.js
//localhost:8000 for now will return a window with message "cannot GET /". this means the server is running and lsitening but there is no suitable response to return

/*------------------------------------------------------sending request----------------------------------------------------------------------*/
//use() method is used to send request. this method will listen to any type of request (get,post,put etc) and call back will be executed
app.use((req,res)=>{         //req and res are the two default parameters
    //console.log(req);
    //console.log(res);    //both req and res objects have soo many methods, the method used to send response is send()
    //res.send("this is reponse");
    
    let code ="<h1>Fruits</h1><ul><li>Mango</li><li>Orage</li></ul>"
    res.send(code);
    console.log("new incoming request");
})

//request sent on any route will give the same response if app.use() method is used.//comment out the app.use function to test the below routings


/*------------------------------------------------Routing---------------------------------------------------------------------------------------------------*/
//routing is the process of selecting a path for traffic in a network or between or across multiple networks
//for one path only one response can be sent 
//app.get is used to give responses for get requests
//it has 2 arguments path and callback.
app.get("/",(req,res)=>{
    res.send("Hello,You contacted root path");
})

app.get("/Mango",(req,res)=>{
    res.send("you contacted Mango Path");
})

app.get("/Orange",(req,res)=>{
    res.send("You contacted Orange path");
})

app.get("*",(req,res)=>{                 //if request is sent on any other path than the above mentioned paths, * path will be executed instead of giving 404 not found error
    res.send("This page does not exist");
})

//for post request
app.post("/",(req,res)=>{
    res.send("You sent a post request to root");
})


/*------------------------------------------Path parameters---------------------------------------------------------------------------------------------------------*/
//whenever we have to send variables in a path they are sent in the form of path parameters. in instagram the username after the url is a path paramater.
app.get("/:username",(req,res)=>{
    console.log(req.params);             /*{ username: 'pooja' }
                                            { username: 'favicon.ico' }*/
   res.send("hey");
})

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);               //{username:'pooja',id:'123'}
    let {username,id}=req.params;
    let htmlstr=`<h1>Welcome to the page of @${username}</h1>`
    res.send(htmlstr);        //Welcome to the page of @pooja
})

/*------------------------------------------Query Strings------------------------------------------------------------------*/
app.get("/search",(req,res)=>{       //http://localhost:8000/search?q=apple&color=green
    console.log(req.query);          //{ q: 'apple', color: 'green' }
    let {q} = req.query;
    if(!q){                           //if q is not given during search i.e http://localhost:8000/search?q
        res.send("Nothing searched"); 
    }
    res.send(`<h1>Search results for query:${q}</h1>`)      //Search results for query:apple
})