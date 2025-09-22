function calculateRectangleAreaDec(width, height) {
    return width * height;
}

console.log("Rectangle Area using Dec:", calculateRectangleAreaDec(5, 10)) ;

const calculateRectangleAreaExp = function(width, height) {
    return width * height;
}

console.log("Rectangle Area using Exp:", calculateRectangleAreaExp(6, 10));

const calculateRectangleAreaArrow = (width, height) => {
    return width * height;
}

console.log("Rectangle Area using Arrow:", calculateRectangleAreaArrow(7, 10));