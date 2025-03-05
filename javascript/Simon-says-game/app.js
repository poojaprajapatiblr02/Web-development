let gameSeq=[];
let userSeq=[];

let btns =["yellow","red","purple","green"];

let started = false //tells if game has started or not
let level = 0;
let highScore = localStorage.getItem('simonHighScore') || 0;

let h2=document.querySelector("h2");

let start =()=>{ document.addEventListener('keypress',function(){
   if(started == false){
    console.log("game started");
    started=true;
    levelUp();
   }
});
}

start();

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}<br> Highest score ${highScore}`;
    let randomIdx=Math.floor(Math.random()*4);//random button choose - first accesing a random index from btns array
    let randomColor=btns[randomIdx];  //using the index and choosing a random color
    let randomBtn = document.querySelector(`.${randomColor}`);  //selecting the random color from the html page
    // console.log(randomIdx,randomColor,randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randomBtn);   //calling btnFlash on the random color selected
}

function checkAns(idx){
    // let idx=level-1 //always level number is equal to the number of colors in the seq array
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            if (level > highScore) {
                highScore = level;
                localStorage.setItem('simonHighScore', highScore);
            }
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level-1}</b> <br>Highest Score: ${highScore} <br>Press any Key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    //console.log(this);
   let btn =this;
   userFlash(btn);

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq = [];
    userSeq =[];
    level =0;
    start();
    // h2.innerHTML = `Press any key to start<br>Highest Score: ${highScore}`;
}