/* cool meme
  10.3.2019
  picture credit: sillyswampghost please dont sue me im a student and not making money off of this thanks*/

function setup(){
  createCanvas(640,640);
  var canvas = createCanvas(640,640);
  canvas.drawingContext.miterLimit = 1;
}

function draw(){
  background('lightblue');
  
  fill('white');
  stroke('black');
  strokeWeight(10);
  textSize (50);
  textAlign(CENTER);
  textStyle(BOLD);
  text("what my cat sees when i come out of my room at 4 am looking for cheese", 0, 100,640,640);
}