function validSolution(board) {
  let colSum = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let submatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < board.length; i++) {
    if (board[i].reduce((acc, curr) => acc + curr) !== 45) return false;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) return false;
      colSum[j] += board[i][j];

      if (j <= 2 && i <= 2) submatrix[0] += board[i][j];
      else if (j <= 5 && i <= 2) submatrix[1] += board[i][j];
      else if (j <= 8 && i <= 2) submatrix[2] += board[i][j];
      else if (j <= 2 && i <= 5) submatrix[3] += board[i][j];
      else if (j <= 5 && i <= 5) submatrix[4] += board[i][j];
      else if (j <= 8 && i <= 5) submatrix[5] += board[i][j];
      else if (j <= 2 && i <= 8) submatrix[6] += board[i][j];
      else if (j <= 5 && i <= 8) submatrix[7] += board[i][j];
      else if (j <= 8 && i <= 8) submatrix[8] += board[i][j];
    }
  }

  for (let i = 0; i < colSum.length; i++) {
    if (colSum[i] !== 45) return false;
    if (submatrix[i] !== 45) return false;
  }

  return true;
}

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ])
);

/* 
  00 01 02 03 04 05
  10 11 12 13 14 15
  20 21 22 23 24 25
*/
