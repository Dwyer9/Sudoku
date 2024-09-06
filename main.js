// let sudokuString =
//   "5..2...4....6.3....3...9..7..3..7.....7..8...6......2..8......3...4..6.....1..5..";
import newSudokuString from "./sudokuData.js";
import { buildSudokuArr, displaySudoku, moveSelected } from "./functions.js";
let cells = document.querySelectorAll(".cell");
let buttons = document.querySelectorAll("button");
let sudokuString = newSudokuString();

function createSudoku() {
  cells.forEach((cell) => {
    cell.textContent = " ";
    cell.classList.remove("given");
  });
  let sudoku = buildSudokuArr(sudokuString);
  displaySudoku(sudoku, cells);
}

function checkCorrectDigits(arr) {
  let sorted = arr.sort().map((el) => Number(el));
  let total = sorted.reduce((acc, el) => acc + el, 0);
  return (
    sorted.every((el) => arr.indexOf(el) === arr.lastIndexOf(el)) &&
    total === 45
  );
}

function getCells(cellsArr, num) {
  return cellsArr
    .filter((el) => el.classList.contains(num))
    .map((el) => el.textContent);
}

function checkSudoku() {
  let correct = true;
  let cellsArr = Array.from(cells);
  console.clear();
  for (let i = 1; i <= 9; i++) {
    let boxDigits = getCells(cellsArr, "box" + i);
    let rowDigits = getCells(cellsArr, "row" + i);
    let colDigits = getCells(cellsArr, "col" + i);
    if (!checkCorrectDigits(boxDigits)) {
      console.log("box " + i + " is incorrect");
      correct = false;
    }
    if (!checkCorrectDigits(rowDigits)) {
      console.log("row " + i + " is incorrect");
      correct = false;
    }
    if (!checkCorrectDigits(colDigits)) {
      console.log("col " + i + " is incorrect");
      correct = false;
    }
  }
  return correct;
}

createSudoku();

// Select cell
cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    cells.forEach((cell) => cell.classList.remove("selected"));
    e.target.classList.add("selected");
  });
});

// Button Logic
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("reset")) {
      createSudoku();
    } else if (e.target.classList.contains("new")) {
      sudokuString = newSudokuString();
      createSudoku();
    } else if (e.target.classList.contains("check")) {
      checkSudoku();
    }
  });
});

//Keypress logic
window.addEventListener("keydown", (e) => {
  let selected = document.querySelector(".selected");
  if (!selected) return;

  if (!selected.classList.contains("given")) {
    if (e.key == "Delete") {
      selected.textContent = "";
    } else if (Number(e.key) > 0 && Number(e.key) < 10) {
      selected.textContent = e.key;
    }
  }

  if (e.keyCode >= 37 && e.keyCode <= 40) {
    moveSelected(selected, e.key, cells);
  }
});
