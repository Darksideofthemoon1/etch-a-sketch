const containerDiv = document.querySelector(".container");
const btnChangeSize = document.querySelector(".change-size");
const btnRainbow = document.querySelector(".change-color");
let gridSize = 16;
const btnReset = document.querySelector(".reset");

btnChangeSize.addEventListener("click", () => {
  let size = parseInt(prompt("Enter a size: "));
  if (size > 100) {
    alert("Enter a size Maximum 100: ");
    return;
  }
  containerDiv.textContent = "";
  createGrid(size);
});

const resetGrid = () => {
  containerDiv.textContent = "";
  createGrid(gridSize);
};

const changeColor = () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((s) => {
    if (s.classList.contains("black")) {
      s.classList.remove("black");
    }
    s.addEventListener("mouseover", () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      s.style.backgroundColor = "#" + randomColor;
    });
  });
};

const setBlack = () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((s) => {
    s.addEventListener("mouseover", () => {
      s.classList.add("black");
    });
  });
};

const createGrid = (num) => {
  for (let i = 0; i < num * num; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100% / ${num})`;
    square.style.height = `calc(500px / ${num})`;
    containerDiv.appendChild(square);
    setBlack();
    btnReset.addEventListener("click", resetGrid);
    btnRainbow.addEventListener("click", changeColor);
  }
};
createGrid(gridSize);
