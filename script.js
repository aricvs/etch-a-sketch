function generateGrid(gridSize) {
  const gridContainer = document.querySelector(".grid-container");

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.setAttribute("class", "grid-cell");
    gridContainer.appendChild(gridCell);
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  }
}

generateGrid(16);
