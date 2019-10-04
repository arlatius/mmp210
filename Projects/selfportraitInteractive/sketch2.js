/* 
FUNCTIONS
function setup() = sets up the canvas
function draw () = draws things such as shapes lines etc
function mousePressed() = executes when the mouse is pressed
function mouseDragged() = detects a click but continues executing until the buttons released
function keyPressed() = executes when any kjey is pressed



VARIABLES
mouseX = cursors X position
mouseY = cursors Y position
pmouseX = cursors previous X position
pmouseY = cursors previous Y position
frameCount = frame count

 */

var width = 600;
var height = 400
var s = frameCount;



function setup() {
    createCanvas(600, 400);
    rectMode(CENTER);

}


function draw() {

    var x = mouseX;
    var y = mouseY;
    
    
    //other
    background(200);


    //face
    fill('#FFF1AB');
    stroke('black');
    ellipse(x, y, 300, 350) //face
    fill('#FFAE94');
    noStroke();
    circle(x-110, y+20, 70); //left cheek
    circle(x+110, y+20, 70); //right cheek

    //nose
    fill('#F1D18B');
    stroke('black');
    triangle(x, y, x-30, y+100, x+20, y+100)


    //eyes
    var lex = x-80; //left eye x
    var rex = x+80; //right eye x

    fill('white');
    stroke('black');
    ellipse(lex, y, 100, 55) //left eye
    ellipse(rex, y, 100, 55) //right eye
    fill('#4C1B00');
    circle(lex, y, 50); //left iris
    circle(rex, y, 50); //right iris
    fill('black');
    circle(lex, y, 25); //let pupil
    circle(rex, y, 25); //right pupil
    fill('white');
    noStroke();
    circle(x-60, y-10, 15); //left shine
    circle(x+100, y-10, 15); //right shine

    fill('#4C0000');
    stroke('black');
    triangle(x-50, y+110, x+40, y+110, x-5, y+150) //mouth

    //hair
    fill('black');
    ellipse(x, y-100, 150, 200);
    ellipse(x+100, y-75, 150, 150);
    ellipse(x+80, y-115, 150, 100);
    ellipse(x-110, y-80, 100, 150);
    ellipse(x-80, y-120, 100, 100);

}

function mousePressed() {
    background(0, 50);
}
