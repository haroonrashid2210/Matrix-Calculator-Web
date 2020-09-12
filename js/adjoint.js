// calculates adjoint of 2x2 matrix
function adjoint2x2(matrix) {
  new_matrix = [[], []];
  new_matrix[0][0] = matrix[1][1];
  new_matrix[0][1] = -matrix[0][1];
  new_matrix[1][0] = -matrix[1][0];
  new_matrix[1][1] = matrix[0][0];
  return new_matrix;
}

// calculates adjoint
function adjoint(matrix) {
  if (matrix.length === 2) return adjoint2x2(matrix);
  sign = 1;
  let new_matrix = [];
  for (let r = 0; r < matrix.length; r++) {
    new_matrix[r] = [];
    for (let c = 0; c < matrix.length; c++) {
      new_matrix[r][c] = sign * determinant(reduceArray(matrix, r, c));
      sign = sign * -1;
    }
  }
  return new_matrix;
}
