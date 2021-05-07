var bullet,wall
var wall2
var speed, weight; 
var thickness
var Bullet, bulletImage
function preload(){
  bulletImage=loadImage("prU9x.png")
}
function setup() {

  createCanvas(1600,1000);
 

bullet=createSprite(50, 200)
//bullet.addImage(bulletImage)









   speed=random(223,321)
    weight=random(30, 52)
    thickness=random(22,83)
    bullet.velocityX = speed;
    wall = createSprite(1500, 200, thickness,  height/2)
}

function draw() {
  background(200);  
  
  
  if((wall.x - bullet.x<(bullet.width + wall.width) /2)){
     bullet.velocityX = 0

     var damage = 0.5 * weight * speed * speed/(thickness)   
  }
  
  if(damage < 100){
    bullet.shapeColor = "green"
  }

  
  if(damage > 100 && damage < 180){
    bullet.shapeColor = "yellow"
  }
  
  if(damage > 180){
    bullet.shapeColor = "red"
  }
  drawSprites();
}