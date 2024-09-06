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

createSudoku();

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    cells.forEach((cell) => cell.classList.remove("selected"));
    e.target.classList.add("selected");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("reset")) {
      createSudoku();
    } else if (e.target.classList.contains("new")) {
      sudokuString = newSudokuString();
      createSudoku();
    }
  });
});

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
