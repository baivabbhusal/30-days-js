//Activity 1: Basic Event Handling
const button=document.querySelector("#button");
const paragraph=document.querySelector("#para");

//Add a click event listener to a button that changes the text content of a paragraph.

button.addEventListener("click",()=>{
    paragraph.innerHTML="I am changed paragraph."
});

const imageClick=document.querySelector("#marriage-image");
imageClick.addEventListener("dblclick",()=>{
    imageClick.style.visibility="hidden";
})

//Activity 2-Mouse Events
imageClick.addEventListener("mouseover",()=>{
    imageClick.style.border="4px solid green";
})

button.addEventListener("mouseout",()=>{
    button.style.backgroundColor="pink";
})

//Activity 3:Keyboard Events
//Add a keydown event listener to an input field that logs the key pressed to the console
// const writeText=document.querySelector("log-to-console");
// writeText.addEventListener("keydown",(event)=>{
//     console.log("Key pressed:",event.key);
// });


//Activity 4:Form event
//Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();

const name=document.querySelector("#name").value;
console.log(name);
});

//Add a change event listener to a select dropdown that displays the selected value in a paragraph.

