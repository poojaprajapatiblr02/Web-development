const express = require("express");
const app = express();
const port =8080;

//middleware to parse the body of the request
app.use(express.urlencoded({extended:true})); //this is a standard line that will parse the body of the request that is urlencoded
app.use(express.json()); //this is a standard line that will parse the body of the request that is json

app.get("/register",(req,res)=>{  
    //accessing query parameters from the url by deconstructing and using in the response
    let {user, password} = req.query;
    res.send(`Standard GET response. Welcome ${user}, your password is ${password}`);
})

app.post("/register",(req,res)=>{
    //accessing body parameters from the request
    console.log(req.body); //undefined (without parsing)  //body has the data but it is undefined here because we haven't used any middleware to parse the body. after parsing the output will be { user: 'pooja', password: '123' }
    //to access body parameters we need to use middleware like express.urlencoded or express.json(). the middleware to parse is written in line number 6 and 7
    let {user, password} = req.body; //this will give us the body parameters because we have parsed the data using middleware
    res.send(`Standard POST response. Welcome ${user}, your password is ${password}`);   
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});