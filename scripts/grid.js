function createGrid (sideValue) {
    /* int -> null
    Takes an integer m and creates a mxm grid
    in the canvas area on the webpage.
    */
    // Gets the div tag for the entire grid canvas
    const mainGridDiv = document.querySelector(".grid-main");
    // Create variable to hold new row elements
    let rowDiv;
    // Create variable to hold new block elements (blocks are the grid cells)
    let divBlock;
    // Runs a for loop to make m rows
    for (let row = 0; row < sideValue; row++) {
        rowDiv = document.createElement("div");
        // Add the grid-row class in ../stylesheets/styles.css
        rowDiv.classList.add("grid-row");
        // Insert new row into main canvas div
        mainGridDiv.appendChild(rowDiv);
        // Runs a for loop to make m blocks in each row
        for (let columnBlock = 0; columnBlock < sideValue; columnBlock++) {
            divBlock = document.createElement("div");
            // Add the grid-block class in ../stylesheets/styles.css
            divBlock.classList.add("grid-block");
            // Insert new block into row div
            rowDiv.appendChild(divBlock);
        }
    }

    // Get all the blocks in the m x m grid by class
    const gridBlockDivs = document.querySelectorAll(".grid-block");
    gridBlockDivs.forEach(gridBlockDiv => {
        gridBlockDiv.style.opacity = 0;
        gridBlockDiv.addEventListener("mouseover", () => {
            console.log(gridBlockDiv.style.opacity);
            if (parseInt(gridBlockDiv.style.opacity) <= 1) {
                gridBlockDiv.style.opacity = Number(gridBlockDiv.style.opacity) + 0.1;
            }
        })
    })
}

// Selector for the button to create a new grid
const gridButton = document.querySelector(".new-grid-button");
gridButton.addEventListener("click",
function recreateGrid () {
    /* null -> null
    Takes user input m as an integer under 100
    uses the input to create a m x m  grid.
    */
   // Creates variable for new size of grid
    let newSize = 0;
    // Gets new size
    newSize = prompt("Please enter a new grid size (max 100)");
    // Retry until valid size entered
    while (newSize > 100 ) {
        newSize = prompt("The size entered is not valid(max 100)");
    }
    // Remove old grid
    let mainGridDiv = document.querySelector(".grid-main");
    let firstChild = mainGridDiv.firstElementChild;
    while(firstChild) {
        firstChild.remove();
        firstChild = mainGridDiv.firstElementChild;
    }
    // Create new grid
    createGrid(newSize);
})

createGrid(16);
