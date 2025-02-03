//Activity-1 Arithmetic Operation
let a=23;
let b=34;

console.log(a+b);
console.log(a-b);
console.log(b%a);
console.log(b/a);
console.log(a*b);

//Activity-2 Comparision Operator
if(a>b)
{
    console.log("A is greater");
}
else if (a==b){
    console.log("Equal");
}
else{
    console.log("B is greater");
}

//Activity-3 logical Operator
const haveLicense=true;
let age=32;
if(age>=18 && haveLicense)
{
    console.log("You can drive");

}
else{
    console.log("You cannot drive");
}

//Activity-4 Ternary Operator
let number=-34;
let result=(number>0)?"Its positive":"Else negative";
console.log(result);

