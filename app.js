let playerText = document.getElementById('playerText')
let restartButton = document.getElementById('resetButton')
let boxes = Array.from(document.getElementsByClassName('grid-container'))

const letterX = "X"
const letterO = "O"
let currentPlayer = letterX

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

let isGameActive = true;


resetButton.addEventListener('click', resetBoard)


// const playerOneName = document.getElementById('firsttext');
// const playerTwoName = document.getElementById('secondtext');
// const button1 = document.getElementById('button1');
// const playerNameOutput = document.getElementById('players-name-input')

// function displayCurrentPlayer() {
//     playerNameOutput.innerHTML = playerOneName.value + "'s turn";
// }

// button1.addEventListener('click', displayCurrentPlayer)



//ADDING X'S OR O'S


// WIN CONDITION

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



// // render
// function renderState() {

// }

// // maybe a dozen or so helper functions for tiny pieces of the interface

// // listeners
// function onBoardClick() {
//     // update state, maybe with another dozen or so helper functions...

//     renderState() // show the user the new state
// }
// const board = document.getElementById('board');
// board.addEventListener('click', onBoardClick); // etc