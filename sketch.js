

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background1 = createSprite(0,0,600,600);
  background1.addImage(backgroundImage);
  background1.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(400,20,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
 score = 0
}

function draw() {
  background("white");
  // moving ground
    background1.velocityX = -3 

    if (background1.x < 0){
      background1.x = background1.width/2;
    }
  
  //moving bow
  //bow.x = World.mouseX
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    
    var temp_arrow = createArrow();
  
      temp_arrow.y = bow.y;
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  
 
  drawSprites();
  text("score:"+score,530,50);
  textSize=20;
  
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.scale = 0.1;
  red.lifetime=160;
  return red;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.scale = 0.1
  blue.lifetime=160;
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.scale = 0.1
  green.lifetime=160;
  return green;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.scale = 1
  pink.lifetime=160;
  return pink;
}


// Creating  arrows for bow
function createArrow() {
  
  var a;
  if(a===Math.round(random(1,200)))
{  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.scale=0.35;
  arrow.x = 360;
  arrow.x=bow.x;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  
 return arrow;
} 
}

