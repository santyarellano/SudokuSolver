let sudokuTable = document.getElementById("sudoku_table");

// generate empty table
for (let row = 0; row < 9; row++) {
  let tr = document.createElement("tr");
  for (let col = 0; col < 9; col++) {
    let td = document.createElement("td");
    td.className = "sudoku_cell";
    td.id = "cell_" + row + "_" + col;
    td.innerHTML = "0";
    tr.appendChild(td);
  }
  sudokuTable.appendChild(tr);
}
