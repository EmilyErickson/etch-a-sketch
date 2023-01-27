let grid = document.querySelector("#grid")
gridWidth = 600
grid.style.cssText = `width: ${gridWidth}; height: ${gridWidth};`

let clear = document.querySelector(".clear");
let resize = document.querySelector(".resize");
let rainbow = document.querySelector(".rainbow");
let black = document.querySelector(".black");
clear.addEventListener("click", resetGrid);
resize.addEventListener("click", resizeGrid);
rainbow.addEventListener("click", rainbowGrid);
black.addEventListener("click", blackGrid);


function createGrid(num) {

    if(num === undefined) {
        num = 16;
    } else {
        num = num
    }

    let gridSize = (num * num)
    grid.replaceChildren();
    for (i = 0; i < gridSize; i++) {
        let squares = document.createElement("div");
        squares.classList.add("squares");
        squares.style.cssText = `height: ${gridWidth/num}px;
        width: ${gridWidth/num}px`;
        grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        grid.appendChild(squares);
    }

    let boxes = document.querySelectorAll(".squares");
        boxes.forEach(box => box.addEventListener("mouseover", function () {
        box.style.backgroundColor = "black";
    }));
}
createGrid (16)

function resetGrid () {
    let boxes = document.querySelectorAll('.squares');
    boxes.forEach(box => box.style.backgroundColor = "white")
}

function resizeGrid() {
    let value = prompt("Enter a number up to 50 ", 16);
    if (typeof value === 'undefined' || value === null) {
      value = 16
    } else if (value > 50) {
        alert("That number is too large")
        value = 16
    } else {
    createGrid(value)}
}

function blackGrid () {
    console.log("black")
    let boxes = document.querySelectorAll(".squares");
    boxes.forEach(box => box.addEventListener("mouseover", function () {
        box.style.cssText = `background-color: rgb(0, 0, 0);`;
    }));
}

function rainbowGrid () {
    let boxes = document.querySelectorAll(".squares");
    boxes.forEach(box => box.addEventListener("mouseover", function () {
        let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        let r = randomBetween(0, 255);
        let g = randomBetween(0, 255);
        let b = randomBetween(0, 255);
        let rgb = `rgb(${r},${g},${b})`;
        box.style.cssText = `background-color: ${rgb};`}))
}

