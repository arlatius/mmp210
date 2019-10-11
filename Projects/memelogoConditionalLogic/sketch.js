/* cool meme
  10.3.2019
  picture credit: sillyswampghost please dont sue me im a student and not making money off of this thanks
  
  NOTES:

BOOLEAN
  Boolean(true/false/etc); represent values as true or false
    false: false, 0, empty string, NaN, null, undefined
    true: true, 1, string, any number but 0
    
    
IF
   if: word used in javascript to begin condidiotnal statement
                         ex: if the weather is cold, wear a jacket
                            if (weatherIsCold){
                                jacket(wear);
                                }
    
    "if" goes into functions and warreants its own {}, whatever is written in those {} is what happens when the mouse is pressed
       
    SETUP:
        function draw(){
            A;
            
            if(B){
                C;
            }
        }
       meaning: "A" will happen. if you "B" then "C" will happen.
       
    ex:
        function draw(){
            background('black');
            
            if (mouseIsPressed) {
                background('plum');
            }
        }
        in this example, if the mouse is pressed the background changes color from black to plum
        
        
COMPARISON OPERATOR
    figures out conditions that are not provided by simple boolean values
        
        ==      two values are the same
        !=      two values are not the same
        >       value 1 is greater than value 2
        <       value 1 is less than value 2
        >=      value 1 is greater than or equal to value 2
        <=      value 1 is less than or equal to value 2
        ===     two values are the same and the same type
        !==     two values are not the same and not the same type
        
    ex:
        function(draw){
            background('black');

            if(mouseX > width/2){
                background('plum');
            }
        }
        in this example, if the mouse is more than halfway across the x axis, the background changes from black to plum
    
    
ELSE
    use else to tell program what to do if the condiditon is false
                        ex: if the weather is cold i will wear a jacker, if its not cold i will not wear a jacket
                            if(weatherIsCold){
                                jacket(wear);
                            }else{
                                jacket(dontWear);
                            }
    
    SETUP:
        function draw(){
            A;
            
            if(B){
                C;
            }else{
                D;
            }
        }
        meaning: "A" will happen. if you "B" then "C" will happen. if you dont "B" then "D" will happen.
    
    ex:
        function draw(){
            background(220);
            rectMode(CENTER);
            
            if (mouseX > width/2){
                ellipse(width/2, height/2, 100);
            } else{
                rect(width/2, height/2, 100, 100)
            }
        }
        in this example, if the mouse is more than halfway across the x axis, a circle will be displayed. if the mouse is NOT more than halfway across the x axis, a square will be displayed
    
ELSE IF
    used to test further conditions not covered by a simple else
                        ex: if it is snowing, i will wear a heavy coat. if it's raining i will wear a rain coat, otherwise i will wear a jacket.
                            if(snowing){
                                wear(heavyCoat);
                            } else if (raining){
                                wear(rainCoat);
                            }else{
                                wear(jacket);
                            }
    
    SETUP:
        function draw(){
            A;

            if(B){
                C;
            } else if (D){
                E;
            }else{
                F;
            }
        }
    meaning: "A" will happen. if you "B" then "C" will happen. if you "D" then "E" will happen. if you dont "B" or "D" then "F" will happen.
                            
    
NESTED CONDITIONAL STATEMENTS
    if statements can be placed inside of eachother
    
    SETUP:
        if(A){
            if(B){
                C;
            }else{
                D;
            }
        }
    meaning: if you "A" AND "B" then "C" will happen. if you only "A" then "D" will happen.


AND/OR
    logical conditions can be combined in one statement using && (and) and || (or)
    AND operators require both conditions to be true, OR operators will be true if either condition is true
    
    AND
        SETUP:
            if(A && B){
                C;
            }
        meaning: if you "A" AND "B", then "C" will happen.
        
    OR
        SETUP:
            if(A || B){
                C;
            }
        meaning: if you "A" OR "B", then "C" will happen
  */

var x = 320;
var y = 180;

var meme;
var meme2;
var meme3;

function preload() {
    meme = loadImage("images/sillyswampghost.jpg")
    meme2 = loadImage("images/sillyswampghost2.jpg")
    meme3 = loadImage("images/meme.jpg")

}

function setup() {
    createCanvas(480, 480);
    var canvas = createCanvas(480, 480);
    canvas.drawingContext.miterLimit = 1;
}

function draw() {
    background('white');
    image(meme, 0, 0, width, height)

    textAlign(CENTER, CENTER);
    textSize(30);
    fill('white');
    stroke('black');
    strokeWeight(5);
    textStyle(BOLD);
    textFont("Mansalva");
    text("what my cat sees when i come into the kitchen at 2 am to eat shredded cheese straight out of the bag", 0, 150, 480, 480);



    /* top left quadrant: (mouseY < row && mouseX < col)
    top right quadrant: (mouseY < row && mouseX > col)
    bottom left: (mouseY > row && mouseX < col)
    bottom right: (mouseY > row && mouseX > col)*/

    var row = height / 2;
    var col = width / 2;
    var s = width / 4;


    //hover stuff

    //top left
    if (mouseY < row && mouseX < col) {
        noStroke();
        fill(255, 0, 0, 75);
        rect(0, 0, col, row);

        stroke('black');
        strokeWeight(5);
        textSize(20);
        fill('white');
        text("default", s - s - s, s - s - s, 480, 480);

    }
    //top right
    else if (mouseY < row && mouseX > col) {
        noStroke();
        fill(70, 130, 180, 75);
        rect(col, 0, col, row);

        stroke('black');
        strokeWeight(5);
        textSize(20);
        fill('white');
        text("change text", s, s - s - s, 480, 480);


    }
    //bottom left
    else if (mouseY > row && mouseX < col) {
        noStroke();
        fill(46, 139, 87, 75);
        rect(0, row, col, row);

        stroke('black');
        strokeWeight(5);
        textSize(20);
        fill('white');
        text("change image and text", s - s - s, s, 480, 480);


    }
    //bottom right
    else {
        noStroke();
        fill(255, 215, 0, 75);
        rect(col, row, col, row);

        stroke('black');
        strokeWeight(5);
        textSize(20);
        fill('white');
        text("im out of ideas lol", s, s, 480, 480);


    }

    noStroke();
    /*click quadrants for different stuff i guess??*/
    if (mouseIsPressed && mouseY < row && mouseX < col) {
        image(meme, 0, 0, width, height)

        textAlign(CENTER, CENTER);
        textSize(30);
        fill('white');
        stroke('black');
        strokeWeight(5);
        textStyle(BOLD);
        textFont("Mansalva");
        text("what my cat sees when i come into the kitchen at 2 am to eat shredded cheese straight out of the bag", 0, 150, 480, 480);
    } else if (mouseIsPressed && mouseY < row && mouseX > col) {
        image(meme, 0, 0, width, height)

        textAlign(CENTER, CENTER);
        textSize(30);
        fill('white');
        stroke('black');
        strokeWeight(5);
        textStyle(BOLD);
        textFont("Mansalva");
        text("what you see when youre in bed and someone opens your door", 0, 150, 480, 480);
    } else if (mouseIsPressed && mouseY > row && mouseX < col) {
        image(meme2, 0, 0, width, height)

        textAlign(CENTER, CENTER);
        textSize(30);
        fill('white');
        stroke('black');
        strokeWeight(5);
        textStyle(BOLD);
        textFont("Mansalva");
        text("what your cat sees when you drop something under your bed and reach down to grab it", 0, 150, 480, 480);
    } else if (mouseIsPressed && mouseY > row && mouseX > col) {
                image(meme3, 0, 0, width, height)

        textAlign(CENTER, CENTER);
        textSize(30);
        fill('white');
        stroke('black');
        strokeWeight(5);
        textStyle(BOLD);
        textFont("Mansalva");
        text("im out of ideas lol", 0, 150, 480, 480);
    }





}
