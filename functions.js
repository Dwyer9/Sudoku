export function buildSudokuArr(string) {
  let sudoku = [];
  let str = string.replaceAll(".", " ");
  let arr = str.split("");
  for (let i = 0; i < arr.length; i += 9) {
    let slice = arr.slice(i, i + 9);
    sudoku.push(slice);
  }
  return sudoku;
}

export function displaySudoku(sudoku, cells) {
  for (let i = 0; i < sudoku.length; i++) {
    let row = sudoku[i];
    let rowNum = "row" + (+i + 1);
    for (let j = 0; j < row.length; j++) {
      let colNum = "col" + (+j + 1);
      let value = row[j];
      // if (row[j]) console.log(rowNum, colNum, row[j]);
      cells.forEach((cell) => {
        if (
          cell.classList.contains(rowNum) &&
          cell.classList.contains(colNum) &&
          value !== " "
        ) {
          cell.textContent = value;
          cell.classList.add("given");
        }
      });
    }
  }
}

// Functions for loading new sudoku or resetting current sudoku, not needed
// export function newSudoko() {
//   sudokuString = newSudokuString();
//   createSudoku();
// }

// export function resetSudoku() {
//   createSudoku();
// }

export function moveSelected(selected, key, cells) {
  let row = Array.from(selected.classList)
    .filter((el) => el.includes("row"))[0]
    .slice(3);
  let col = Array.from(selected.classList)
    .filter((el) => el.includes("col"))[0]
    .slice(3);

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

  let rowNum = "row" + row;
  let colNum = "col" + col;

  selected.classList.remove("selected");

  cells.forEach((cell) => {
    if (cell.classList.contains(rowNum) && cell.classList.contains(colNum)) {
      cell.classList.add("selected");
    }
  });
}
