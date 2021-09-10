
function blackBg(event) {
    event.target.style.background = "black";
}

const gridContainer = document.querySelector(".grid-container");
let number = 16;
for(let i = 0; i < (16**2); i++) {
    let div = document.createElement("div");
    gridContainer.appendChild(div);
    div.addEventListener("mouseover", blackBg);
}