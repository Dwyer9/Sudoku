// let sudokuString =
//   "5..2...4....6.3....3...9..7..3..7.....7..8...6......2..8......3...4..6.....1..5..";
import newSudokuString from "./sudokuData.js";
import { buildSudokuArr, displaySudoku } from "./functions.js";
let cells = document.querySelectorAll(".cell");
let sudokuString = newSudokuString();

function createSudoku() {
  let sudoku = buildSudokuArr(sudokuString);
  displaySudoku(sudoku, cells);
}

createSudoku();

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    cells.forEach((cell) => cell.classList.remove("selected"));
    e.target.classList.add("selected");
  });
});

function moveSelected(selected, key) {
  let row = Array.from(selected.classList)
    .filter((el) => el.includes("row"))[0]
    .slice(3);
  let col = Array.from(selected.classList)
    .filter((el) => el.includes("col"))[0]
    .slice(3);
  // console.log(row, col);
  if (key.includes("Up")) {
    row--;
  } else if (key.includes("Down")) {
    row++;
  } else if (key.includes("Right")) {
    col++;
  } else if (key.includes("Left")) {
    col--;
  }

  if (col === 0) col = 9;
  if (col === 10) col = 1;
  if (row === 0) row = 9;
  if (row === 10) row = 1;
  // console.log(row, col);

  let rowNum = "row" + row;
  let colNum = "col" + col;
  // console.log(rowNum, colNum);

  selected.classList.remove("selected");

  cells.forEach((cell) => {
    if (cell.classList.contains(rowNum) && cell.classList.contains(colNum)) {
      cell.classList.add("selected");
    }
  });
}

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
    moveSelected(selected, e.key);
  }
});

// Basics of resetting/creating new - need to clear grid before rendering new sudoku
// window.addEventListener("keyup", (e) => {
//   if (e.key === "n") {
//     sudokuString = newSudokuString();
//     createSudoku();
//   } else if (e.key === "r") {
//     cells.forEach((cell) => (cell.textContent = ""));
//     createSudoku();
//   }
// });
