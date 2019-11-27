/*

    sensor
    interaction
    theme
*/

var slideNumber = 0;
var totalSlides = 6;

var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 50;

var prevBtnX = 100;
var prevBtnY = 500;
var prevBtnW = 100;
var prevBtnH = 50;

var day,night;

function preload() {
  day = loadImage("images/day.jpg");
  night = loadImage("images/night.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(51);

  if (slideNumber == 0) {
    // content for slide number 0
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Final Project Pitch", width / 2, height / 2);

    textSize(30);
    text("by ya boy spencer", width / 2, height / 2 + 50);

  } else if (slideNumber == 1) {
    // content for slide number 1

    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Photocell", width / 2, 200);

    stroke(255);
    strokeWeight(4);
    rect(390, 375, 5, 200); //LEFT PRONG
    rect(410, 375, 5, 200); //RIGHT PRONG
    fill(200);
    ellipse(400, 375, 80, 40);
    stroke('red');
    strokeWeight(2); //WIGGLY LINES
    line(370, 370, 380, 380);
    line(380, 380, 390, 365);
    line(390, 365, 400, 385);
    line(400, 385, 410, 365);
    line(410, 365, 420, 380);
    line(420, 380, 430, 370);

    noStroke();
    textSize(20);
    textAlign(CENTER, CENTER);
    text("depending on how much light the photocell detects, the day/night cycle will change (whats the real word for that i literlaly only know video game terms lmao)", 0, 0, 800, 600);

  } else if (slideNumber == 2) {

    // theme
    image(day, 0, 0, width/2, height/2);
    image(night, width/2, height/2,width/2, height/2, );
    stroke(255);
    strokeWeight(2);
    textAlign(CENTER, CENTER);
    text("Theme", 600, 150);
    text("day/night cycle", 200, 450);
  }

  else if (slideNumber == 3){
    image(day, 0, 0, width/2, height/2);
    image(night, width/2, height/2,width/2, height/2, );
    stroke(255);
    strokeWeight(2);
    textAlign(CENTER, CENTER);
    text("sun, light sky, clouds, rooster sound", 600, 150);
    text("moon, dark sky, stars, crickets sound", 200, 450);
  }
  else if (slideNumber == 4){
    // DAY

    background(158, 226, 255); //SKY

    fill('yellow');
    ellipse(100,100,100); //SUN

    fill('green');
    ellipse(400,600,1000,300); //CLOUD

    //CLOUD 1
    fill('white');
    ellipse(200,200,100,50);
    ellipse(250,220,100,50);
    ellipse(260,180,150,50);
    ellipse(240,230,300,20);
    ellipse(280,250,100,50);
    ellipse(260,220,300,20);
    ellipse(450, 215,20,5);

    //CLOUD 2
    ellipse(600,300,100,50);
    ellipse(650,320,100,50);
    ellipse(660,280,150,50);
    ellipse(640,330,300,20);
    ellipse(680,350,100,50);
    ellipse(660,320,300,20);
    ellipse(850, 315,20,5);
  }
  else if (slideNumber == 5){
    //NIGHT

    background(0, 19, 59); //sky

    //STARS
    fill(255);
    ellipse(699,300,3);
    ellipse(408,13,3);
    ellipse(515,233,3);
    ellipse(500,90,3);
    ellipse(634,170,3);
    ellipse(469,31,3);
    ellipse(586,52,3);
    ellipse(702,148,3);
    ellipse(253,280,3);
    ellipse(446,213,3);
    ellipse(94,191,3);
    ellipse(356,203,3);
    ellipse(264,232,3);
    ellipse(116,335,3);
    ellipse(534,359,3);
    ellipse(211,400,3);
    ellipse(497,32,5);
    ellipse(619,299,5);
    ellipse(356,259,5);
    ellipse(329,385,5);
    ellipse(532,147,5);

    fill('white');
    ellipse(100,100,100); //Moon
    fill(0, 19, 59);
    ellipse(120,100,90);


    fill(0, 59, 29);
    ellipse(400,600,1000,300); //GROUND

    //CLOUD 1
    fill(133);
    ellipse(200,200,100,50);
    ellipse(250,220,100,50);
    ellipse(260,180,150,50);
    ellipse(240,230,300,20);
    ellipse(280,250,100,50);
    ellipse(260,220,300,20);
    ellipse(450, 215,20,5);

    //CLOUD 2
    ellipse(600,300,100,50);
    ellipse(650,320,100,50);
    ellipse(660,280,150,50);
    ellipse(640,330,300,20);
    ellipse(680,350,100,50);
    ellipse(660,320,300,20);
    ellipse(850, 315,20,5);



  }


  /* drawing buttons */

  // next btn
  if (slideNumber < totalSlides - 1) {
    fill(255);
    noStroke();
    ellipse(nextBtnX, nextBtnY, nextBtnSize);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Next", nextBtnX, nextBtnY);
  }


  // prev btn
  if (slideNumber > 0) {
    fill(255);
    noStroke();
    rect(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
    fill(0);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Previous", prevBtnX + 10, prevBtnY + 10);
  }


}

function mousePressed() {

  // next btn
  var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
  if (d < nextBtnSize / 2 && slideNumber < totalSlides - 1) {
    slideNumber++;
  }

  // prev btn
  if (mouseX > prevBtnX &&
    mouseX < prevBtnX + prevBtnW &&
    mouseY > prevBtnY &&
    mouseY < prevBtnY + prevBtnH &&
    slideNumber > 0) {
    slideNumber--;
  }
}
