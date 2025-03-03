//Activity 1: Selecting and Manipulating Elements
const heading=document.querySelector("#heading");
heading.innerText="Hello Javascript";
const changeColor=document.querySelector(".color");
changeColor.style.backgroundColor="blue";

//Activity 2:Creating and appending elements
const div=document.createElement("div");
div.className="main";
div.style.color="green";
const addText=document.createTextNode("Hello Baivab ");
div.appendChild(addText);
document.body.appendChild(div);

//new li element in existing ul
const books=document.querySelector("#books");
const li=document.createElement("li");
const liText=document.createTextNode("Rich Dad Poor Dad");
li.appendChild(liText);
document.body.books.appendChild(li);


