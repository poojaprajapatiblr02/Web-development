//selecting html elements using js
console.dir(document);             
console.dir(document.all);   //has all the html elements as a object
console.dir(document.all[8]);      //all is a collection,accessing the 8th key, here the all[8] is h1 tag 
console.dir(document.all[8].innerText);           //Spider Man
//Manipulating
document.all[8].innerText ="SPIDER"


/*---------------------------------Selecting Elements----------------------------------------------------------------*/
//1.getElementById
console.log(document.getElementById("mainImg"));    // <img src="assets/spiderman_img.png" id="mainImg" />
let imgObj = document.getElementById("mainImg");
console.dir(imgObj);
console.log(imgObj.src);                        //file:///E:/javascript/DOM-js9/assets/spiderman_img.png
console.log(imgObj.tagName);                    //IMG
imgObj.src = "assets/creation_1.png"            //manipulated and added another img in the same place
console.log(document.getElementById("anc"));    //null - because no element with id "anc" exists in the document

//2.getElementsByClassName
console.log(document.getElementsByClassName("oldImg"));   //HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg]
console.dir(document.getElementsByClassName("oldImg"));   //HTMLCollection(3)
let smallImages = document.getElementsByClassName("oldImg");
for(let i=0; i<smallImages.length;i++){
    console.dir(smallImages[i]);
    console.dir(smallImages[i].src);
    smallImages[i].src ="assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed`);
}


//3.getElementsByTagName
document.getElementsByTagName("p")[1].innerText =document.getElementsByTagName("p")[1].innerText+ "abc"



/*---------------------------------------------Query Selector------------------------------------------------------*/
console.dir(document.querySelector("p"));  //selects the first p tag
document.querySelector("#mainImg"); //selects the first element with id mainImg
document.querySelector(".oldImg"); //selects the first element with class oldImg
document.querySelector("img"); //selects the first img tag
document.querySelectorAll("p"); //selects all the p tags

//can do nesting also inside querySelector
document.querySelector("div img").src = "assets/spiderman_img.png";

/*----------------------------------------properties and methods for manipulation -----------------------------------*/
//1. innerText - returns the text content of the element
let para =document.querySelector("p").innerText;     
console.log(para);

//2.innerHTML - returns the html content of the element including the tags
let para1 =document.querySelector("p").innerHTML;
console.log(para1);
// changing the styling
document.querySelector("h1").innerHTML = "<u>Spider Man </u>";
document.querySelector("h1").innerHTML =`<i>${document.querySelector("h1").innerText}</i>`;

3.//textContent - returns the text content of the element including  the text contents that are given display none property and also it displays the texts in new line as given in the html file
let para2 =document.querySelector("p").textContent;
console.log(para2);

/*------------------------------------------Manipulating Attributes--------------------------------------------------------*/
//1.getAttribute
let img = document.querySelector("img");
console.log(img);
console.log(img.getAttribute("id"));

//2.setAttribute
img.setAttribute("id","newImg");
console.log(img.getAttribute("id"));

img.setAttribute("src","assets/creation_3.jpeg");


/*------------------------------------------Manipulating Styles--------------------------------------------------------*/
//1.style.property - can access only inline css not external css and the properties all also set as inline css
let h1 = document.querySelector("h1");
console.log(h1.style);

h1.style.color = "red";
h1.style.backgroundColor ="yellow";

let links = document.querySelectorAll(".box a");
//links.style.color ="green"; //error as links is a collection
for(let i=0; i<links.length;i++){
    links[i].style.color ="green";
}

//2.classList - to add,remove and toggle classes, the classes are defined in the css file
let heading = document.querySelector('h2');
console.log(heading.classList);    //heading has no class
heading.classList.add("green");    //heading has class green - the styling for this class can be defined in the css file, hence whenver this class is added to the element the styling will be applied
heading.classList.add("blue");     //heading has class blue
console.log(heading.classList);   //heading has class green and blue
heading.classList.remove("blue"); //heading has class green
heading.classList.contains("green"); //true
heading.classList.toggle("green"); //heading has no class
heading.classList.toggle("green"); //heading has class green
//toggle adds the class if it is not present and removes the class if it is present



/*------------------------------------------Navigating the DOM--------------------------------------------------------*/

//1.parentElement - returns the parent element of the selected element
let list = document.querySelector("ul");   //selecting the ul element
console.log(list.parentElement);    //div.box

//2.children - returns the children of the selected element
console.log(list.children); //HTMLCollection(3) [li, li, li]
console.log(list.children[0]); //li
console.log(list.childElementCount); //3

//3.nextElementSibling/previousElementSibling - returns the next/previous sibling of the selected element
console.log(list.nextElementSibling); //null
console.log(list.previousElementSibling); //<h4>Publication Info </h4>

//changing the style using navigation
list.previousElementSibling.style.color = "red";




/*------------------------------------------Creating and Adding Elements--------------------------------------------------------*/
//1.createElement
let newPara = document.createElement("p");
console.log(newPara); //<p></p>
newPara.innerText = "This is a new paragraph";
console.log(newPara); //<p>This is a new paragraph</p>

let btn = document.createElement("button");
btn.innerText = "Click Me";

//2.Adding Elements

//appendChild - adds the element as the last child of the selected element
document.querySelector(".box").appendChild(newPara);

//append - this can be used to append strings ,lements,txt etc
document.querySelector(".box").append("Hello");
document.querySelector(".box").append(btn);
newPara.append(" Hello");
newPara.append(btn);        //append does not create multiple copies of the button, it just appends the same button to the new given position

//prepend - adds the element as the first child of the selected element
document.querySelector(".box").prepend(newPara);
document.querySelector(".box").prepend("Hello");
newPara.prepend(btn);

//insertAdjacentElement - adds the element at the specified position (insertAdjacentElement(position,element))

    //beforebegin - before the selected element
    let btn1 = document.createElement("button");
    btn1.innerText = "Before Begin";
    document.querySelector("p").insertAdjacentElement("beforebegin",btn1);

    //afterbegin - as the first child of the selected element
    let btn2 = document.createElement("button");
    btn2.innerText = "After Begin";
    document.querySelector("p").insertAdjacentElement("afterbegin",btn2);

    //beforeend - as the last child of the selected element
    let btn3 = document.createElement("button");
    btn3.innerText = "Before End";
    document.querySelector("p").insertAdjacentElement("beforeend",btn3);

    //afterend - after the selected element
    let btn4 = document.createElement("button");
    btn4.innerText = "After End";
    document.querySelector("p").insertAdjacentElement("afterend",btn4);




/*------------------------------------------Removing Elements--------------------------------------------------------*/
//1.removeChild - removes the child element of the selected element
let box = document.querySelector(".box");
box.removeChild(newPara); //removes the newPara element

//2.remove - removes the selected element
btn.remove();







