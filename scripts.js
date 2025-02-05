"strict";
const container = document.querySelector(".container");
console.log(container);
const btn = document.querySelector("button");
console.log(btn);
// const btnClear = document.getElementsByClassName("clear");

// const hover = document.querySelectorAll("--columns");
// console.log(hover);

// const hover = document.querySelector("div").querySelectorAll(".--columns");
// let changeDivColour = document.querySelector("columns");
let divColumn = document.createElement("div");

// const items = document.getElementsByClassName("--columns");

// console.log(items);

// console.log(container);

const rows = function (num) {
  //   const columns = document.createElement("div");

  for (let i = 0; i < num; i++) {
    const divRows = document.createElement("div");
    divRows.classList.add("--rows");
    container.appendChild(divRows);

    for (let j = 0; j < num; j++) {
      let divColumn = document.createElement("div");
      divColumn.classList.add("--columns");

      //   console.log(columns);
      divRows.appendChild(divColumn);
    }

    // we use the .forEach method to iterate through each button
  }
  const hover = document.querySelectorAll(".--columns");
  console.log(hover);

  hover.forEach((column) => {
    // and for each one we add a 'click' listener
    column.addEventListener("mouseover", () => {
      console.log("howya");

      //   column.style.backgroundColor = getRandomColor();
      column.style.backgroundColor = "lightblue";
      //   divColumn.classList.add("hello");

      //   document.querySelectorAll(".--columns").style.backgroundColor =
      //     getRandomColor();

      //   columnDiv.classList.add("columns:hover");
      const btnClear = document.querySelector(".clear");

      btnClear.addEventListener("click", () => {
        column.style.backgroundColor = "";
      });
    });
  });
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function clearGrid() {
  //   const container = document.querySelector("#container");
  container.innerHTML = "";
}

const gridSize = function () {
  const btnGenerate = document.querySelector(".generate");
  console.log(btnGenerate);

  btnGenerate.addEventListener("click", () => {
    const gridNum = prompt("What Grid Size would you like?");
    clearGrid();

    rows(gridNum);
  });
};

const main = function () {
  default_size = 4;
  rows(default_size);
  gridSize();
};

main();
