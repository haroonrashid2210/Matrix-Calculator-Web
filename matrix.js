// variable for + - + - in determinant calculation
var sign = 1;

function calculate() {
  // Empty previous output
  deleteChild("output");
  matrix = createInputArray();
  let valid = isValid(matrix);
  if (valid) {
    displayOutput(calculateDeterminant(matrix), "");
  }
}

// creates 2d array of input data and return it
function createInputArray() {
  var array = [];

  //gets table
  var oTable = document.getElementById("input");

  //gets rows of table
  var rowLength = oTable.rows.length;

  //loops through rows
  for (i = 0; i < rowLength; i++) {
    //gets cells of current row
    var oCells = oTable.rows.item(i).cells;

    // for creating 2d array
    array[i] = [];

    //gets amount of cells of current row
    var cellLength = oCells.length;

    //loops through each cell in current row
    for (var j = 0; j < cellLength; j++) {
      /* get your cell info here */
      var cellVal = oCells.item(j).innerHTML;
      array[i][j] = cellVal;
    }
  }
  return array;
}

// check if the input is valid or not
function isValid(array) {
  let valid = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (isNaN(array[i][j])) {
        displayOutput("ERROR : Invalid value at " + i + " x " + j, "error");
        valid = false;
      }
    }
  }
  if (valid) {
    displayOutput("", "");
  }
  return valid;
}

// display output on page
function displayOutput(result, type) {
  var output = document.getElementById("output");
  if (type === "error") {
    var data = document.createElement("p");
    data.innerText = result;
    output.appendChild(data);
  } else output.innerText = result;
}

// delete all the child nodes
function deleteChild(elementId) {
  var element = (document.getElementById(elementId).innerHTML = "");
}

// determinant
function calculateDeterminant(matrix) {
  // if matrix = 2x2 then calculate determinent of 2x2
  if (matrix.length === 2) return calculateDet2x2(matrix);
  // else for other size of matrix
  var sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let newArray = createDetArray(matrix, 0, i);
    sum = sum + sign * matrix[0][i] * calculateDeterminant(newArray);
    sign = sign * -1;
  }
  return sum;
}

// create custom array for determinant use
// row and column are the row and column to exclude
function createDetArray(matrix, row, col) {
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

// 2x2 determinent
function calculateDet2x2(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}
