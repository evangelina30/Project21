var thickness,wall;

var bullets, speed, weight;  

function setup() {
  createCanvas(1600,400);
  
  speed=random(200,315);
  weight=random(30,52);
  thickness=random(22,83);

  wall=createSprite(1100,200,thickness,height/2);
  wall.shapeColor=color(80,80,80); 
  
  bullets = createSprite(50,200,50,5);
  bullets.velocityX= speed;
  bullets.shapeColor=color(255);
}

function draw() {
  background(0);
  if(hasCollided(bullets,wall)) {
    bullets.velocityX=0;
    var damage= 0.5* width* speed* speed/(thickness*thickness*thickness);
    
    if(damage > 10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage < 10)
    {
     wall.shapeColor=color(0,255,0);
    }
    
  drawSprites();
  
   }
 }

function hasCollided(lbullets,lwall)
{
  bulletsRightEdge=lbullets.x +lbullets.width;
  wallLeftEdge=lwall.x;
  if(bulletsRightEdge>=wallLeftEdge)
  {
    return true
  }
else
  {  
   return false;
  }
 
 }
 
