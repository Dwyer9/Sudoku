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
