let rows = 16; // Number of rows in the grid
//let cols = 10; // Number of columns in the grid
let gridSize=document.getElementById('gridSize');
let s=document.getElementById('s');
let promptText = document.getElementById('prompt');

const gridContainer = document.getElementById("gridContainer");

let a;
function drawGrid(a){
    console.log('hello');
    // Loop to create rows
    for (let i = 0; i < a; i++) {
        // Create a div element for each row
         const rowElement = document.createElement("div");
        rowElement.classList.add("row");
    
        // Loop to create columns within each row
        for (let j = 0; j < a; j++) {
            // Create a div element for each column (cell)
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            
            // Add event listener to each cell
            cellElement.addEventListener("mouseover", function() {
                console.log("Cell hover:", i, j); 
                changeColor(cellElement);
            });
            
            // Add the cell to the row
            rowElement.appendChild(cellElement);
            }
    
        // Add the row to the grid container
        gridContainer.appendChild(rowElement);
    }
}

function resset(a){
    rows=a;
    gridContainer.innerHTML='';
    drawGrid(a);
    s.innerHTML=" Grid Was resset to innitial size 16 * 16";
}

function changeGridS(){
    let g=gridSize.value;
    if(g < 0 || g > 99 || isNaN(g)) {
        alert("Make sure it's a number from 2 to 99!");
    } else {
        rows=g;
        gridContainer.innerHTML='';
        drawGrid(g);
        s.innerHTML=g+" * "+ g+" Grid Was created";
    }
}



function changeColor(cel){
    let blackRadio = document.getElementById('black');
    let redRadio = document.getElementById('red');
    let blueRadio = document.getElementById('blue');
    let rainbow = document.getElementById('rainbow');
    let eraserRadio = document.getElementById('erase'); 

    if (blackRadio.checked) {
        console.log('black');
        cel.style.backgroundColor = '#2e2b2b';
    } else if (redRadio.checked) {
        cel.style.backgroundColor = '#da2d2d';
        console.log('red');
    } else if (blueRadio.checked) {
        cel.style.backgroundColor = "#3f33dd";
        console.log('blue');
    } else if (eraserRadio.checked) {
        cel.style.backgroundColor = '';
        console.log('eraserRadio');
    } else if (rainbow.checked) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        cel.style.backgroundColor = "#" + randomColor;
        console.log('rainbow');
    }
}

function clearGrid() {
    // Select all grid cells
    const cells = document.querySelectorAll('.cell');

    // Loop through each cell and remove background color
    cells.forEach(cell => {
        cell.style.backgroundColor = '';
    });
}