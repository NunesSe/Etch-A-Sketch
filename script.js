const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector(".clear");
const sketchButton = document.querySelector(".sketch");
const blackButton = document.querySelector("#black");
const rainbowButton = document.querySelector("#rainbow");

let number = 16;
let defaultColor = "black";

function getRandomColor() {
    let hue = Math.floor(Math.random() * 361)
    
    return `hsl(${hue}, 80%, 50%)`;
  }
  
function drawGrid(number) {
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 0; i < (number**2); i++) {
        let div = document.createElement("div");
        div.style.background = "hsl(0, 0%, 100%)";
        // div.style.background = "gray";
        gridContainer.appendChild(div);
        div.addEventListener("mouseover", function(event){
            if (defaultColor == "black") {
                event.target.style.background = "black";

            }
            else if (defaultColor == "rainbow"){
                event.target.style.background = getRandomColor();
            }
        });
    }
}

function clearGrid(){
    gridContainer.innerHTML = "";
}

function newGrid() {
    let promptNumber = parseInt(prompt("Size of the new grid (limit of 70): "));
    if (promptNumber > 0 && promptNumber < 71) {
        clearGrid();
        drawGrid(promptNumber);
        number = promptNumber;
    }
    else {
        clearGrid();
        drawGrid(number);
    }
}

clearButton.addEventListener("click", function() {
    clearGrid();
    drawGrid(number);
})

sketchButton.addEventListener("click", newGrid);

blackButton.addEventListener("click", () => {
    defaultColor = "black";
    rainbowButton.classList.remove("active");
    blackButton.classList.add("active");
})

rainbowButton.addEventListener("click", () => {
    defaultColor = "rainbow";
    blackButton.classList.remove("active");
    rainbowButton.classList.add("active");
})

drawGrid(number);