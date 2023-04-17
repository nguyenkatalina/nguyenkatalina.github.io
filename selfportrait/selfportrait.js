function setup() {
createCanvas(600, 600);
// R, G & B integer values
background(164, 189, 165);
strokeWeight(2);
describe('canvas with background');
}


function draw() {
//hairback
  fill(0,0,0);
  quad(190, 230, 400, 200, 460, 550, 150, 550);
  
//body
  fill(69,55,36);
  noStroke();
  rect(200, 410, 200, 240, 30);
  
//left arm
  fill(69,55,36);
  quad(30, 230, 65, 225, 260, 430, 200, 440);
  fill(230, 199, 156);
  ellipse(45, 220, 55, 55);
  
//head
  fill(230, 199, 156);
  noStroke();
  ellipse(300,300,200,270);
  
//hair
  fill(0,0,0);
  quad(190, 220, 290, 159, 220, 300, 150, 550);
  quad(290, 159, 400, 192, 460, 550, 380, 280);
  triangle(290,159,230,230,320,200);
  
//nose  
  fill(214, 180, 133);
  triangle(290,350,300,320,310,350);

//left eye  
  fill(255,255,255);
  ellipse(260,290,45,27);
  fill(66, 48, 22);
  ellipse(260,290,15,15);
  
//right eye
  fill(255,255,255);
  ellipse(340,290,45,27);
  fill(66, 48, 22);
  ellipse(340,290,15,15);
  
//left glasses
  noFill();
  stroke(0,0,0);
  ellipse(255,290,80,75);

//between glasses 
  line(295, 290, 305, 290);
  fill(237, 138, 95);
  strokeWeight(3);

//left glasses arm
  line(385, 270, 400, 275);
  strokeWeight(3);

//right glasses arm 
  line(200, 275, 215, 270);
  strokeWeight(3);
  
//right glasses
  noFill();
  stroke(0,0,0);
  ellipse(345,290,80,75);

//mouth  
  stroke(0,0,0);
  arc(300, 370, 50, 50, 0, PI);
}
