/* meme v1 
10.3.2019

FUNCTIONS
  function preload(); starts loading thing before we run code
  
  
  
TEXT
  var s = "string" 

  text("string", x, y, x2, y2) string is the text, x and y is the position, the x2 and y2 function like a rectangle to determine length and height

  textSize(height in pixels)

  textStyle(ITALIC/BOLD)

  textFont('any html font')
  to add a google font you have to add the link to the html page under the stylesheet link

  textAlign(CENTER/LEFT/RIGHT,BOTTOM/CENTER/TOP) first variable is how its centered, teh second is what point its centered around
  
IMAGE
  
  to make an image a variable
    var image name;
    function preload(){
    imagename = loadImage("image path")
    }
  
  image(image variable name, x, y, width, height)
  
  tint (color) tints the image do NOT use with interactive image
  
  how to get a color picker thing (in the draw function)
    var c = get(mouseX,mouseY);
        this allows you to use the variable as a fill color
    fill(c);
    ellipse(mouseX, mouseY, 50);
        this will bethe cursor that lets you see the color
        
  
        
    


*/
var x = 320;
var y = 180;

var tunnel;

function preload(){
  tunnel = loadImage("images/tunnel.jpg")
  
}

function setup(){
  createCanvas (640,360);
  var canvas = createCanvas(640,360);
  canvas.drawingContext.miterLimit = 1;
}

function draw(){
  var c = get(mouseX,mouseY);
  
  background('lightblue');
  image(tunnel,0,0,width,height)
  
  
  textAlign(CENTER,CENTER);
  textSize(50);
  fill ('purple');
  stroke('pink');
  strokeWeight (20);
  textStyle(BOLD);
  textFont("Mansalva");
  text("god cannot kill me", x, y-100);
  
  textAlign(CENTER);
  textSize(20);
  strokeWeight(10);
  text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 20, 20, 600,400);
  
  fill(c);
  stroke('white');
  strokeWeight (1);
  ellipse(mouseX,mouseY,50)
}