const _answer_area_circle = document.getElementById('answer-area-circle');
const _answer_perimeter_circle = document.getElementById('answer-perimeter-circle');
const _answer_diameter_circle = document.getElementById('answer-diameter-circle');

const _answer_area_triangle = document.getElementById('answer-area-triangle');
const _answer_perimeter_triangle = document.getElementById('answer-perimeter-triangle');

const _answer_area_square = document.getElementById('answer-area-square');
const _answer_perimeter_square = document.getElementById('answer-perimeter-square');

/* Square section */

function getSquareArea( side ) {
    return Math.pow(side,2);
}

function getSquarePerimeter( side ) {
    return 4*side;
}

/* Triangle section */

function getTrianglePerimeter( side1, side2, side3 ) {
    return side1 + side2 + side3;
}

function getTriangleArea( height, base ) {
    return (base * height) / 2;
}

/* Circle section  */

function getCirclePerimeter( radio ) {
    return  (2 * radio) * Math.PI;
}

function getCircleDiameter( radio ) {
    return 2 * radio;
}

function getCircleArea( radio ) {
    return Math.PI * Math.pow(radio, 2); 
}

/** Triangle section */
function trianglePerimeter() {
    var element1 = document.getElementById("side1");
    var element2 = document.getElementById("side2");
    var element3 = document.getElementById("base");
    var side1 = Number(element1.value);
    var side2 = Number(element2.value);
    var base = Number(element3.value);
    var result = getTrianglePerimeter( side1, side2, base );
    _answer_perimeter_triangle.innerHTML = result;
}


function triangleArea() {
    var height = document.getElementById("height");
    var base = document.getElementById("base");

    var aux_h = Number(height.value);
    var aux_b = Number(base.value);

    var result = getTriangleArea( aux_h, aux_b );
    _answer_area_triangle.innerHTML = result;
}

/**  Square section */
function squarePerimeter() {
    var element = document.getElementById("side");
    var value = element.value;
    var result =  getSquarePerimeter(value);
    _answer_perimeter_square.innerHTML = result;
}

function squareArea() {
    var element = document.getElementById("side");
    var value = element.value;
    var result =  getSquareArea( value );
    _answer_area_square.innerHTML = result;
}

/** Circle section */
function circleArea() {
    var element = document.getElementById("radio");
    var value = element.value;
    
    if(!value)
        alert("Form is empty");
    else {
        var result = getCircleArea(value);
        var resultDiameter = getCircleDiameter(value);

        _answer_area_circle.innerHTML = result;
        _answer_diameter_circle.innerHTML = resultDiameter;
    }
}

function circlePerimeter() {
    var element = document.getElementById("radio");
    var value = element.value;
    var result = getCirclePerimeter(value);
    var resultDiameter = getCircleDiameter(value);

    _answer_perimeter_circle.innerHTML = result;
    _answer_diameter_circle.innerHTML = resultDiameter;
}



function addDisplay (id, className) {
    var element = document.getElementById(id);
    var list = document.getElementsByClassName(className);

    for( var aux of list ) {
        aux.classList.add("block");
        if( aux.id === id)
            aux.classList.remove("block");
    }
}


function perimetroIsosceles(side1, side2, side3) {
    if(isIsoceles(side1, side2, side3))
        return side1 + side2 + side3;
}

function areaIsosceles(side1, side2, side3) {
    if(isIsoceles(side1, side2, side3)) {
        var base = getBase(side1, side2, side3)
        var height = getHeight(side1,base);
        return ( base * height ) / 2;
    }

}

function isIsoceles(side1, side2, side3) {
    if( side1 == side2 && side1 != side3 )
        return true;
    if( side1 == side3 && side1 != side2)
        return true;
    if( side2 == side3 && side2 != side1)
        return true;
    return false;
}

function getBase(side1, side2, side3) {
    if(side1 == side2)
        return side3;
    if( side2 == side3)
        return side1;
    return side2;
}

function getHeight(side1, base) {
    return Math.sqrt(Math.pow(side1,2) - (Math.pow(base,2)/4));
}


