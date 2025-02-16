//function to return array elements larger than a number
let arr=[10,30,50,20,15];
let num = 26;
function largeElements(arr,num){
    let resArr =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            resArr.push(arr[i]);
        }
    }
    return resArr;
}
console.log(largeElements(arr,num));     //2,[30,50]



//function to extract unique characters from a string
let str1 = "abcdabcdefgggh";
function uniqueChars(str1){
    let res ="";
    for(let i=0;i<str1.length;i++){
        if(res.indexOf(str1[i])==-1){     //str[i] is not present in res(index =-1) hence it is added as it is unique else it is duplicate 
            res+=str1[i];
        }
    }
    return res;
}
console.log(uniqueChars(str1));



//function input->list of countries     output -> longest country name
let countries = ["Australia","Germany","United States of America"];
function longestStr(arr){
    let max=arr[0].length;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(longestStr(countries));



//function to count the number of vowels in a string
function vowelCount(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u' )
            count++;
    }
    return count;
}
console.log(vowelCount(str1));



//function to generate a random number within the range start,end
let start = 100;
let end = 200;
function generateRandom(start,end){
    let diff=end-start;
    return Math.floor(Math.random()*diff) +start;
}
console.log(generateRandom(start,end));

