//Activity 1--Function decleration

function oddEven()
{
    var num=23;
    if(num%2==0)
    {
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
oddEven();

function square(n)
{
return n*n;
}
console.log(square(5));

//Function Expression
let maximum=function(a,b){
    if(a>b){
        console.log(`The maximum number is ${a}`);
    }
    else{
        console.log(`The maximum number is ${b}`);
    }
}
maximum(10,20);

//Activity 3-arrow function
let sum=(a,b)=>{
return a+b;
}
const resultOfSum=sum(3,2);
console.log(`The sum is ${resultOfSum}`);

//Activity 4 Function parameter and default value
function area(a,b=5){
    return a*b;
}
const resultOfArea=area(4);
console.log(`Area of rectangle is ${resultOfArea}`);