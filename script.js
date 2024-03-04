const containerDiv = document.querySelector(".container");
const btnChangeSize = document.querySelector(".change-size");
let gridSize = 16;
const createGrid = (num) => {
  containerDiv.innerHTML = "";
  for (let i = 0; i < num * num; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    containerDiv.appendChild(square);
    square.style.flex = `0 0 calc(100% / ${num})`;
    square.style.height = `calc(500px / ${num})`;
  }
};
createGrid(gridSize);

const squares = document.querySelectorAll(".square");
squares.forEach((s) => {
  s.addEventListener("mouseover", () => {
    s.classList.add("black");
  });
});

btnChangeSize.addEventListener("click", () => {
  const size = Prompt("Enter size for Grid: ");
  if (size > 100) {
    Prompt("Enter size for Grid: ");
  }
});
