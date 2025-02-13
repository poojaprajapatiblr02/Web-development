const max=prompt("Enter the max number");

const random= Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;
    }
    if(guess==random){
        console.log("You are right!, congrats!!");
        break;
    }else if(guess< random){
        guess=prompt("Hint: your number was too small. please try again");
    }else{
        guess=prompt("Hint: your number was too large. please try again");
    }
}