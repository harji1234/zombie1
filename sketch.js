var shooter
var zombie
var zombieImg
var shooterImg
var shotterImg2
var bg
var bulletImg
function preload() {
  bg=loadImage("background.jpg")
  shooterImg=loadAnimation("s1.png")
  shooterImg2=loadAnimation("s2.png","s3.png")
  zombieImg=loadAnimation("z1.png","z2.png")
  bulletImg=loadImage("bullet.png")
}
function setup() {
  createCanvas(800,400);
  shooter=createSprite(50,300,50,50)
  shooter.addAnimation("standing",shooterImg)
  shooter.addAnimation("walking",shooterImg2)
  shooter.scale=0.2
}

function draw() {
  background(bg);  
  drawSprites();
  if(keyWentDown(RIGHT_ARROW)) {
    shooter.changeAnimation("walking",shooterImg2)
    shooter.x+=10
  }
  if(keyWentUp(RIGHT_ARROW)) {
    shooter.changeAnimation("standing",shooterImg)
  }
  spawnZombie();
  if(keyDown("space")) {
    spawnBullet();
  }

}
function spawnZombie() {
  if(frameCount%150===0) {
    zombie=createSprite(width,300,50,50)
    zombie.addAnimation("walking",zombieImg)
    zombie.velocityX=-2
    zombie.scale=0.2

  }
}
function spawnBullet() {
  bullet=createSprite(10,10,10,10)
  bullet.x=shooter.x+45
  bullet.y=shooter.y-20
  bullet.velocityX=3
  bullet.addImage(bulletImg)
  bullet.scale=0.04
}
bullet

