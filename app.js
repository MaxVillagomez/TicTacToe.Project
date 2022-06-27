let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)
const playerOne = "X"
const playerTwo = "O"

let currentPlayer = "X"

function gameStart() {
    let emptyBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]

}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


