let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const gridCell = document.createElement("div");
    gridCell.setAttribute("class", "grid-cell");
    gridContainer.appendChild(gridCell);
  }
}
