var bullet,wall; 
var speed,weight; 


function setup() { 
  createCanvas(1600,400); 
  wall=createSprite(1500,200,60,height/2) 

  bullet=createSprite(50,200,50,5) 
  bullet.shapeColor="white" 
  bullet.velocityX=5;

  thickness = random(22,83);

  speed=random(10,50); 
  weight=random(30,52);
 } 
  
 function draw() 
  { 
    background("cyan"); 
    

    if(wall.x-bullet.x <(bullet.width+wall.width)/2){

      var deformation= 0.5 * weight * speed *speed / (thickness*thickness*thickness); 
       
       bullet.velocityX =0; 
       
       
       if(deformation<10)
       { wall.shapeColor=("green"); } 
       
       if(deformation>10){
       wall.shapeColor=("red") } 
      
    }
       drawSprites();
       }


