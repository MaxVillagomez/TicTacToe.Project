const tiles = Array.from(document.querySelectorAll(".tile"));
const playerDisplay = document.querySelector("#display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");
const playerInput = document.querySelectorAll(".name-input");
const getNames = document.getElementById("getnames");

console.dir(playerInput);
let board = ["", "", "", "", "", "", "", "", ""];
let isX = "X";
let isGameActive = true;
let indexOfPlayer = getRandomInt(2);
const playerXWon = "Player X Won";
const playerOWon = "Player O Won";
const draw = "Draw";
let currentPlayer;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

getNames.addEventListener("click", handleNames);

function handleNames() {
  currentPlayer = indexOfPlayer ? playerInput[1].value : playerInput[0].value;
  console.log(currentPlayer);
  playerDisplay.textContent = `${currentPlayer}'s turn`;
  document.getElementsByClassName('game-header') = '';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

playerDisplay.textContent = "Please enter Player 1 and Player 2 names.";

const isValidAction = (tile) => {
  if (tile.innerText === "X" || tile.innerText === "O") {
    return false;
  }

  return true;
};

const updateBoard = (index) => {
  board[index] = isX;
};

const changePlayer = () => {
  playerDisplay.classList.remove(`player${isX}`);
  if (isX === "X") {
    isX = "O";
    indexOfPlayer = Math.abs(indexOfPlayer - 1);
    console.log(indexOfPlayer);
    currentPlayer = playerInput[indexOfPlayer].value;
  } else {
    isX = "X";
    indexOfPlayer = Math.abs(indexOfPlayer - 1);
    console.log(indexOfPlayer);
    currentPlayer = playerInput[indexOfPlayer].value;
  }

  playerDisplay.textContent = `${currentPlayer}'s turn`;
};

const announce = (type) => {
  switch (type) {
    case playerOWon:
      announcer.innerHTML = `${currentPlayer} has won`;
      break;
    case playerXWon:
      announcer.innerHTML = `${currentPlayer} has won`;
      break;
    case draw:
      announcer.innerText = "Draw";
  }
  announcer.classList.toggle("hide");
};

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    announce(isX === "X" ? playerXWon : playerOWon);
    isGameActive = false;
    return;
  }
  if (!board.includes("")) announce(draw);
}

const userAction = (tile, index) => {
  if (isValidAction(tile) && isGameActive) {
    tile.innerText = isX;
    tile.classList.add(`player${isX}`);
    updateBoard(index);
    handleResultValidation();
    changePlayer();
  }
};

tiles.forEach((tile, index) => {
  tile.addEventListener(`click`, () => userAction(tile, index));
});

const resetBoard = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  announcer.innerHTML = "";
  
  if (isX === "O") {
    changePlayer();
  }
  
  tiles.forEach((tile) => {
    tile.innerText = "";
    tile.classList.remove("playerX");
    tile.classList.remove("playerO");
  });
  
};

resetButton.addEventListener("click", resetBoard);