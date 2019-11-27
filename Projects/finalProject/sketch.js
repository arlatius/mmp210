/*
RUBRIC

✓   variables- uses variables 
✓   interactivity- sketch changes with user input
condiitional logic- uses at least one conditional logic statement
external media- uses either image or sound
✓   physical sensor- uses physical sensor
custom function- uses at least one custom function
instructions- instructions for the user is added to the html
comments- comments are used to clarify code


*/


var serial;
var portName = "COM7"
var sensorValue;

function setup(){
  createCanvas(800,600);
  
  serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);
	
	serial.open(portName);
}

function serverConnected() {
	console.log('connected to server.');
}

function portOpen() {
	console.log('the serial port opened.')
}

function portClose() {
	console.log('The serial port closed.');
}
    
function serialError() {
    console.log("error");
}

function serialEvent() {
	var currentString = serial.readLine(); // read the incoming string
	trim(currentString); // remove any trailing whitespace
	if (!currentString) {
		return; // if the string is empty, do no more
	}
	sensorValue = currentString; // save it for the draw method
}

function draw() {
	var c = map(sensorValue, 0, 1023, 0, 150);

	// sky
	background(c, c, c + 85);

  //stars
  var t = map(sensorValue, 0, 1023, 355, 0)
  fill(255, 255,255,t-100);
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
  
  
	// sun
	var y = map(sensorValue, 0, 1023, height, 100);
	fill('gold');
	noStroke();
	ellipse(100, y, 100);
  
  	// moon
	var y = map(sensorValue, 0, 1023, 100, height);
	fill('white');
	noStroke();
	ellipse(700, y, 100);
  fill(c, c, c + 85);
    ellipse(720,y,90);

	// ground
	fill(c, c + 75, c);
	ellipse(400,600,1000,300);
}