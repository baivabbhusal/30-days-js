//Activity 1--Array creation and access

let myArray=[1,2,3,4,5];
console.log(myArray);
console.log("........................................................");
//access first and last element
console.log(myArray[0]);
console.log(myArray[myArray.length-1]);
console.log("........................................................");

//Activity 2--Array Methods
// push pop shift unshift

myArray.push("Baivab");
console.log(myArray);
console.log("........................................................");
myArray.pop();
console.log(myArray);
console.log("........................................................");
myArray.unshift("Bhusal");
console.log(myArray);
console.log("........................................................");
myArray.shift();
console.log(myArray);
console.log("........................................................");

//Activity 3--Array Methods
//map to double
let x;
const map1=myArray.map((x)=>{
    return x*2});
console.log(map1);
console.log("........................................................");

const filter1=myArray.filter((x)=>x%2!=0);
console.log(filter1);

// Activity 4--array iterative
for(let i of myArray)
{
    console.log(i);
}