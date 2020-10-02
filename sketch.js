var car;
var wall;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "blue";

  speed = random(55, 90);
  weight = random(400, 1500);
  
}

function draw() {
  background("black");  

  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;

    deformation = 0.5 * weight * speed * speed/22509;

    if (deformation > 180){
     car.shapeColor = "red";
    }

    if (deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
     }

     if (deformation < 100){
      car.shapeColor = "green";
     }
  }

   drawSprites();
}