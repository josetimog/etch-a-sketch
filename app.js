

// ---------------------------- SELECTORS -----------------------------------------
const gridContainer = document.querySelector('.grid-container');
const btnClearGrid = document.getElementById('clear-grid');
const btnGridSize = document.getElementById('grid-size');
const btnColorBlack = document.getElementById('color-black');
const btnColorGray = document.getElementById('color-gray');
const btnColorRGB = document.getElementById('color-RGB');
const gridItems = document.querySelectorAll('.grid-item');

//------------------------------- INITIALIZATIONS ----------------------------------
let gridSize = 16;
let color = 'black';

createGrid(gridSize); // make the initial grid

//------------------------ EVENT LISTENERS -----------------------------------------
btnClearGrid.addEventListener('click', () => {
    createGrid(gridSize);
});

btnGridSize.addEventListener('click', () => {
    let initialSize = gridSize;

    gridSize = prompt("Enter grid size", '2 to 100');

    if(gridSize === null) {
        gridSize = initialSize;
    }
    createGrid(gridSize);
});

btnColorBlack.addEventListener('click', () => {
    color = "black";
    createGrid(gridSize);
});


btnColorGray.addEventListener('click', () => {

    color = 'gray';
    createGrid(gridSize);
});

btnColorRGB.addEventListener('click', () => {
    color = "RGB";
    createGrid(gridSize);
});



// ------------------- create divs inside the grid container------------------------
function createGrid(grid){

    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${grid},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${grid},1fr)`;

    for (let i=0; i<grid*grid; i++){
        //create a div
        let div= document.createElement('div');
        div.classList.add('grid-item');
        div.style.border = '1px solid rgba(0,0,0,.1)';
       
        div.addEventListener('mouseover', () => {
            switch (color) {
                case 'black':
                    div.style.backgroundColor = 'black';
                    break;
                case 'gray':
                    let randomColor = Math.random() * 255;
                    div.style.backgroundColor = `rgb(${randomColor},${randomColor},${randomColor})`;
                    break;
                case 'RGB':
                    let randomColor1 = Math.random() * 255;
                    let randomColor2 = Math.random() * 255;
                    let randomColor3 = Math.random() * 255;
                    div.style.backgroundColor = `rgb(${randomColor1},${randomColor2},${randomColor3})`;
                    break;
            }            
        });
        gridContainer.appendChild(div);
    }

} //close createGrid



