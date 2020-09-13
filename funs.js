// document elements
let sudokuTable = document.getElementById("sudoku_table");
let generateBtn = document.getElementById("generate_button");
let solveBtn = document.getElementById("solve_button");

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
      let cell = sudokuTable.rows[i].cells[j];
      cell.className = "active";
    }
  }
};

solveBtn.onclick = function () {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cell = sudokuTable.rows[i].cells[j];
      cell.className = "";
    }
  }
};

//============= FUNCTIONS ==================
