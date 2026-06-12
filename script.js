const container = document.querySelector("#container");

for (i=0; i<256; i++) {
    const divCreation=document.createElement("div")
    divCreation.classList.add("square");

      divCreation.addEventListener("mouseover", () => {
        divCreation.classList.add("permahover");
    });
    container.appendChild(divCreation)
}

const button = document.querySelector("#buttonStyle");
button.addEventListener("click", {

});

function makeSize(){

    let size=prompt("Enter the number of squares per side (maximum 100):")
}
