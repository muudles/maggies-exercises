//some JSLint stuff
/*jslint plusplus: true, browser: true, devel: true, windows: true */
/*global Cell*/


//function to sort an array of cells
function sortCells(cellsArray) {
    "use strict";
    
    //TODO sort the cells in the good order
    
    //just an example to reverse completely the cells default order
    var indexCell = 0;
    for (indexCell in cellsArray) {
        if (cellsArray.hasOwnProperty(indexCell)) {
            //get the cell's value
            var currentValue = cellsArray[indexCell].getValue();
            //get the current order
            var currentOrder = cellsArray[indexCell].getOrder();
            //set the cell's new order
            cellsArray[indexCell].setOrder(99 - currentOrder);
        }
    }
    
    
}