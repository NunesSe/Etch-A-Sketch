const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector(".clear");
const sketchButton = document.querySelector(".sketch");
let number = 16;

function drawGrid(number) {
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 0; i < (number**2); i++) {
        let div = document.createElement("div");
        gridContainer.appendChild(div);
        div.addEventListener("mouseover", function(event){
            event.target.style.background = "black";
        });
    }
}

function clearGrid(){
    gridContainer.innerHTML = "";
}

function newGrid() {
    let promptNumber = parseInt(prompt("Size of the new grid (limit of 70): "));
    if (promptNumber > 70 || promptNumber < 1) {
        clearGrid();
        drawGrid(number);
    }
    else {
        clearGrid();
        drawGrid(promptNumber);
        number = promptNumber;
    }
}

clearButton.addEventListener("click", function() {
    clearGrid();
    drawGrid(number);
})

sketchButton.addEventListener("click", newGrid);

drawGrid(number);