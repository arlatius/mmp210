/* cool meme
  10.3.2019
  picture credit: sillyswampghost please dont sue me im a student and not making money off of this thanks*/

var x = 320;
var y = 180;

var meme;

function preload(){
  meme = loadImage("images/sillyswampghost.jpg")
  
}

function setup(){
  createCanvas (480,480);
  var canvas = createCanvas(480,480);
  canvas.drawingContext.miterLimit = 1;
}

function draw(){
  var c = get(mouseX,mouseY);
  
  background('lightblue');
  image(meme,0,0,width,height)
  
  
  textAlign(CENTER,CENTER);
  textSize(30);
  fill ('white');
  stroke('black');
  strokeWeight (5);
  textStyle(BOLD);
  textFont("Mansalva");
  text("what my cat sees when i come into the kitchen at 2 am to eat shredded cheese straight out of the bag", 0, 150,480,480);
  


}