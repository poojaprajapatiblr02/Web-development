//object literals
const post={
    username:"@pooja",
    content:"This is my #firstpost",
    likes: 150,
    reposts:5,
    tags:["@poojaA","@poojaP"],
};
//accessing post.username, post["username"]
//update
post.username="@poojaprajapati";
//add
post.location="Banglore";
//delete
delete post.content;


//Object of objects
const stud={
    aman:{
        grade:"A",
        city:"Delhi"
    },
    shradha:{
        grade:"B",
        city:"Mumbai"
    }
};
//acessing stud.aman, stud.aman.grade, stud["aman"]["grade"]


//Array of objects
const student=[
    {
        name:"aman",
        grade:"A",
        city:"Delhi"
    },
    {
        name:"Shradha",
        grade:"B",
        city:"Pune"
    }
];
//accessing student[0], student[0]["name"], student[0].name

//generate random number from 1 to 10
Math.floor(Math.random()*10+1);  //+1 is to include 10 else 1 to 9 generated
Math.floor(Math.random()*5)+1;   //random numbers between 1 to 5
Math.floor(Math.random()*5)+21; //random numbers 21 to 25