
// dynamic values

var svgWidth  = 300;
var svgHeight = 100;





// functions for drawing diagrams








// generate diagrams

var nameSpace = 'template';

var drawFunctions = [

    function firstDiagram() {
        generateRect(10, 10, 20, 20);
    },

];


function setUp() {
    // runs before every draw function
}

function tearDown() {
    // runs after every draw function
}


/*

Cheatsheet:

generateRect    ( x, y, width, height, [ borderRadius, fill, stroke, strokeWidth, transform, mask ])
generateCircle  ( cx, cy, r, [ fill, stroke, strokeWidth ])
generateText    ( content, x, y, fontSize, [ fontWeight, fill, fontFamily, textAnchor, transform, style, mask ])
generateLine    (x1, y1, x2, y2, [ stroke, strokeWidth, mask ])
generatePolygon (points, [ fill, stroke, strokeWidth ])
generateQuadraticPath(startx, starty, middlex, middley, endx, endy, [ stroke, strokeWidth, fill, isRelative ])
generateArc     (startx, starty, radiix, radiiy, rotationx, largeArc, sweep, endx, endy, [ isClosed, stroke, strokeWidth, fill ])
generateMask    (topY, width, height, [ isTop ])

*/
