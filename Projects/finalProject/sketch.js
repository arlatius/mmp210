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
var portName = "COM14"
var sensorValue;

var crickets;

function preload() {
	crickets = loadSound('crickets.wav');
	birds = loadSound('birds.wav');
}


function setup() {
	createCanvas(800, 600);

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
	fill(255, 255, 255, t - 100);
	ellipse(699, 300, 3);
	ellipse(408, 13, 3);
	ellipse(515, 233, 3);
	ellipse(500, 90, 3);
	ellipse(634, 170, 3);
	ellipse(469, 31, 3);
	ellipse(586, 52, 3);
	ellipse(702, 148, 3);
	ellipse(253, 280, 3);
	ellipse(446, 213, 3);
	ellipse(94, 191, 3);
	ellipse(356, 203, 3);
	ellipse(264, 232, 3);
	ellipse(116, 335, 3);
	ellipse(534, 359, 3);
	ellipse(211, 400, 3);
	ellipse(497, 32, 5);
	ellipse(619, 299, 5);
	ellipse(356, 259, 5);
	ellipse(329, 385, 5);
	ellipse(532, 147, 5);


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
	ellipse(720, y, 90);

	// ground
	fill(c, c + 75, c);
	ellipse(400, 600, 1000, 300);

	//HOUSE
	var h = map(sensorValue, 0, 1023, 0, 200);
	fill(h);
	square(200, 320, 250);
	
	fill(h);
	rect(375,200,50,150); //chimney
	
	fill(h);
	triangle(150,350,325,200,500,350); //roof

	

	/*var y = map(sensorValue, 0, 1023, 25, 225);*/
	fill('light blue');
	//left window
	square(225,400,37);
	square(270,400,37);
	square(225,445,37);
	square(270,445,37);
	fill('white');
	//right window
	square(350,400,37);
	square(395,400,37);
	square(350,445,37);
	square(395,445,37);

}



function mousePressed() {
	if (mouseX > 400 && mouseX < width &&
		mouseY > 0 && mouseY < height) {
		crickets.play();
	} else if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < height) {
		birds.play();
	}
}
