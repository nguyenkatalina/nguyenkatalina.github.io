var img, tsuro1, tsuro2, tsuro3, tsuro4, tsuro5, tsuro6, tsuro7, tsuro8, tsuro9, tsuro10, 
tsuro11, tsuro12, tsuro13, tsuro14, tsuro15, tsuro16, tsuro17, tsuro18, tsuro19, tsuro20,
tsuro21, tsuro22, tsuro23, tsuro24, tsuro25, tsuro26, character1, character2, character3,
character4, character5, character6, character7;
var initials ='kn'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/gameboard.png');
  character1 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/character1.png');
  character2 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/character2.png');
  character3 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/character3.png');
  character4 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/character4.png');
  character5 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/character5.png');
  character6 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/character6.png');
  character7 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/character7.png');
  tsuro1 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro1.png');
  tsuro2 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro2.png');
  tsuro3 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro3.png');
  tsuro4 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro4.png');
  tsuro5 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro5.png');
  tsuro6 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro6.png');
  tsuro7 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro7.png');
  tsuro8 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro8.png');
  tsuro9 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro9.png');
  tsuro10 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro10.png');
  tsuro11 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro11.png');
  tsuro12 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro12.png');
  tsuro13 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro13.png');
  tsuro14 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro14.png');
  tsuro15 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro15.png');
  tsuro16 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro16.png');
  tsuro17 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro17.png');
  tsuro18 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro18.png');
  tsuro19 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro19.png');
  tsuro20 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro20.png');
  tsuro21 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro21.png');
  tsuro22 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro22.png');
  tsuro23 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro23.png');
  tsuro24 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro24.png');
  tsuro25 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro25.png');
  tsuro26 = loadImage('https://nguyenkatalina.github.io/tsurogamepieces/tsuro26.png');
  
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    image(img, mouseX-200, mouseY-200,400,400);
    
  } else if (toolChoice == '2' ) { // player1
    image(character1, mouseX-25, mouseY-25,50,50);
    
  } else if (toolChoice == '3' ) { // player2
    image(character2, mouseX-25, mouseY-25,50,50);
    
  } else if (toolChoice == '4' ) { // player3
    image(character3, mouseX-25, mouseY-25,50,50);
    
  } else if (toolChoice == '5' ) { // player4
    image(character4, mouseX-25, mouseY-25,50,50);
 
  } else if (toolChoice == '6' ) { // player5
    image(character5, mouseX-25, mouseY-25,50,50);
    
  } else if (toolChoice == '7' ) { // player5
    image(character6, mouseX-25, mouseY-25,50,50);
    
  } else if (toolChoice == '8' ) { // player5
    image(character7, mouseX-25, mouseY-25,50,50);
    
  } else if (toolChoice == 'q' || toolChoice == 'Q') { // q places the image we pre-loaded
    image(tsuro1, mouseX-50, mouseY-50,100,100);  
    
  } else if (toolChoice == 'w' || toolChoice == 'W') { // w places the image we pre-loaded
    image(tsuro2, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'e' || toolChoice == 'E') { // e places the image we pre-loaded
    image(tsuro3, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'r' || toolChoice == 'R') { // r places the image we pre-loaded
    image(tsuro4, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 't' || toolChoice == 'T') { // t places the image we pre-loaded
    image(tsuro5, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'y' || toolChoice == 'Y') { // y places the image we pre-loaded
    image(tsuro6, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'u' || toolChoice == 'U') { // u places the image we pre-loaded
    image(tsuro7, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'i' || toolChoice == 'I') { // i places the image we pre-loaded
    image(tsuro8, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'o' || toolChoice == 'O') { // o places the image we pre-loaded
    image(tsuro9, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'p' || toolChoice == 'P') { // p places the image we pre-loaded
    image(tsuro10, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'a' || toolChoice == 'A') { // a places the image we pre-loaded
    image(tsuro11, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 's' || toolChoice == 'S') { // s places the image we pre-loaded
    image(tsuro12, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'd' || toolChoice == 'D') { // d places the image we pre-loaded
    image(tsuro13, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'f' || toolChoice == 'F') { // f places the image we pre-loaded
    image(tsuro14, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(tsuro15, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'h' || toolChoice == 'H') { // h places the image we pre-loaded
    image(tsuro16, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'j' || toolChoice == 'J') { // j places the image we pre-loaded
    image(tsuro17, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'k' || toolChoice == 'K') { // k places the image we pre-loaded
    image(tsuro18, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'l' || toolChoice == 'L') { // l places the image we pre-loaded
    image(tsuro19, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'z' || toolChoice == 'Z') { // z places the image we pre-loaded
    image(tsuro20, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'x' || toolChoice == 'X') { // x places the image we pre-loaded
    image(tsuro21, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'c' || toolChoice == 'C') { // c places the image we pre-loaded
    image(tsuro22, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'v' || toolChoice == 'V') { // v places the image we pre-loaded
    image(tsuro23, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'b' || toolChoice == 'B') { // b places the image we pre-loaded
    image(tsuro24, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'n' || toolChoice == 'N') { // n places the image we pre-loaded
    image(tsuro25, mouseX-50, mouseY-50,100,100);    
    
  } else if (toolChoice == 'm' || toolChoice == 'M') { // m places the image we pre-loaded
    image(tsuro26, mouseX-50, mouseY-50,100,100);    
    
  } 
  
  
  
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == '9' || key == '9') {
    background(screenbg); // set the screen back to the background color
  } else if (key == '0') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
