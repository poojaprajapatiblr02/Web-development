//npm init -y
//npm install express and ejs
//create index.js
const express = require('express');
const app = express();
const path = require('path'); //path module is used to get the absolute path of the views folder, becuase if we try to run the code from another directory, it will not find the views folder(the view will be searched in the outer directory)

const port = 3000;

//using ejs
//we do not have to require ejs as express will internally require it
app.set("view engine", "ejs");   //this will set the view engine to ejs

//serving static files - means serving the css and js files along with the html files
//by default express will look for the static files in the public folder, so we have to create a public folder in the same directory as index.js
//app.use(express.static("public")); //this will serve the static files from the public folder, we can create a public folder in the same directory as index.js and put the css and js files in it
//we can also use the path module to get the absolute path of the public folder 
app.use(express.static(path.join(__dirname, "public/css"))); //this will serve the static files from the public folder, we can create a public folder in the same directory as index.js and put the css and js files in it
app.use(express.static(path.join(__dirname, "public/js"))); //this will serve the static files from the public folder, we can create a public folder in the same directory as index.js and put the css and js files in it

//path is a package that we require above, it is used to get the absolute path of the views folder
app.set("views", path.join(__dirname, "/views")); //this will set the views folder to the views folder in the current directory(__dirname is the current directory)

//create a folder named views in the same directory as index.js
//the files in the views folder will be used as templates, These template files will have .ejs extension
//.ejs have a mix of HTML and JS
app.get("/", (req, res) => {               //http://localhost:3000
    res.render("home.ejs",{name:'John Doe'}); //this will render the home.ejs file in the views folder, No need to mention the path as express will look for the views folder by default
});                    //name is a variable that we are passing to the home.ejs file, we can use it in the ejs file as <%= name %> to get the value of the variable

app.get("/rolldice",(req,res)=>{            //http://localhost:3000/rolldice
  let dice = Math.floor(Math.random()*6)+1; //this will generate a random number between 1 and 6
  //res.render("rolldice.ejs",{dice:dice}); //generally we use the same name for both key and value in the passing object(here dice-the variable passed)
  res.render("rolldice.ejs",{dice});  //since we generally use the same name, we can use this shorthand to pass the variable to the ejs file
})

//creating a basic template for instagram page based on the route /ig/:username
app.get("/ig/:username",(req,res)=>{             //http://localhost:3000/ig/pooja
  let {username} = req.params;
  let followers =["John Doe", "Jane Doe", "Jack Doe", "Jill Doe", "Jim Doe"];  //for loops in ejs, printing the followers array using for loop
  res.render("instagram.ejs",{username, followers});   //followers array also passed to the ejs file
})

//creating a basic template for instagram - assuming data coming from a database (here data stored in data.json file in the same folder)
app.get("/igs/:username",(req,res)=>{            //http://localhost:3000/igs/pooja
  let instaData = require("./data.json"); //importing the data from data.json file
  let {username} = req.params; //getting the username from the url
  //console.log(instaData);
  let data = instaData[username]; //getting the data for the username from the data.json file
  //console.log(data);
  if(data){
  res.render("insta.ejs",{data}); //passing the data to the ejs file
}else{
  res.render("error.ejs"); //if the data is not found, render the error.ejs file
}
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});