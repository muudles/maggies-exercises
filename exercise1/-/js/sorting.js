//some JSLint stuff
/*jslint plusplus: true, browser: true, devel: true, windows: true */
/*global Cell*/


//function to sort an array of cells
function sortCells(cellsArray) {
    "use strict";
    
    //TODO sort the cells in the good order
    var indexCell = 0;  

	var cellOrderArray = [];
	 
    for (indexCell in cellsArray) {
        if (cellsArray.hasOwnProperty(indexCell)) {
            //get the cell's value
            var currentValue = cellsArray[indexCell].getValue();
            //get the current order
            var currentOrder = cellsArray[indexCell].getOrder();
						
			
            //set the cell's new order
            //cellsArray[indexCell].setOrder(currentOrder);
			
        }
    }
	


	var listItems = document.getElementsByClassName("block-sort"),
			comparisons = 0,
			swaps = 0,
			endIndex = 0,
			offset = 0;

	
	
	

}

function startInterval() {
	var intervalCount = 0,
		interval = setInterval(function() { 
        doSwap(intervalCount);
        intervalCount++; 
        if(intervalCount >= endIndex) displaySummary(interval);
        }, 500);
}

function doSwap(index) {
	if (index > 0) {
		listItems[index - 1].className = listItems[index - 1].className.replace("selected", "");
	}

	listItems[index].className = listItems[index].className + " selected";

    if (endIndex > 0) {
    	comparisons++;	
    	document.getElementById("comparisons").innerText = "Comparisons: " + comparisons;
    
    	if (listItems[index].innerText > listItems[index + 1].innerText) {
			var swappingValue = listItems[index].innerText,
				swappingClassName = listItems[index].className;

			listItems[index].innerText = listItems[index + 1].innerText;
			listItems[index + 1].innerText = swappingValue;

			listItems[index].className = listItems[index + 1].className;
			listItems[index + 1].className = swappingClassName;

			swaps++;

			document.getElementById("swaps").innerText = "Swaps: " + swaps;
		}
    }
}


function displaySummary(interval) {
	clearInterval(interval)

	if (endIndex > 0) {
		startInterval();
	} 

	var runningValue = document.getElementById("offset").innerText.replace("Offset: ", "");
	runningValue = parseInt(listItems.length - endIndex) + parseInt(runningValue);
	document.getElementById("offset").innerText = "Offset: " +  runningValue;
	endIndex--;
}


// Sorting algarithm 

var sort = function (list) {

    var comparisons = 0,
        swaps = 0,
        endIndex = 0,
        len = list.length - 1,
        hasSwap = true;

    for (var i = 0; i < len; i++) {

        hasSwap = false;

        for (var j = 0, swapping, endIndex = len - i; j < endIndex; j++) {
            comparisons++;

            if (list[j] > list[j + 1]) {

                swapping = list[j];

                list[j] = list[j + 1];
                list[j + 1] = swapping;

                swaps++;
                hasSwap = true;
            };
        };

        if (!hasSwap) {
            break;
        }
    }

    console.log("--Bubble Sort--")
    console.log("Comparisons: " + comparisons);
    console.log("Swaps: " + swaps);

    return list;
};