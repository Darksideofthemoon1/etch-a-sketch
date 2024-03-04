const containerDiv = document.querySelector(".container");

const createGrid = (num) => {
  for (let i = 0; i < num * num; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    containerDiv.appendChild(square);
    square.style.flex = `0 0 calc(100% / ${num})`;
    square.style.height = `calc(500px / ${num})`;
  }
};
createGrid(16);
