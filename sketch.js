var backgroundc,backImage,player_running,ground,monkey,banana,stone,bananagroup,stonegroup,Score,score,invisibleground,play,end,gamestate;

function preload(){
  backImage=loadImage("jungle.jpg")
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage=loadImage("banana.png")
  obstacleImage=loadImage("stone.png")
}






function setup() {
  createCanvas(400, 400);
  
  bananagroup=createGroup();
stonegroup=createGroup();
  
  
  
  ground=createSprite(1,372,400,2)
  ground.x=ground.width/2
  ground.visible=true
  

  
  backgroundc=createSprite(50,50,50,50)
  backgroundc.addImage("bg",backImage)
  backgroundc.velocityX=-5
  
  
  monkey=createSprite(40,350,20,20)
  monkey.addAnimation("player",player_running)
  monkey.scale=0.1
  
  
  
 play=1
end=0

 gamestate=play

  
  
  
 
  
  score=0
  

  

 
  
  
  
  
}

function draw() {

  background(220);
  
   
  
  
  if((backgroundc).x<10){
    backgroundc.x=backgroundc.width/2
  }
  
  
  ground.visible=true
  
 if (keyDown( "space")){
    monkey.velocityY = -12 ;
    
  }
   monkey.velocityY = monkey.velocityY + 1;
  
  monkey.collide(ground)
  
  if (monkey.isTouching(bananagroup)){
     bananagroup.destroyEach();
   }
  
  if(monkey.isTouching(bananagroup)){
    score++
  }
  
  if(monkey.isTouching(stonegroup)){
    stonegroup.setVelocityXEach(0)
  }
  
  
  
  
  switch(score){
    case 10:player.scale=0.12;
            break;
            
            case 20:player.scale=0.14;
            break;
   
            case 30:player.scale=0.16;
            break;
            
            case 30:player.scale=0.18;
            break;
            
            default:break;
  }
     
  
  
  spawnbanana();
  spawnobstacles();
  
  
  
  
  
  
  
    

 
  drawSprites();
  
  stroke("white")
  textSize(30);
  fill("white")
  text("Score:"+ score, 275, 33);
  
  
  fill(500)
  textSize(30)
  text("X"+mouseX,250,350)
  text("Y"+mouseY,116,407)
  
  
}



  function spawnbanana(){
  if(World.frameCount % 80 === 0) {
   banana=createSprite(164,259,20,20)
    banana.y=(random(120,200))
    banana.velocityX=-3
    banana.lifetime=-50
    banana.addImage("banana",bananaImage)
    banana.scale=0.05
    bananagroup.add(banana)
    
}
}
function spawnobstacles(){
  if(World.frameCount % 80 === 0) {
 stone=createSprite(174,356,20,20)
  
  stone.velocityX=-4
  stone.lifetime=-50
  stone.addImage("Stone",obstacleImage)
  stone.scale=0.1
  stonegroup.add(stone)
  
}
}



  



