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
  ellipse(x, y, 300, 350) //face
  fill('#FFAE94');
  noStroke();
  circle(x - 110, y + 20, 70); //left cheek
  circle(x +110, y+20, 70); //right cheek

  //nose
  fill('#F1D18B');
  stroke('black');
  triangle(x, y, x-30, x, x+20, x)


  //eyes
  fill('white');
  stroke('black');
  ellipse(y+20, y, 100, 55) //left eye
  ellipse(x+80, y, 100, 55) //right eye
  fill('#4C1B00');
  circle(y+20, y, 50); //left iris
  circle(x+80, y, 50); //right iris
  fill('black');
  circle(y+20, y, 25); //let pupil
  circle(x+80, y, 25); //right pupil
  fill('white');
  noStroke();
  circle(y+40, y-10, 15); //left shine
  circle(x+100, y-10, 15); //right shine

  fill('#4C0000');
  stroke('black');
  triangle(y+50, x+10, x+40, x+10, x-5, x+50) //mouth

  //hair
  fill('black');
  ellipse(300, 100, 150, 200);
  ellipse(400, 125, 150, 150);
  ellipse(380, 85, 150, 100);
  ellipse(190, 120, 100, 150);
  ellipse(220, 80, 100, 100);

}
