var garden, gardenImg;

var tom1, tom1_Img;

var tom2_Ani;

var tom4_Img;

var jerry1_Ani;

var jerry2_Img;

var jerry3_Img;

var jerry1;

function preload() {
//load the images here

gardenImg=loadImage("garden.png");

jerry1_Ani=loadAnimation("jerryTwo.png","jerryThree.png");

jerry2_Img=loadImage("jerryFour.png");

jerry3_Img=loadImage("jerryOne.png");

tom1_Img=loadImage("tomOne.png");

tom2_Ani=loadAnimation("tomTwo.png","tomThree.png");

tom4_Img=loadImage("tomFour.png");

}
function setup() {
  createCanvas(800, 800);
  //create tom and jerry sprites here

  garden=createSprite(400,300,0,0);
  garden.addImage(gardenImg);
  //garden.scale=01;
 
  tom1=createSprite(750,530,50,50);
  tom1.scale=0.1;
  tom1.addImage(tom1_Img);
  
  jerry1 = createSprite(80, 530, 50, 50);
  jerry1.scale = 0.1;
  jerry1.addImage(jerry3_Img);

  

}
function draw() {
background(255);
//Write condition here to evalute if tom and jerry collide

//tom1.debug=true;
//jerry1.debug=true;

jerry1.setCollider("circle",-100,0,0);

if (tom1.x - jerry1.x < (tom1.width - jerry1.width)/2){
  tom1.velocityX = 0;
  tom1.addImage("catStop",tom4_Img);
  tom1.changeImage("catStop");
  
  jerry1.addImage("jerry",jerry2_Img);
  jerry1.changeImage("jerry");
 
  tom1.collide(jerry1);

  }


drawSprites();
}




function keyPressed(){
//For moving and changing animation write code here

if (keyCode === LEFT_ARROW){
tom1.velocityX = -5;
tom1.addAnimation("catRunning", tom2_Ani);
tom1.changeAnimation("catRunning");

jerry1.addAnimation("jerryMoving",jerry1_Ani);
jerry1.changeAnimation("jerryMoving");
}

  text(jerry1X + ',' + jerry1Y, 10, 45);

}
