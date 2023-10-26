function generateGrid(gridSize) {
  const gridContainer = document.querySelector(".grid-container");

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.setAttribute("class", "grid-cell");
    gridContainer.appendChild(gridCell);
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  }
}

function hoverPaint() {
  const gridCells = document.querySelectorAll(".grid-cell");

  gridCells.forEach((cell) =>
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    })
  );
}

function setGridSize() {
  const gridSizeBtn = document.querySelector(".grid-size-btn");
  const gridContainer = document.querySelector(".grid-container");

  gridSizeBtn.addEventListener("click", () => {
    let newSize = 0;

    while (newSize == 0 || newSize > 100) {
      newSize = prompt("Choose new size for grid, max: 100");
    }

    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.lastChild);
    }

    generateGrid(newSize);
    hoverPaint();
  });
}

generateGrid(16);
hoverPaint();
setGridSize();
