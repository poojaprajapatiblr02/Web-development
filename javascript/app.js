//Loops

//for  loop
for(let i=0;i<=5;i++){
    console.log(i);
}

//print odd numbers from 1 to 15
for(let i=2;i<=10;i=i+2){
    console.log(i);
}

//5 table
let n=prompt("Enter your number")
for(let i=1;i<=10;i++){
    console.log(`${n} * ${i} = ${n*i}` )
}

//guess my fav movie game
const fav="pk";
let guess=prompt("enter my fav movie");
while(guess!=fav && guess!="quit"){
    guess=prompt("wrong guess try again");
}
if(guess== fav){
    console.log("congrats");
}else {
console.log("you quit");
}

//for of loop for 2d array
let stud=[["pooja",90],["anu",98]];
for(student of stud){
    for(info of student){
        console.log(info);
    }

}