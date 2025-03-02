//mouseout event
let btn = document.querySelector('#btn');
btn.addEventListener('mouseout',function(){
    alert('Mouse out');
})

//keypress event
let inp = document.querySelector('input');
inp.addEventListener('keypress',function(){  //keypress fired only when a key that produces a character value is pressed
    console.log('Key pressed');
})

//scroll event
let div = document.querySelector("div");
div.addEventListener('scroll',function(){
    console.log('Scrolling');
});

//load event
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 2000);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});


//Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked
let btn1=document.createElement('button');
btn1.textContent='Click me';
document.body.appendChild(btn1);
btn1.addEventListener('click',function(){
    btn1.style.backgroundColor='green';
})

let br = document.createElement('br');
document.body.appendChild(br);
let br1 = document.createElement('br');
document.body.appendChild(br1);

//Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML. The purpose of this input element is to enter a user’s name so it should only input letters from a-z, A-Z and space(all other characters should not be detected). Whenever the user inputs their name, their input should be dynamically visible inside the heading .[Please note that no other character apart from the allowed characters should be visible in the heading
let input=document.createElement('input');
input.setAttribute('placeholder','Enter your name');
document.body.appendChild(input);
let h2=document.createElement('h2');
document.body.appendChild(h2);
input.addEventListener('input',function(){
    let str=input.value;
    let regex=/[^a-zA-Z ]/g;
    let result=str.replace(regex,'');
    h2.textContent=result;
})