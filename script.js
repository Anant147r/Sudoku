var board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

var solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

window.onload = function () {
  startGame();
};

let startGame = () => {
  let mainBoard = document.querySelector(".mainBoard");
  let option = document.querySelector(".options");
  let numSelected = null;
  let errorsDiv = document.querySelector(".errors");
  let errors = 0;
  errorsDiv.innerText = errors;
  function selectNumber() {
    if (numSelected) {
      numSelected.classList.remove("selectedTile");
      numSelected = null;
    }
    numSelected = this;
    numSelected.classList.add("selectedTile");
  }

  function checkNumber() {
    if (!numSelected) return;
    let id = this.getAttribute("id");
    id = id.split("-");
    let selectedRow = parseInt(id[0]);
    let selectedColumn = parseInt(id[1]);
    if (solution[selectedRow][selectedColumn] == numSelected.innerText) {
      this.innerText = numSelected.innerText;
      return;
    }
    errors += 1;
    errorsDiv.innerText = errors;
  }

  for (let i = 0; i < 9; i++) {
    let tileForOptions = document.createElement("div");
    tileForOptions.setAttribute("id", i);
    tileForOptions.classList.add("tile");
    tileForOptions.innerText = i + 1;
    option.appendChild(tileForOptions);
    tileForOptions.addEventListener("click", selectNumber);
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let tileForMainBoard = document.createElement("div");
      tileForMainBoard.setAttribute("id", `${i}-${j}`);
      tileForMainBoard.classList.add("tile");
      if (i == 2 || i == 5 || i == 8)
        tileForMainBoard.style["border-bottom"] = "4px solid black";
      if (j == 2 || j == 5 || j == 8)
        tileForMainBoard.style["border-right"] = "4px solid black";
      if (board[i][j] != "-") tileForMainBoard.innerText = board[i][j];
      tileForMainBoard.addEventListener("click", checkNumber);
      mainBoard.appendChild(tileForMainBoard);
    }
  }
};
