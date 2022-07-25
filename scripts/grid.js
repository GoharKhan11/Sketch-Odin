function createGrid (sideValue) {
    const mainGridDiv = document.querySelector(".grid-main");
    let rowDiv;
    let divBlock;
    for (let row = 0; row < sideValue; row++) {
        rowDiv = document.createElement("div");
        rowDiv.classList.add("grid-row");
        mainGridDiv.appendChild(rowDiv);
        for (let columnBlock = 0; columnBlock < sideValue; columnBlock++) {
            divBlock = document.createElement("div");
            divBlock.classList.add("grid-block");
            rowDiv.appendChild(divBlock);
        }
    }

    // Get all the blocks in the m x m grid by class
    const gridBlockDivs = document.querySelectorAll(".grid-block");
    // Add event listener to each of the grid blocks
    gridBlockDivs.forEach(gridBlockDiv => {
        // Set base opacity to 0
        gridBlockDiv.style.opacity = 0;
        // Set a mouse over event to chance opacity of block to current opacity + 0.1
        gridBlockDiv.addEventListener("mouseover", () => {
            // logs the pre-event opacity
            console.log(gridBlockDiv.style.opacity); 
            gridBlockDiv.style.opacity = (parseInt(gridBlockDiv.style.opacity) + 0.1);
        })
    })
}


const gridButton = document.querySelector(".new-grid-button");
gridButton.addEventListener("click", function recreateGrid () {
    let newSize = 0;
    newSize = prompt("Please enter a new grid size (max 100)");
    while (newSize > 100) {
        newSize = prompt("The size entered is too large (max 100)")
    }
    let mainGridDiv = document.querySelector(".grid-main");
    let firstChild = mainGridDiv.firstElementChild;
    while(firstChild) {
        firstChild.remove();
        firstChild = mainGridDiv.firstElementChild;
    }
    createGrid(newSize);
})

createGrid(16);
