const containerDiv = document.querySelector(".container");
const btnChangeSize = document.querySelector(".change-size");
const btnRainbow = document.querySelector(".change-color");
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
    s.classList.add("color");
  });
});

btnChangeSize.addEventListener("click", () => {
  let size = prompt("Enter a size: ");
  if (size > 1 && size <= 100) {
    createGrid(size);
  } else {
    size = "";
    alert("Enter a size Maximum 100: ");
  }
});

const rainbowMode = () => {
  squares.forEach((s) => {
    if (s.classList.contains("color")) {
      s.classList.remove("color");
    }
    s.addEventListener("mouseover", () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      s.style.backgroundColor = "#" + randomColor;
    });
  });
};

btnRainbow.addEventListener("click", rainbowMode);
