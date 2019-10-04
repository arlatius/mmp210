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
offset

 */




function setup() {
  createCanvas(600, 400);
    background(220);
    
}


function draw() {
    
    var r = mouseX + mouseY; //red
    var g = map(mouseX,0,width,0,255); //green
    var b= map(mouseY,0,height,0,255); //blue
  //other
    
  

  //face
  fill('#FFF1AB');
  stroke('black');
  ellipse(300, 200, 300, 350) //face
  fill('#FFAE94');
  noStroke();
  circle(190, 220, 70); //left cheek
  circle(410, 220, 70); //right cheek

  //nose
  fill('#F1D18B');
  stroke('black');
  triangle(300, 200, 270, 300, 320, 300)


  //eyes
    var lex = 220; //left eye x
    var rex = 380; //right eye x
    
  fill('white');
  stroke('black');
  ellipse(lex, 200, 100, 55) //left eye
  ellipse(rex, 200, 100, 55) //right eye
  fill(r,g,b);
  circle(lex, 200, 50); //left iris
  circle(rex, 200, 50); //right iris
  fill('black');
  circle(lex, 200, 25); //let pupil
  circle(rex, 200, 25); //right pupil
  fill('white');
  noStroke();
  circle(240, 190, 15); //left shine
  circle(400, 190, 15); //right shine

  fill('#4C0000');
  stroke('black');
  triangle(250, 310, 340, 310, 295, 350) //mouth

  //hair
  fill('black');
  ellipse(300, 100, 150, 200);
  ellipse(400, 125, 150, 150);
  ellipse(380, 85, 150, 100);
  ellipse(190, 120, 100, 150);
  ellipse(220, 80, 100, 100);

}
function mousePressed() {
    background(0, 50);

}

