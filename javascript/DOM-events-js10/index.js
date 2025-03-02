//onClick event 
let btn = document.querySelector('.btn');
    btn.onclick = function() {
      alert('Hello');    
    }
// btn.addEventListener('click', function() {
//   alert('Hello');
// });

let likes = document.querySelectorAll(".like");
for(like of likes){
like.addEventListener("click", function() {
  alert("Liked");
});
}



//onMouseOver event
let dislike = document.querySelector('.dislike');

dislike.onmouseenter = () => {
  alert('Disliked');
}
// dislike.addEventListener('mouseover', function() {
//   alert('Disliked');
// });


//event listener - used because with event listner we can add multiple events to the same element
 function sayhi(){
    alert('Hi');
 }

 function sayHiAgain(){
   alert('Hi Again');
 }  

let hiBtn = document.querySelector('.hi');
// hiBtn.addEventListener("click", sayhi);
// hiBtn.addEventListener("click", sayHiAgain);
hiBtn.addEventListener("dblclick", function(){
    alert('You double clicked me');
});


//adding event listeners for items elements other that buttons
let p = document.querySelector('p');
p.addEventListener('click',function(){
  console.log('You clicked the paragraph');
});

let div =document.querySelector('.box');
div.addEventListener('mouseenter',function(){
  console.log('You entered the box');
});

//this is event listeners - this refers to the element that triggered the event
let btn1 = document.querySelector('.th');
btn1.addEventListener('click',function(){
  console.log(this);
  console.dir(this);
})

//this is usefull when we have to add event listeners to multiple elements
let items = document.querySelectorAll('.item'); 
items.forEach(function(item){
  item.addEventListener('click',function(){
    console.dir(this.innerText);
    this.style.backgroundColor='blue';
  });
});

//event object - it is passed as an argument to the event listener function
let btn2 = document.querySelector('.event');
btn2.addEventListener('click',function(e){
  console.log(e);             //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  console.log(e.target);      //<button class="event">Event</button>
  console.log(e.type);        //click
});


//keyboard events
let input = document.querySelector('.input');
input.addEventListener('keydown',function(e){
  console.log(e);
  console.log(e.key);   //this property gives the key pressed eg. a,b,c,1,2,3 etc
  console.log(e.code);  //this property gives the code of the key pressed eg. KeyA, KeyB, Digit1, Digit2 etc
  console.log('You pressed a key');
})

input.addEventListener('keyup',function(){
  console.log('You released a key');
})


//form events
let form = document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault(); //this method prevents the default action of the form  
  alert('Form Submitted');
});
//extracting form data
let form1 = document.querySelector('.form1');
form1.addEventListener('submit',function(e){
  e.preventDefault();
  let user = document.querySelector('#un');
  let pass = document.querySelector('#pw');
  console.log(user.value);
  console.log (pass.value);
  alert(` Hi ${user.value}. Your password is set to ${pass.value}`);
});
//instead of using query selector to access each element of the form object, elements propery can also be used
let form2 = document.querySelector('.form1');
form2.addEventListener('submit',function(e){
  e.preventDefault();
 console.dir(form2);
 let use= this.elements[0];
let pas= this.elements[1];
console.log(use.value);
console.log(pas.value);
alert(` Hi ${use.value}. Your password is set to ${pas.value}`);
});

//change event - this event is triggered when the input field is changed from one state to another
let user = document.querySelector('#un');
user.addEventListener('change',function(){
  console.log('Username Changed');
  console.log("final value is "+user.value);
});

//input event - this event is triggered when the value of the input field is changed
user.addEventListener('input',function(){
  console.log('Username input ');
  console.log("final value is "+user.value);
});

let editor = document.querySelector('#editor');
editor.addEventListener('input',function(){
  console.log(editor.value);
  let edit= document.querySelector('#edit');
  edit.innerText = editor.value;
})

