let gameState = {
    gameBoard: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    currentPlayer: 'X',
    players: ['X', 'O']
}

// 1) What part of my website do I want to build on? 
    // Usually deals with document.get_____
// 2) What do I want to teach that part of my website to do? 
    // Equivalent of writing a callback function (which we will pass into our event listeners)
// 3) How do we connect parts 1 and 2 together? 
    // Equivalent of creating an event listener 

// Problem #1: Creating the gameboard 
document.addEventListener("DOMContentLoaded", () => { 
    // 1) I need to grab the part of my HTML where I want to create my game board
    let boardElement = document.getElementById('board'); 
    createGameBoard();

    // 2) I want to create a function that creates a game board element with 3x3 number of cells 
    function createGameBoard () {
        // What do I want to create?
        // A: I need to first create a HTML row. 
        // let rowElement = document.createElement('tr');

        // for (let i = 1; i <= 3; i++) {
        //     let cellElement = document.createElement('td'); 
        //     rowElement.appendChild(cellElement);
        // }

        // appElement.appendChild(rowElement); 

        // CODE VERSION OF CONNECTING THIS TO YOUR JS STATE
        for (let i = 0; i < gameState.gameBoard.length; i++) {
            let rowElement = document.createElement('tr'); 
            console.log("this is row element: ", rowElement);
            let jsRow = gameState.gameBoard[i]
            for (let j = 0; j < jsRow.length; j++) {
                let cellElement = document.createElement('td'); 
                let currentJSCell = jsRow[j]
                // let currentJSCell = gameState.gameBoard[i][j]
                // button.setAttribute("name", "helloButton");
                cellElement.setAttribute('class', 'cell');
                cellElement.addEventListener('click', colorInCell); 
                cellElement.addEventListener('click', addLetter);

                if (currentJSCell === 'X') {
                    cellElement.innerText = 'X'
                } else if (currentJSCell === 'O') {
                    cellElement.innerText = 'O'
                }
                rowElement.appendChild(cellElement);
            }
            console.log("This is appelement: ", boardElement);
            boardElement.appendChild(rowElement);
        }
    }; 

    function colorInCell (evt) {
        console.log('This is the evt object', evt); 
        let targetedElement = evt.target;
        console.log('I am the targeted element: ', targetedElement); 
        targetedElement.style.backgroundColor = ' #EAF2E3'; 
    };

    function addLetter (evt) {
        let targetedElement = evt.target;
        let currentPlayer = gameState.currentPlayer
        if (currentPlayer === 'X') {
            targetedElement.innerText = 'X';        
        } else {
            targetedElement.innerText = 'O';
        }
    }


})

// Problem #2: Getting your cells to do SOMETHING
// Step 1) Grab the part of your website you awnt to do something
    // I did that in my nested for loop above where I create a td element. 
// Step 2) What do I wnat to teach the cells to do?
    // I need to write a callback function 
// Step 3) How do we connect these two steps together?