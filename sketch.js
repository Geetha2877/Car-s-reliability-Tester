var car1,car2,car3;
var wall1,wall2,wall3;

function setup() {
  createCanvas(1200,800);
  car1=createSprite(400, 100, 80, 40);
  car1.shapeColor="white";
car2=createSprite(400,250,80,30);
  car2.shapeColor="white";
  car3=createSprite(400,380,80,30);
  car3.shapeColor="white"; 
  wall1=createSprite(100,100,40,70);
  wall1.shapeColor="white";
  wall2=createSprite(100,250,40,70);
  wall2.shapeColor="white";
  wall3=createSprite(100,380,40,70);
  wall3.shapeColor="white";
}

function draw() {
  background(0,0,0); 
 car1.weight=2260;
 car1.velocityX=60;
  car2.weight=3000;
  car2.velocityX=45;
  car3.weight=1560;
  car3.velocityX=40;
  if(0.5*car1.weight*car1.velocityX*car1.velocityX/22500>180||0.5*car2.weight*car2.velocityX*car2.velocityX/22500>180||
    0.5*car23.weight*car3.velocityX*car3.velocityX/22500>1800)
   {
    car1.shapeColor="red";
    car2.shapeColor="red";
    car3.shapeColor="red";
    }
    
    if(0.5*car1.weight*car1.velocityX*car1.velocityX/22500<180&&0.5*car1.weight*car1.velocityX*car1.velocityX/22500>180>80||
      0.5*car2.weight*car2.velocityX*car2.velocityX/22500<180&&0.5*car2.weight*car2.velocityX*car2.velocityX/22500>80||
      0.5*car3.weight*car3.velocityX*car3.velocityX/22500<180&&  0.5*car3.weight*car3.velocityX*car3.velocityX/22500>80)
    {
      car1.shapeColor="orange";
      car2.shapeColor="orange";
      car3.shapeColor="orange";
    }

    if(0.5*car1.weight*car1.velocityX*car1.velocityX/22500<80||
      0.5*car2.weight*car2.velocityX*car2.velocityX/22500<80||
      0.5*car3.weight*car2.velocityX*car2.velocityX/22500<80)
    {
      car1.shapeColor="green";
      car2.shapeColor="green";
      car3.shapeColor="green";
    }
  drawSprites();
}