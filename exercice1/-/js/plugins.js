//some JSLint stuff
/*jslint plusplus: true, browser: true, devel: true, windows: true */

/*
get the supporter css property
slightly modified from:
http://www.javascriptkit.com/javatutors/setcss3properties.shtml
*/
function getsupportedprop(proparray) {
    "use strict";
    var root = document.documentElement, //reference root element of document
        i = 0;
    for (i = 0; i < proparray.length; ++i) { //loop through possible properties
        if (typeof root.style[proparray[i]] === "string") { //if the property value is a string (versus undefined)
            return proparray[i]; //return that string
        }
    }
}

// define some globals
var cellInterval = 200;
var cellsPerLine = 10;
//in pixels
var cellWidth = 50;
var cellHeight = 50;
var cssTransformProperty = getsupportedprop(['transform', 'MozTransform', 'WebkitTransform']);



/*
The constructor of a cell
*/
var Cell = function (order, container) {
    //set the strict mode because we are cool
    "use strict";
    
    //set the innerValue property 
    this.innerValue = Math.floor((Math.random() * cellInterval) + 1);
    //set the order of the object
    this.order = order;
    //set the associated html element
    this.element = document.createElement('div');
    this.element.setAttribute('class', 'block-sort');
    this.element.innerHTML = this.innerValue;
    container.appendChild(this.element);
    return this;
};

/*
Define the prototype of a cell
*/
Cell.prototype = {
    innerValue: 0,
    order: 0,
    element: null,
    setPosition: function () {
        "use strict";
        //get the x and y position from the order
        var x = (this.order % cellsPerLine) * cellWidth,
            y = (Math.floor(this.order / cellsPerLine)) * cellHeight,
            transform = "translate3d(" + x + "px, " + y + "px, 0)"; //set the transform
        //assign the transform
        this.element.style[cssTransformProperty] = transform;
        
    },
    getValue: function () {
        "use strict";
        return this.innerValue;
    },
    getOrder: function () {
        "use strict";
        return this.order;
    },
    setOrder: function (order) {
        "use strict";
        //set the new order
        this.order = order;
        //trigger the position update
        this.setPosition();
    }
};