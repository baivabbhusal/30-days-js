//Activity-1 Conditional stastement if......else
let age=30;
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}

//Activity-2 Nested if......else 
const haveLicense=false;
if(age>=18){
    if(haveLicense==true){
        console.log("You can drive");
    }
    else{
        console.log("You cant drive");
    }
}
else{
    console.log("You're child");
}

//Activity 3-switch case
const day=4;
switch(day){
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Error");
        break;
}

//Activity 4-Odd even using ternary operator
const number=34;
let result=(number%2==0)?"Even":"Odd";
console.log(result);

//Activity 4-Combining conditions
const year=2024;
if(year%4==0 && year%100!=0 || year%400==0)
{
    console.log(`${year} is a leap year.`)
}
else{
    console.log(`${year} is not a leap year.`)
}