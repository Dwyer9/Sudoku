let data = [
  "5..2...4....6.3....3...9..7..3..7.....7..8...6......2..8......3...4..6.....1..5..",
];

function newSudokuString() {
  return data[Math.floor(Math.random() * data.length)];
}
// let sudokuString = data[Math.floor(Math.random() * data.length)];
export default newSudokuString;

// original data in array format
// let sudoku = [
//   [5, , , 2, , , , 4],
//   [, , , 6, , 3, , ,],
//   [, 3, , , , 9, , , 7],
//   [, , 3, , , 7, , ,],
//   [, , 7, , , 8, , ,],
//   [6, , , , , , , 2],
//   [, 8, , , , , , , 3],
//   [, , , 4, , , 6, ,],
//   [, , , 1, , , 5, ,],
// ];
