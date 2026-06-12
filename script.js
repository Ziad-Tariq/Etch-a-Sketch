const container = document.querySelector("#container");
const containerSize = 500;

function createGrid(size) {
  const squareSize = containerSize / size; 

  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const divCreation = document.createElement("div");
    divCreation.classList.add("square");
    divCreation.style.width = squareSize + "px";
    divCreation.style.height = squareSize + "px";
    divCreation.addEventListener("mouseover", () => {
      divCreation.classList.add("permahover");
    });
    container.appendChild(divCreation);
  }
}

createGrid(16);

function makeSize(){

    let newSize=parseInt(prompt("Enter the number of squares per side (maximum 100):"))

    if(newSize>100){
    return alert("The Maximum Grid size is 100");  
        return 16;
    }

    return newSize;
}


const button = document.querySelector("#buttonStyle");
button.addEventListener("click", () => {
    createGrid(makeSize());
    
} );