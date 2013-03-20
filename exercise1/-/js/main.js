//some JSLint stuff
/*jslint plusplus: true, browser: true, devel: true, windows: true */
/*global Cell, sortCells*/

//set the number of cells to be instanciated
var numberOfCells = 100;

//get the main element;
var mainContainer = document.getElementById('main');
//get the control buttons
var reinitButton = document.getElementById('reinit-button');
var sortButton = document.getElementById('start-button');

//set the cells array
var cellsArray = [];

/*
function to refresh the position of all the cells
*/
function refreshCellsPosition() {
    "use strict";
    var cellIndex;
    for (cellIndex in cellsArray) {
        if (cellsArray.hasOwnProperty(cellIndex)) {
            cellsArray[cellIndex].setPosition();
        }
    }
}

/*
function to init all the cells
*/
function initCells() {
    "use strict";
    //set the cells into the array
    var indexCells = 0;
    for (indexCells = 0; indexCells < numberOfCells; ++indexCells) {
        //add a new cell
        cellsArray.push(new Cell(indexCells, mainContainer));
    }
    //set the position of the cells
    refreshCellsPosition();
}
//init for the first time the cells
initCells();

//set the event listener for the reinit button
reinitButton.onclick = function () {
    "use strict";
    //clear the container
    mainContainer.innerHTML = "";
    //reset the cells Array
    cellsArray = [];
    initCells();
    
    return true;
};

//set the event listener for the sorting button
sortButton.onclick = function () {
    "use strict";
    
    sortCells(cellsArray);
    
    //set the position of the cells
    refreshCellsPosition();
    
    return true;
};