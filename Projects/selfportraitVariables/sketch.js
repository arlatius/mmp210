var x = 300;
var y = 200;
var faceSize = 500;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('lightblue');
  fill('#FFF1AB');
  stroke('black');
  ellipse(x, y, x, x+50) //face
  fill('#FFAE94');
  noStroke();
  circle(x - 110, y + 20, y-130); //left cheek
  circle(x +110, y+20, y-130); //right cheek

  //nose
  fill('#F1D18B');
  stroke('black');
  triangle(x, y, x-30, x, x+20, x)


  //eyes
  fill('white');
  stroke('black');
  ellipse(y+20, y, faceSize/5, y-145) //left eye
  ellipse(x+80, y, faceSize/5, y-145) //right eye
  fill('#4C1B00');
  circle(y+20, y, faceSize/10); //left iris
  circle(x+80, y, faceSize/10); //right iris
  fill('black');
  circle(y+20, y, faceSize/20); //right pupil
  fill('white');
  noStroke();
  circle(y+40, y-10, y-185); //left shine
  circle(x+100, y-10, y-185); //right shine

  fill('#4C0000');
  stroke('black');
  triangle(y+50, x+10, x+40, x+10, x-5, x+50) //mouth

  //hair
  fill('black');
  ellipse(x, y-100, y-50, y);
  ellipse(x+100, y-75, y-50, y-50);
  ellipse(x+80, y-115, y-50, y-100);
  ellipse(y-10, y-80, y-100, y-50);
  ellipse(y+20, y-120, y-100, y-100);

}
