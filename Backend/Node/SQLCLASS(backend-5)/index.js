const { faker } = require('@faker-js/faker');  //require faker package
const mysql = require('mysql2');  //require mysql2 package
const express = require('express');  //require express package
const app= express();  //create an instance of express
const path = require('path');  //require path package to handle file paths
const methodOverride = require('method-override');  //require method-override package to handle patch requests
const { v4: uuidv4 } = require('uuid');  // Add UUID import for generating unique IDs

app.use(methodOverride("_method")); //use method-override middleware to handle patch requests
app.use(express.urlencoded({extended:true}));  //use express middleware to parse urlencoded data from the request body
app.set('view engine', 'ejs');  //set the view engine to ejs
app.set("views", path.join(__dirname, "/views"));  //set the views directory to the views folder in the current directory

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'delta_app'
});






// Connect to the database

//let querry = "show tables";  //query to show tables in the database

//inserting single user data into the database manually
//let querry ="insert into user(id,username,email,password) values (?,?,?,?)";  //query to insert data into user table using placeholders to insert the values dynamically instead of static values
//let user = ["123", "john_doe", "john@example.com", "password123"];

//inserting multiple user data into the database manually
// let querry = "insert into user(id,username,email,password) values ?";
// let users = [                                 //using array of arrays to insert multiple user data at once
//  ["124", "jane_doe", "jane@example.com", "password456"],
//  ["125", "alice", "alice@example.com", "password789"]
// ];

// try{
// connection.query(querry, user, (err, results) => {           //change the parameter user to array i.e [user] to insert multiple user data
//   if (err) throw err;
//     console.log(results);      //output for the querry show tables [ { Tables_in_delta_app: 'temp' } ]  //displays the tables in the database - show tables  //displays the result in an array format

// });
// }catch(err){
//   console.error('Error connecting to the database:', err);
// }

//connection.end();  //close the connection to the database






//inserting multiple user data using faker packages generated data

let getRandomUser = () => {    // Function to create a random user object got the function from npm package faker website
  return [
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// let querry2 = "insert into user(id,username,email,password) values ?";
// let data=[];
// for (let i=0;i<100;i++){
//   //console.log(getRandomUser());  //log the random user data to the console
//   data.push(getRandomUser());  //push the random user data into the data array
// } 

// try{
// connection.query(querry2, [data], (err, results) => {           
//     console.log(results);     

// });
// }catch(err){
//   console.error('Error connecting to the database:', err);
// }

// connection.end();  //close the connection to the database



//home route
app.get("/", (req,res)=>{
  let q=`Select count(*) from user`;
  try{
  connection.query(q,(err,result)=>{
    if(err) throw err;
    let count = result[0]['count(*)'];  //get the count of users from the result
    res.render("home.ejs", {count });   
   });
  }catch(err){
    console.log(err);
    res.send("Error fetching data from database");
  }
  //res.send("Welcome to Home page");
});


//show users route
app.get("/user",(req,res)=>{
  let q=`select * from user`;
  try{
  connection.query(q,(err,result)=>{
    if(err) throw err;
    res.render("showusers.ejs", { users: result });
   });
  }catch(err){
    console.log(err);
    res.send("Error fetching data from database");
  }
})


//edit route
app.get("/user/:id/edit", (req,res) =>{
  let {id} = req.params;
  let q = `select * from user where id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user= result[0];
      res.render("edit.ejs", { user });
    });
  }catch(err){
    console.error('Error fetching user data:', err);
  }
})


//update (db)route
app.patch("/user/:id", (req,res)=>{
  let {id} = req.params;
  let {password:formPass, username:newUsername}= req.body;  //destructure the request body to get the password and username
  let q = `select * from user where id='${id}'`;                                //3 parts in edit function - 1. get the user data from db, 2. compare the password, 3. update the username in db
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user= result[0];
      if(formPass !== user.password){
        res.send("Wrong password");
      }else{
        let q2 = `update user set username='${newUsername}' where id='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");
        });
      }
    });
  }catch(err){
    console.error('Error fetching user data:', err);
  }
})

app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  //Query to Insert New User
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});

app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.listen("8080", () =>{
  console.log("Server is running on port 8080");
})