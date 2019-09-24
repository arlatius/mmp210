function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('lightblue');
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
  fill('white');
  stroke('black');
  ellipse(220, 200, 100, 55) //left eye
  ellipse(380, 200, 100, 55) //right eye
  fill('#4C1B00');
  circle(220, 200, 50); //left iris
  circle(380, 200, 50); //right iris
  fill('black');
  circle(220, 200, 25); //let pupil
  circle(380, 200, 25); //right pupil
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
