module.exports = function solveSudoku(matrix) {
  function solve(matrix) {
    let row;
    let cell;
    let solved;
    let num;

    for (row = 0; row < 9; row++) {
      for (cell = 0; cell < 9; cell++) {
        if (!matrix[row][cell]) {
          for (num = 1; num <= 9; num++) {
            if (suit(matrix, row, cell, num)) {
              matrix[row][cell] = num;
              solved = solve(matrix);
              if (solved) {
                return true;
              }
              matrix[row][cell] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function suit(matrix, row, cell, num) {
    let y = Math.floor((row / 3)) * 3;
    let x = Math.floor((cell / 3)) * 3;

    for (let i = 0; i < 9; i++) {
      if ((i != row && matrix[i][cell] == num) || (i != cell && matrix[row][i] == num)) {
        return false;
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i != row && j != cell && matrix[y + i][x + j] == num) {
          return false;
        }
      }
    }
    return true;
  }

  solve(matrix);
  return matrix;
}