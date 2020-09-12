function calculate(type) {
  // clear previous output before further processing
  deleteAllChilds("output");
  switch (type) {
    case "determinent": {
      let matrix = getTableMatrix("input");
      let valid = isMatrixValid(matrix);
      if (valid) {
        displayOutput(determinant(matrix), "string");
      }
      break;
    }
    case "adjoint": {
      let matrix = getTableMatrix("input");
      let valid = isMatrixValid(matrix);
      if (valid) {
        displayOutput(adjoint(matrix), "matrix");
      }
      break;
    }
    case "inverse": {
      let matrix = getTableMatrix("input");
      let valid = isMatrixValid(matrix);
      if (valid) {
        let det = determinant(matrix);
        if (det === 0) {
          displayOutput("Determinant = 0, Inverse not possible", "string");
          break;
        }
        displayOutput(matrixMulNumber(adjoint(matrix), det), "matrix");
      }
      break;
    }
    default: {
      displayOutput("Under construction", "string");
    }
  }
}

//////////////////////
// Helper functions //
//////////////////////

// delete all the child nodes
function deleteAllChilds(parent_id) {
  var element = (document.getElementById(parent_id).innerHTML = "");
}

// checks if the given matrix is valid i.e contains only numbers
function isMatrixValid(array) {
  let valid = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (isNaN(array[i][j])) {
        displayOutput("ERROR : Invalid value at " + i + " x " + j, "error");
        valid = false;
      }
    }
  }
  return valid;
}

// create custom array
// delete row and col from array and return reduced array
function reduceArray(matrix, row, col) {
  let array = [];
  // a_row & a_col are indexes for new array
  let a_row = 0;
  let a_col = 0;
  for (let r = 0; r < matrix.length; r++) {
    if (r === row) continue;
    array[a_row] = [];
    for (let c = 0; c < matrix.length; c++) {
      if (c === col) continue;
      array[a_row][a_col] = matrix[r][c];
      a_col++;
    }
    a_col = 0;
    a_row++;
  }
  return array;
}

// display output on page
function displayOutput(data, type) {
  var output = document.getElementById("output");
  switch (type) {
    case "error": {
      var p = document.createElement("p");
      p.innerText = data;
      output.appendChild(p);
      break;
    }
    case "string": {
      output.innerText = data;
      break;
    }
    case "matrix": {
      output.appendChild(createTableComponent(data));
      break;
    }
  }
}

// creates a HTML table component with data for output use
function createTableComponent(data) {
  let row_length = data.length;
  let col_length = data[0].length;
  let table = document.createElement("table");
  for (let r = 0; r < row_length; r++) {
    let table_row = document.createElement("tr");
    for (let c = 0; c < col_length; c++) {
      let table_data = document.createElement("td");
      table_data.innerText = data[r][c];
      table_row.appendChild(table_data);
    }
    table.appendChild(table_row);
  }
  return table;
}

// multiply 2 matrices
function matrixMulMatrix(matrix1, matrix2) {}

// multiply matrix with number
function matrixMulNumber(matrix, number) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[r][c] = matrix[r][c] * number;
    }
  }
  return matrix;
}
