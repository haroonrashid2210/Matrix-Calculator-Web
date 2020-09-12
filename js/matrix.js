// variable for + - + - in determinant calculation
var sign = 1;

// creates 2d array of input data and return it
function getTableMatrix(table_id) {
  var array = [];
  var table = document.getElementById(table_id);
  var table_length = table.rows.length;
  for (i = 0; i < table_length; i++) {
    var row = table.rows.item(i).cells;
    array[i] = []; // for 2D array
    var row_length = row.length;
    for (var j = 0; j < row_length; j++) {
      var cell = row.item(j).innerHTML;
      array[i][j] = cell;
    }
  }
  return array;
}

// calculates determinent of matrix
function determinant(matrix) {
  // if 2x2 matrix then calculate determinent directly
  if (matrix.length === 2) return determinent2x2(matrix);
  // else for other size of matrix
  var sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let newArray = reduceArray(matrix, 0, i);
    sum = sum + sign * matrix[0][i] * calculateDeterminant(newArray);
    sign = sign * -1;
  }
  return sum;
}

// 2x2 determinent
function determinent2x2(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

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
      new_matrix[r][c] = sign * calculateDeterminant(reduceArray(matrix, r, c));
      sign = sign * -1;
    }
  }
  return new_matrix;
}
