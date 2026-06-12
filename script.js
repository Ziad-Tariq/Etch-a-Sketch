const container = document.querySelector("#container");

function createGrid(size){

for (let i=0; i<size*size; i++) {
    const divCreation=document.createElement("div")
    divCreation.classList.add("square");

      divCreation.addEventListener("mouseover", () => {
        divCreation.classList.add("permahover");
    });

    container.appendChild(divCreation)
    
} }

createGrid(16);

function makeSize(){

    let newSize=parseInt(prompt("Enter the number of squares per side (maximum 100):"))

    if(newSize>100){
        return alert("The Maximum Grid size is 100");  
    }

    return newSize;
}


const button = document.querySelector("#buttonStyle");
button.addEventListener("click", () => {

    container.innerHTML="";
    createGrid(makeSize());
    
} );