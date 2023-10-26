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

function clearGrid() {
  const clearGridBtn = document.querySelector(".clear-grid-btn");

  clearGridBtn.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => cell.style.removeProperty("background-color"));
  });
}

// TODO: add a rainbow paint button

function rainbowModeToggle() {
  const rainbowBtn = document.querySelector(".rainbow-btn");
  let rainbowOn = false;

  rainbowBtn.addEventListener("click", () => {
    if (rainbowOn === false) {
      rainbowOn = true;
      rainbowBtn.style.backgroundColor = "green";
      hoverPaint(rainbowColor());
    } else {
      rainbowOn = false;
      rainbowBtn.style.removeProperty("background-color");
      hoverPaint();
    }
  });
}

function rainbowColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

// TODO: add a progressive color button

generateGrid(16);
hoverPaint();
setGridSize();
clearGrid();
rainbowModeToggle();
