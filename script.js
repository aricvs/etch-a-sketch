let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < gridSize * gridSize; i++) {
  const gridCell = document.createElement("div");
  gridCell.setAttribute("class", "grid-cell");
  gridContainer.appendChild(gridCell);
}
