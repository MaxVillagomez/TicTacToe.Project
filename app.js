document.getElementById("first-section").onclick = function () {
    let name = prompt("Enter your name");
    document.getElementById("firsttext").innerText = name;
}

// document.getElementById("city").onclick = function () {
//     var city = prompt("Enter your city");
//     document.getElementById("outputCity").innerText = city;
// }

// const gameState = {
//     players: ['x', 'o'],
//     board: [
//         [null, null, null],
//         [null, null, null],
//         [null, null, null]
//     ]
// }

// // state
// let initialState;

// function buildInitialState() {

// }

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