/*-----------------------------Practice question---------------------------------*/
//Adding elements to the container using only js and dom methods

let p = document.createElement('p');
p.innerHTML = 'Hey, I am Red';
document.querySelector('body').append(p);
p.classList.add('red');


let h3 = document.createElement('h3');
h3.innerHTML = 'Hey, I am an blue h3';
document.querySelector('body').append(h3);
h3.classList.add('blue');


let div = document.createElement('div');
let h1 = document.createElement('h1');
let para = document.createElement('p');

h1.innerText ="I am  in a div";
para.innerText = "ME TOO!";

div.append(h1,para);
div.classList.add('box');
document.querySelector('body').append(div);


/*-----------------------------Assignment question---------------------------------*/
//1.create a new input and button element on a page using js only . set the text of the button to 'click me'
let input = document.createElement('input');
let button = document.createElement('button');
let br = document.createElement('br');
button.innerHTML = 'click me';
document.querySelector('body').append(br,input,button);

//2.add the following attributes, -change the placeholder of input to "username", -change the id of the button to "btn"
input.setAttribute('placeholder','username');
button.setAttribute('id','btn');

//3.access the button using query selector and button id. change the button bg color ot blue and text color to white
document.querySelector('#btn').classList.add('btn');

//4. create an h2 element on the page and set its text to "DOM Practice" underlined.Change its color to purple.
let h2 = document.createElement('h2');
h2.innerHTML = "<u>DOM Practice</u>";
document.querySelector('body').append(h2);
h2.classList.add('h2');

//5.create a p element on the page and set its text to "<b>JavaScript</b> Practice". append it to the body
let tag = document.createElement('p');
tag.innerHTML = '<b>Javascript</b> Practice';
document.querySelector('body').append(tag);