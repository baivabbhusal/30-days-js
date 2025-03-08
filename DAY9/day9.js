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
books.appendChild(li);

//Activity 3:Removing Elements

changeColor.remove();

//Activity 4:Modifying Attributes and classes
const image=document.querySelector("img");
image.src="pic.jpg";

//add and remove a class to/from an html element
const changeClass=document.querySelector("#change-class");
changeClass.className="add-class";
changeClass.classList.remove("add-class");

//Activity 5:Event Handliing
const button=document.querySelector("#button");
button.addEventListener("click",()=>{
    changeClass.innerText="I am changed by button click."
})





