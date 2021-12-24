
function preload(){
  smileImage = loadImage("smile1.gif");
  sadImage = loadImage("sad.gif");
  winImage = loadImage("win.gif");
  cupImage = loadImage("cup.png");
}

function setup(){ 
createCanvas (400,400);
wall1 = createSprite(5,200,10,400);
wall2 = createSprite(395,200,10,400);
wall3 = createSprite(395,5,240,10);
wall4 = createSprite(100,5,240,10);
wall5 = createSprite(395,395,320,10);
wall6 = createSprite(80,395,160,10);
wall7 = createSprite(50,60,10,100);
wall8 = createSprite(100,60,10,100);
wall9 = createSprite(150,60,10,100);
wall10 = createSprite(200,60,10,100);
wall11 = createSprite(300,60,10,75);
wall12 = createSprite(350,60,10,100);
wall13 = createSprite(90,150,375,10);
wall14 = createSprite(360,150,65,10);




wall1.shapeColor= "red";
wall2.shapeColor= "red";
wall3.shapeColor= "red";
wall4.shapeColor= "red";
wall5.shapeColor= "red";
wall6.shapeColor= "red";
wall7.shapeColor= "red";
wall8.shapeColor= "red";
wall9.shapeColor= "red";
wall10.shapeColor= "red";
wall11.shapeColor= "yellow";
wall12.shapeColor= "red";
wall13.shapeColor= "red";
wall14.shapeColor= "red";

smile1 = createSprite(150,200);
smile1.addImage(smileImage);
smile1.scale = 0.2;
  
smile2 = createSprite(250,200);
smile2.addImage(sadImage);
smile2.scale = 0.2;
smile2.visible = false;
  
Winsmile = createSprite(230,200);
Winsmile.addImage(winImage);
Winsmile.scale = 0.7;
Winsmile.visible = false;
  
cup = createSprite(360,350);
cup.addImage (cupImage);
cup.scale = 0.1
}




function draw() {
  background("black");
  
  if(keyDown("right")){
    smile1.x = smile1.x+5
  }
  
    if(keyDown("left")){
    smile1.x = smile1.x-5
  }
  
    if(keyDown("up")){
    smile1.y = smile1.y-5
  }
  
    if(keyDown("down")){
    smile1.y = smile1.y+5
  }
  
  if(smile1.isTouching(wall7)){
    //wall7.visible = false;
    smile1.visible = false;
    smile2.visible = true;
  }
  
  if(smile1.isTouching(cup)){
    smile1.visible = false;
    Winsmile.visible = true;
  }
  drawSprites();
}
