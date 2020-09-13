// document elements
let sudokuTable = document.getElementById("sudoku_table");
let generateBtn = document.getElementById("generate_button");

// generate empty table
for (let row = 0; row < 9; row++) {
  let tr = document.createElement("tr");
  for (let col = 0; col < 9; col++) {
    let td = document.createElement("td");
    td.id = "cell_" + row + "_" + col;
    td.innerHTML = " ";
    tr.appendChild(td);
  }
  sudokuTable.appendChild(tr);
}

// generate random sudoku
generateBtn.onclick = function () {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      animateCell(i, j);
    }
  }
};

//animateCell(1, 1);

//============= FUNCTIONS ==================
function animateCell(row, col) {
  let cell = sudokuTable.rows[row].cells[col];
  cell.className = "active";
}
