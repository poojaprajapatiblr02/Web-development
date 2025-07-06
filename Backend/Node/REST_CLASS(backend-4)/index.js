const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4} =  require('uuid'); // Importing uuid to generate unique IDs for posts (v4 is the version 4 for creating these new ids and giving the name uuidv4)
//uuidv4(); // Call uuidv4 to generate a unique ID in the posts object
const methodOverride = require('method-override'); // Importing method-override to allow us to use HTTP verbs such as PUT or DELETE in places where the client doesn't support it

//middleware to parse the incoming request body
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(methodOverride('_method')); // Enable method-override

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));   // Set the views directory to the 'views' folder

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' folder

let posts = [                    //since we are not using any database, we will use an array to store posts
    {
        //id:"1a",  //instead of using a static id, we will use uuid to generate a unique id for each post
        id: uuidv4(),  // Generate a unique ID for the post
        username:"apnacollege",
        content:"This is my first post",
    },
    {
        id: uuidv4(),
        username:"pooja",
        content:"Hard work is the key to success",
    },
    {
        id: uuidv4(),
        username:"rahulkumar",
        content:"I got selected for internship!",
    }
]

app.get("/posts", (req,res)=>{
    //res.send("Server is running");
    res.render("index.ejs", {posts });  // Render the index.ejs file
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");  // Render the new.ejs file which has the create new post form
});

app.post("/posts", (req, res) => {
    //console.log(req.body);  // Log the request body to the console
    //res.send("Post request working!");  // Send a response back to the client
    let { username, content } = req.body;  // Destructure the username and content from the request body
    let id = uuidv4();  // Generate a unique ID for the new post
    console.log(username, content);  // Log the username and content to the console
    posts.push({ id, username, content });  // Add the new post to the posts array
    res.redirect("/posts");  // Redirect to the /posts route to display all posts
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);  // Find the post with the matching id
    console.log(post);
    console.log(id);
    //res.send("request working");
    res.render("show.ejs", { post });  // Render the show.ejs file with the found post
})

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;  // Get the id from the request parameters
    let newContent=req.body.content;
    //console.log(newContent);
    let post =posts.find((p) => id === p.id);  // Find the post with the matching id
    post.content=newContent    //update the content of the post with new content
    //res.send("patch request working!");  // Placeholder for patch request
    res.redirect("/posts");  // Redirect to the show page of the updated post
})

app.get("/posts/:id/edit",(req,res) =>{
    let {id} = req.params;
    let post =posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;  // Get the id from the request parameters     
    posts = posts.filter((p) => p.id !== id);  // Filter out the post with the matching id (!= get the posts that do not match the id)
    //res.send("delete request working!");  // Placeholder for delete request
    res.redirect("/posts");  // Redirect to the /posts route to display all remaining posts
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});