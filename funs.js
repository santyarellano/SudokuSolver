// document elements
let sudokuTable = document.getElementById("sudoku_table");
let generateBtn = document.getElementById("generate_button");
let solveBtn = document.getElementById("solve_button");
var slider = document.getElementById("difficulty_range");
var output = document.getElementById("difficulty_txt");

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

// Difficulty slider
output.innerHTML = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

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

  // Fill HTML (with animation)
  let difficulty = slider.value;
  let timeDelay = 0;
  availableNums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let shift = [];
  for (let i = 0; i < 9; i++) {
    let index = GetRandIndex(availableNums);
    shift.push(availableNums[index]);
    availableNums.splice(index, 1);
    for (let j = 0; j < 9; j++) {
      setTimeout(() => {
        let cell = sudokuTable.rows[i].cells[j];
        cell.className = "active";
        setTimeout(() => {
          if (RandByDiff(difficulty)) cell.innerHTML = row[(j + shift[i]) % 9];
          else cell.innerHTML = " ";
          cell.className = "";
        }, 500);
      }, timeDelay);
      timeDelay += 50;
    }
  }
};

// solve sudoku
solveBtn.onclick = function () {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cell = sudokuTable.rows[i].cells[j];
      cell.className = "";
    }
  }
};

//============= FUNCTIONS ==================
function GetRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function GetRandIndex(arr) {
  return GetRandomInt(arr.length);
}

function RandByDiff(difficulty) {
  let r = GetRandomInt(10) + 1;
  return r > difficulty ? true : false;
}
