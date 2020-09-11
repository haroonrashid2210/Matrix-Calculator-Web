// change row and columns of table on slider move
function changeInputTable() {
  var slider = document.getElementById("slider");
  document.getElementById("table_size").innerText = slider.value;
  createTable(slider.value);
}

// delete all the child nodes
function deleteChild(elementId) {
  var element = (document.getElementById(elementId).innerHTML = "");
}

// create square table of size
function createTable(size) {
  deleteChild("input");
  var table = document.getElementById("input");
  for (let i = 0; i < size; i++) {
    var row = document.createElement("tr");
    for (let index = 0; index < size; index++) {
      var data = document.createElement("td");
      data.setAttribute("contenteditable", "true");
      row.appendChild(data);
    }
    table.appendChild(row);
  }
}
