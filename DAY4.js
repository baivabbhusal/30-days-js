//for loop
for(let i=1;i<=10;i++){
    console.log("5 * "+i+' ='+5*i);
}
console.log(".....................................");
//while loop
let i=0;
while(i<=10){
    console.log(i);
    i++;
}
console.log(".....................................");

//do while
let a=5;
do{
    console.log(a);
    a--;
}while(a>0);
console.log(".....................................");

//factorial
let num=4;
let fact=1;
do{
    fact=fact*num;
    num--;
}while(num>0);
console.log(`The factorial is ${fact}`);
console.log(".....................................");

//loop control statement
for(let b=1;b<=5;b++){
    if(b==3){
        continue;
    }
        else{
    console.log(b);
}
}
console.log(".....................................")
for(let c=1;c<=5;c++){
    if(c==3){
        break;
    }
        else{
    console.log(c);
}
}
console.log(".....................................")