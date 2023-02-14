let check = 0;
const firstChar = "X";
const secondChar = "O";
let listOfCols = [];
const cols = document.getElementsByClassName("col");
const wins = document.querySelector(".winner");
let winner = document.createElement("h1");

const fillIn = e => {
    let target = e.target;
    addToGame(target);
    check++;
    if (check > 8) {
        console.log("Game Ended");
    }
}
for (let i = 0; i < cols.length; i++) {
    (function() {
        cols[i].addEventListener("click", (e) => {
            fillIn(e);
        })
    }());
}
function addToGame(event) {
    listOfCols.push(event);
    if (check % 2 === 0) {
        event.innerHTML = firstChar;
    } else {
        event.innerHTML = secondChar;
    }
}


function reset() {
    check = 0;
    for(let col of listOfCols) {
        col.innerHTML = "";
    }
    winner.innerHTML = "X won!";
    wins.appendChild(winner);
}