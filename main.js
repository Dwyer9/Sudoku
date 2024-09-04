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

window.addEventListener("keydown", (e) => {
  if ((Number(e.key) > 0 && Number(e.key) < 10) || e.key === "Delete") {
    let selected = document.querySelector(".selected");
    if (selected && !selected.classList.contains("given")) {
      if (e.key == "Delete") {
        selected.textContent = "";
      } else {
        selected.textContent = e.key;
      }
    }
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
