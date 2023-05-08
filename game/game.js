var bggame;
var bobacup;
var ball;
var player;
var score = 0;
var level = 1;
var highScore = 0;

function preload()  {
  bggame = loadImage('https://nguyenkatalina.github.io/gameimages/boba.jpg');
  bobacup = loadImage('https://nguyenkatalina.github.io/gameimages/bobadrink.png');
}

function setup() {
  createCanvas(500, 500);
  ball = new Ball();
  player = new Player();
  highScore = localStorage.getItem('highScore') || 0
}

function draw() {
  background(bggame);
  textSize(20);
  text(`Score: ${score} Level: ${level} High Score: ${highScore}`, 10, 30);
  ball.update();
  ball.show();
  player.show();
  player.update();
  if (ball.checkCollision(player)) {
    score++;
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('highScore', highScore);
    }
    ball.reset();
    if (score % 5 == 0) {
      level++;
      ball.speed += 1;
      player.speed += 1;
    }
  }
}

class Ball {
  constructor() {
    this.reset();
    this.size = 20;
    this.speed = 4;
  }

  reset() {
    this.x = random(width);
    this.y = 0;
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.reset();
      score = 0;
      level = 1;
      this.speed = 4;
      player.speed = 5;
    }
  }

  show() {
    fill(0); //set fill color to black
    ellipse(this.x, this.y, this.size, this.size);
  }

  checkCollision(player) {
    let distance = dist(this.x, this.y, player.x, player.y);
    if (distance < (this.size/2 + player.size/2)) {
      return true;
    } else {
      return false;
    }
  }
}

class Player {
  constructor() {
    this.x = width/2;
    this.y = height - 50;
    this.size = 50;
    this.speed = 5;
  }

  show() {
    fill(0, 255, 0);
    imageMode(CORNER); // set the origin of the image to the top-left corner
    image(bobacup, this.x - this.size/2, this.y - this.size/2, this.size, this.size); // bobacup
    //ellipse(this.x, this.y, this.size, this.size);
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    this.x = constrain(this.x, 0 + this.size/2, width - this.size/2);
  }
}
