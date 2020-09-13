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
  //-------- GENERATE SUDOKU ---------
  // create first row by random
  let availableNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let row = [];
  for (let i = 0; i < 9; i++) {
    // pick random from array
    let index = GetRandIndex(availableNums);
    row.push(availableNums[index]);
    availableNums.splice(index, 1);
  }

  // animation
  let timeDelay = 0;
  availableNums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let shift = [];
  for (let i = 0; i < 9; i++) {
    let index = GetRandIndex(availableNums);
    shift.push(availableNums[index]);
    availableNums.splice(index, 1);
    console.log(availableNums);
    for (let j = 0; j < 9; j++) {
      setTimeout(() => {
        let cell = sudokuTable.rows[i].cells[j];
        cell.className = "active";
        setTimeout(() => {
          cell.innerHTML = row[(j + shift[i]) % 9];
          cell.className = "";
        }, 400);
      }, timeDelay);
      timeDelay += 50;
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
function GetRandIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
