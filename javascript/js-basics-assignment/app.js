// Program to delete all occurances of element "num" in given array
let n=prompt("Enter the length of the array");
let arr=[];
for(let i=0;i<n;i++){
     let ele=prompt(`Enter the ${i}th Element`);
     arr.push(ele);
}

console.log(arr);

let num=prompt("Enter the num you want to delete");

for(let i=0;i<n;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);


//program to find number of digits in a array
let number=prompt("Enter the number");
let count=0;
for (i of number){
    count++; 
}
console.log(count);


//program to find sum of digits in a number
let number1=prompt("Please enter the number");
parseInt(number1);
 let copy=number1;
 let digit=0,sum=0;
 while(copy>0){
    digit =copy%10;
    sum+=digit;
    copy=Math.floor(copy/10);
 }
 console.log(sum);


//factorial of number
let num2=prompt("Enter number");
let fact=1;
for(let i=num2;i>0;i--){
    fact=fact*i;
}
console.log(fact);


//largest number in array
let n1=prompt("Enter the length of the array");
let arr1=[];
for(let i=0;i<n;i++){
     let ele=prompt(`Enter the ${i}th Element`);
     arr1.push(ele);
}

console.log(arr1);
let max=0;
for(let i=0;i<n;i++){
    if(max<arr1[i]){
        max=arr1[i];
    }
}
console.log(max);


